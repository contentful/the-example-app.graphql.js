import React from 'react'
import { shallow } from '../enzyme'
import Lesson from '../Lesson'
import { Link } from '@reach/router'

let wrapper
const defaultProps = {
  lesson: { modulesCollection: { items: [] } },
  nextLesson: false,
  courseSlug: 'course-slug'
}

beforeEach(() => {
  wrapper = shallow(<Lesson {...defaultProps} />)
})

it('does not render Link to nextLesson if prop is falsy', () => {
  expect(wrapper.find(Link).length).toEqual(0)
})

it('renders link to nextLesson if prop is truthy', () => {
  const props = Object.assign({}, defaultProps, { nextLesson: { slug: 'next-lesson' } })
  wrapper = shallow(<Lesson {...props} />)
  expect(wrapper.find(Link).length).toEqual(1)
  expect(wrapper.find(Link).first().prop('to')).toEqual(`/courses/${defaultProps.courseSlug}/lessons/${props.nextLesson.slug}`)
})
