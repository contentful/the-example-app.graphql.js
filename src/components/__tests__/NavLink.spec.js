import React from 'react'
import { shallow } from '../enzyme'
import NavLink from '../NavLink'
import { Link } from '@reach/router'

let wrapper, getPropsFunc, props;

const expectActiveClass = (result, expectation) => {
  return expect(result.className.includes('active')).toEqual(expectation)
}

beforeEach(() => {
  wrapper = shallow(<NavLink />)
  getPropsFunc = wrapper.find(Link).first().prop('getProps')
})

it('for home route, use isCurrent to determine if active', () => {
  props = {href: '/', isCurrent: true, isPartiallyCurrent: false}
  expectActiveClass(getPropsFunc(props), true)
})

it('for AllCoursesSidebar link, use isCurrent to determine if active', () => {
  props = {href: '/courses', isCurrent: true, isPartiallyCurrent: false}
  wrapper = shallow(<NavLink {...{className: 'sidebar-menu__link'}} />)
  getPropsFunc = wrapper.find(Link).first().prop('getProps')
  expectActiveClass(getPropsFunc(props), true)
})

it('for courseOverview link, use isCurrent to determine if active', () => {
  props = {href: '', isCurrent: true, isPartiallyCurrent: false}
  wrapper = shallow(<NavLink>Course overview</NavLink>)
  getPropsFunc = wrapper.find(Link).first().prop('getProps')
  expectActiveClass(getPropsFunc(props), true)
})

it('for nonHomeRoute, use isPartiallyCurrent to determine if active', () => {
  props = {href: '/special/route', isCurrent: false, isPartiallyCurrent: true}
  expectActiveClass(getPropsFunc(props), true)
})

it('determines isAllCoursesSidebarLink using both className and href', () => {
  props = {href: '/courses', isCurrent: true, isPartiallyCurrent: false}
  wrapper = shallow(<NavLink {...{className: 'sidebarmenulink-not-right'}} />)
  getPropsFunc = wrapper.find(Link).first().prop('getProps')
  expectActiveClass(getPropsFunc(props), false)

  props = {href: '/not-courses', isCurrent: true, isPartiallyCurrent: false}
  wrapper = shallow(<NavLink {...{className: 'sidebar-menu__link'}} />)
  getPropsFunc = wrapper.find(Link).first().prop('getProps')
  expectActiveClass(getPropsFunc(props), false)
})
