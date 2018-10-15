import React from 'react'
import { shallow } from '../enzyme'
import LessonCopy from '../LessonCopy'
import * as helpers from '../../helpers'

beforeEach(() => {
  jest.spyOn(helpers, 'markdown')
})

afterEach(() => {
  jest.clearAllMocks()
})

it('calls markdown helper', () => {
  const copy = 'some *markdown* copy'
  shallow(< LessonCopy {...{ copy }} />)
  expect(helpers.markdown).toBeCalled()
})
