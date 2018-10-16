import React from 'react'
import { shallow } from '../enzyme'
import ConnectedComponent from '../ConnectedComponent'
import { coursesOfCategory } from '../../schema'
import CoursesCategory from '../CoursesCategory'
import Courses from '../Courses'

let wrapper;
const defaultProps = {
  'category-slug': 'best-category'
}
beforeEach(() => {
  wrapper = shallow(<CoursesCategory {...defaultProps} />)
})

it('returns a connected component with correct props', () => {
  const cc = wrapper.find(ConnectedComponent).first()
  expect(wrapper.find(ConnectedComponent).length).toEqual(1)
  expect(cc.prop('query')).toEqual(coursesOfCategory)
  expect(cc.prop('errorCheck')).toBeDefined()
  expect(cc.prop('success')).toBeDefined()
})

it('errorCheck is set up correctly', () => {
  const validCase = {
    categoryCollection: {
      items: ['first item']
    }
  }
  const errorCase = {
    categoryCollection: {
      items: []
    }
  }
  const errorCheck = wrapper.find(ConnectedComponent).first().prop('errorCheck')
  expect(errorCheck(validCase)).toEqual(false)
  expect(errorCheck(errorCase)).toEqual(true)
})

it('success renders Course with correct props', () => {
  const items = [
    {title: '1', slug: 'slug1', linkedFrom: { entryCollection: []}}
  ]
  const data = {
    categoryCollection: {
      items
    }
  }
  const success = wrapper.find(ConnectedComponent).first().prop('success')
  const result = success(data)
  expect(result).toEqual(<Courses courseCollection={[]} title={items[0].title} />)
})
