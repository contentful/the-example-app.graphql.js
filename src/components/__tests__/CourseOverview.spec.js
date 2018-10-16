import React from 'react'
import { shallow } from '../enzyme'
import ConnectedComponent from '../ConnectedComponent'
import { courseBySlug } from '../../schema'
import CourseOverview from '../CourseOverview'
import Course from '../Course'

let wrapper;
const defaultProps = {
  'course-slug': 'best-course',
  'lesson-slug': 'best-lesson'
}
beforeEach(() => {
  wrapper = shallow(<CourseOverview {...defaultProps} />)
})

it('returns a connected component with correct props', () => {
  const cc = wrapper.find(ConnectedComponent).first()
  expect(wrapper.find(ConnectedComponent).length).toEqual(1)
  expect(cc.prop('query')).toEqual(courseBySlug)
  expect(cc.prop('errorCheck')).toBeDefined()
  expect(cc.prop('success')).toBeDefined()
})

it('errorCheck is set up correctly', () => {
  const validCase = {
    courseCollection: {
      items: ['first item']
    }
  }
  const errorCase = {
    courseCollection: {
      items: []
    }
  }
  const errorCheck = wrapper.find(ConnectedComponent).first().prop('errorCheck')
  expect(errorCheck(validCase)).toEqual(false)
  expect(errorCheck(errorCase)).toEqual(true)
})

it('success renders Course with correct props', () => {
  const items = [
    {title: '1', slug: 'slug1'}
  ]
  const data = {
    courseCollection: {
      items
    }
  }
  const success = wrapper.find(ConnectedComponent).first().prop('success')
  const result = success(data)
  expect(result).toEqual(<Course course={items[0]} lessonSlug={defaultProps['lesson-slug']} />)
})
