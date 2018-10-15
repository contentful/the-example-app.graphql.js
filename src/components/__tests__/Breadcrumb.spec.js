import React from 'react'
import { shallow } from '../enzyme'
import Breadcrumb from '../Breadcrumb'
import { Link } from '@reach/router'

it('always adds a home link', () => {
  const wrapper = shallow(<Breadcrumb location={{pathname: 'blah'}}/>)
  expect(wrapper.contains(<li key='home'><Link to='/'>Home</Link></li>)).toEqual(true)
})

it('adds a link for each url component', () => {
  const location = {
    pathname: 'this/is/my/pathname'
  }
  const wrapper = shallow(<Breadcrumb location={location} />)
  expect(wrapper.find(Link).length).toEqual(location.pathname.split('/').length + 1)
})

it('cleans up link labels', () => {
  const location = {
    pathname: 'this/is/my/pathname-very-fancy'
  }
  const wrapper = shallow(<Breadcrumb location={location} />)
  expect(wrapper.find(Link).last().text()).toEqual('Pathname Very Fancy')
})

it('concatenates link paths', () => {
  const location = {
    pathname: 'this/is/my/pathname-very-fancy'
  }
  const wrapper = shallow(<Breadcrumb location={location} />)
  expect(wrapper.find(Link).last().prop('to')).toEqual(location.pathname)
})
