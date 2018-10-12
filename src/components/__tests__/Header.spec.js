import React from 'react'
import { shallow } from '../enzyme'
import Header from '../Header'
import NavLink from '../NavLink'
import { Link } from '@reach/router'

it('renders NavLinks to home and courses', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find(NavLink).length).toEqual(2)
  expect(wrapper.find(NavLink).first().prop('to')).toEqual('/')
  expect(wrapper.find(NavLink).last().prop('to')).toEqual('/courses')
  expect(wrapper.find(Link).length).toEqual(1)
})
