import React from 'react'
import { shallow } from '../enzyme'
import Breadcrumb from '../Breadcrumb'
import { Link } from '@reach/router'
let location, wrapper;
beforeEach(() => {
  location = {
    pathname: 'this/is/my/pathname-very-fancy'
  }
  wrapper = shallow(<Breadcrumb location={location} />)
})

it('always adds a home link', () => {
  const myWrapper = shallow(<Breadcrumb location={{pathname: 'blah'}}/>)
  expect(myWrapper.contains(<li key='home'><Link to='/'>Home</Link></li>)).toEqual(true)
})

it('adds a link for each url component', () => {
  expect(wrapper.find(Link).length).toEqual(location.pathname.split('/').length + 1)
})

it('cleans up link labels', () => {
  expect(wrapper.find(Link).last().text()).toEqual('Pathname Very Fancy')
})

it('concatenates link paths', () => {
  expect(wrapper.find(Link).last().prop('to')).toEqual(location.pathname)
})
