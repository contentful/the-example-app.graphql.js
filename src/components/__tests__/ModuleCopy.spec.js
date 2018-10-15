import React from 'react'
import { shallow } from '../enzyme'
import ModuleCopy from '../ModuleCopy'
import * as helpers from '../../helpers'

beforeEach(() => {
  jest.spyOn(helpers, 'markdown')
})

afterEach(() => {
  jest.clearAllMocks()
})

it('calls markdown helper', () => {
  const copy = 'some *markdown* copy'
  shallow(<ModuleCopy {...{ copy }} />)
  expect(helpers.markdown).toBeCalled()
})

it('adds --emphasized to class if visualStyle prop = Emphasized', () => {
  const props = {
    visualStyle: 'Emphasized',
    headline: true,
    ctaTitle: 'ctaTitle',
    ctaLink: 'my.link.com'
  }
  const wrapper = shallow(<ModuleCopy {...props} />)
  expect(wrapper.find('.module-copy--emphasized').length > 0).toEqual(true)
  expect(wrapper.find('.module-copy__wrapper--emphasized').length > 0).toEqual(true)
  expect(wrapper.find('.module-copy__first--emphasized').length > 0).toEqual(true)
  expect(wrapper.find('.module-copy__headline--emphasized').length > 0).toEqual(true)
  expect(wrapper.find('.module-copy__copy--emphasized').length > 0).toEqual(true)
  expect(wrapper.find('.module-copy__second--emphasized').length > 0).toEqual(true)
  expect(wrapper.find('.module-copy__cta--emphasized').length > 0).toEqual(true)
})

it('does not add --emphasized to class if visualStyle prop != Emphasized', () => {
  const props = {
    visualStyle: 'boring',
    headline: true,
    ctaTitle: 'ctaTitle',
    ctaLink: 'my.link.com'
  }
  const wrapper = shallow(<ModuleCopy {...props} />)
  expect(wrapper.find('.module-copy--emphasized').length == 0).toEqual(true)
  expect(wrapper.find('.module-copy__wrapper--emphasized').length == 0).toEqual(true)
  expect(wrapper.find('.module-copy__first--emphasized').length == 0).toEqual(true)
  expect(wrapper.find('.module-copy__headline--emphasized').length == 0).toEqual(true)
  expect(wrapper.find('.module-copy__copy--emphasized').length == 0).toEqual(true)
  expect(wrapper.find('.module-copy__second--emphasized').length == 0).toEqual(true)
  expect(wrapper.find('.module-copy__cta--emphasized').length == 0).toEqual(true)
})

it('does not render headline if prop does not exist', () => {
  const props = {
    visualStyle: false
  }
  const wrapper = shallow(<ModuleCopy {...props} />)
  expect(wrapper.find('.module-copy__headline').length).toEqual(0)
})

it('does not render cta if link and title do not exist', () => {
  const ctaClassName = '.module-copy__cta'
  let wrapper = shallow(<ModuleCopy {...{ visualStyle: false }} />)
  expect(wrapper.find(ctaClassName).length).toEqual(0)
  wrapper = shallow(<ModuleCopy {...{ ctaLink: 'my.link' }} />)
  expect(wrapper.find(ctaClassName).length).toEqual(0)
  wrapper = shallow(<ModuleCopy {...{ ctaTitle: 'mytitle' }} />)
  expect(wrapper.find(ctaClassName).length).toEqual(0)
  wrapper = shallow(<ModuleCopy {...{ ctaTitle: 'title', ctaLink: 'link' }} />)
  expect(wrapper.find(ctaClassName).length).toEqual(1)
})
