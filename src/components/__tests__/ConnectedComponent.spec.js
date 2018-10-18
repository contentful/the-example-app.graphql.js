import React from 'react'
import { shallow } from '../enzyme'
import ConnectedComponent from '../ConnectedComponent'
import Loading from '../Loading'
import Error from '../Error'
import { Query } from 'react-apollo'
let wrapper, childFunc
const defaultProps = {
  query: { query: 'graphql query' },
  variables: { key: 'val' },
  success: (data) => `succes: ${data}`
}

beforeEach(() => {
  wrapper = shallow(<ConnectedComponent {...defaultProps} />)
  childFunc = wrapper.find(Query).first().prop('children')
})

it('renders a query component with correct props', () => {
  expect(wrapper.find(Query).length).toEqual(1)
  expect(wrapper.find(Query).first().prop('variables')).toEqual(defaultProps.variables)
  expect(wrapper.find(Query).first().prop('query')).toEqual(defaultProps.query)
})

it('default errorCheck returns false', () => {
  const data = 'blah'
  // If loading, error is false, and error check by default returns false, it will execute success func
  expect(childFunc({ loading: false, error: false, data })).toEqual(defaultProps.success(data))
})

it('renders Loading component if query returns loading status', () => {
  expect(childFunc({ loading: true })).toEqual(<Loading />)
})

it('renders Error component if query returns error status', () => {
  expect(childFunc({ loading: false, error: true })).toEqual(<Error />)
})

it('renders Error component if errorCheck prop evalutes to true', () => {
  const props = {
    query: { key: 'val' },
    errorCheck: () => true
  }
  wrapper = shallow(<ConnectedComponent {...props} />)
  childFunc = wrapper.find(Query).first().prop('children')
  expect(childFunc({ loading: false, error: false })).toEqual(<Error />)
})

it('returns result of success prop if no errors, loading status', () => {
  const props = {
    query: { key: 'val' },
    errorCheck: () => false,
    success: () => 'success result thing'
  }
  wrapper = shallow(<ConnectedComponent {...props} />)
  childFunc = wrapper.find(Query).first().prop('children')
  expect(childFunc({ loading: false, error: false, data: 'blah' })).toEqual(props.success())
})
