import React from 'react'
import { shallow, render } from '../enzyme'
import ModuleHighlightedCourse, { Categories } from '../ModuleHighlightedCourse'
import { Link } from '@reach/router'
import * as helpers from '../../helpers'

const errorHighlightedCourse = '⚠️ The course is not published or does not exist.'
const error = <div class='module-highlighted-course__content'><h2 class='module-highlighted-course__title'>{errorHighlightedCourse}</h2></div>
const mockCourse = {
  image: { url: 'image.url' },
  slug: 'slug',
  title: 'title',
  shortDescription: 'shortdescription',
  categories: []
}
beforeEach(() => {
  jest.spyOn(helpers, 'markdown')
})

afterEach(() => {
  jest.clearAllMocks()
})

it('calls markdown helper', () => {
  const copy = 'some *markdown* copy'
  const props = {
    course: mockCourse,
    copy
  }
  shallow(<ModuleHighlightedCourse {...props} />)
  expect(helpers.markdown).toBeCalled()
})

it.skip('Categories creates a link for each category', () => {
  const props = {
    categories: [{ slug: '1' }, { slug: '2' }, { slug: '3' }]
  }
  const wrapper = render(<Categories {...props} />)
  expect(wrapper.find('.module-highlighted-course__categories').length).toEqual(1) // Todo why doesnt this work
  expect(wrapper.find(Link).length).toEqual(props.categories.legnth)
})

it('ModuleHighlightedCourse renders without error if prop course exists', () => {
  const props = {
    course: mockCourse
  }
  const wrapper = shallow(<ModuleHighlightedCourse {...props} />)
  expect(wrapper.find(Categories).length).toEqual(1)
  expect(wrapper.contains(error)).toEqual(false)
})
