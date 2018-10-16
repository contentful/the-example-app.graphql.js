import React from 'react'
import { shallow } from '../enzyme'
import ConnectedComponent from '../ConnectedComponent'
import { home } from '../../schema'
import Home from '../Home'

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home />)
})

it('returns a connected component with correct props', () => {
  const cc = wrapper.find(ConnectedComponent).first()
  expect(wrapper.find(ConnectedComponent).length).toEqual(1)
  expect(cc.prop('query')).toEqual(home)
  expect(cc.prop('success')).toBeDefined()
})
