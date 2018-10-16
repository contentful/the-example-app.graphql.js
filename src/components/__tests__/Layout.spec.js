import React from 'react'
import { shallow } from '../enzyme'
import { Location } from '@reach/router'
import Header from '../Header'
import Footer from '../Footer'
import Breadcrumb from '../Breadcrumb'
import Layout from '../Layout'
let wrapper;

it('renders header and footer and children', () => {
  const children = "this is child element"
  wrapper = shallow(<Layout>{children}</Layout>)
  expect(wrapper.contains(children))
  expect(wrapper.find(Header).length).toEqual(1)
  expect(wrapper.find(Footer).length).toEqual(1)
})

it('will render Breadcrumb if not home route, and provide it with location as prop', () => {
  wrapper = shallow(<Layout />)
  const locationChild = wrapper.find(Location).prop('children')
  const location = { key: 'val', mylocation: 'latitude,longitude'}
  expect(locationChild({location})).toEqual(<Breadcrumb location={location} />)
})

it('will not render Breadcrumb if at home route', () => {
  wrapper = shallow(<Layout />)
  const locationChild = wrapper.find(Location).prop('children')
  const location = { pathname: '/' }
  expect(locationChild({location})).toEqual(false)
})
