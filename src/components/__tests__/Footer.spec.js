import React from 'react'
import { shallow } from '../enzyme'
import Footer from '../Footer'
import NavLink from '../NavLink'

it('renders NavLinks to home and courses', () => {
  const wrapper = shallow(<Footer />)
  expect(wrapper.find(NavLink).length).toEqual(2)
  expect(wrapper.find(NavLink).first().prop('to')).toEqual('/')
  expect(wrapper.find(NavLink).last().prop('to')).toEqual('/courses')
})
