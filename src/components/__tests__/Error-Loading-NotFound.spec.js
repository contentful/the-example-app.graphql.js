import React from 'react'
import { shallow } from '../enzyme'
import Error from '../Error'
import Loading from '../Loading'
import NotFound from '../NotFound'
import Message from '../Message'

it('Error renders a message with correct text', () => {
  const wrapper = shallow(<Error />)
  expect(wrapper.find(Message).length).toEqual(1)
  expect(wrapper.find(Message).prop('children')).toEqual('Error :(')
})

it('Loading renders a message with correct text', () => {
  const wrapper = shallow(<Loading />)
  expect(wrapper.find(Message).length).toEqual(1)
  expect(wrapper.find(Message).prop('children')).toEqual('Loading...')
})

it('NotFound renders a message with correct text', () => {
  const wrapper = shallow(<NotFound />)
  expect(wrapper.find(Message).length).toEqual(1)
  expect(wrapper.find(Message).prop('children')).toEqual('The page you are trying to open does not exist.')
})
