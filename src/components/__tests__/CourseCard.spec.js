import React from 'react'
import { shallow } from '../enzyme'
import CourseCard from '../CourseCard'
import { Link } from '@reach/router'

it('renders the correct number of category links', () => {
  const props = {}
  const categoriesCollection = { items: [] }
  for (let i = 0; i < 3; i++) {
    categoriesCollection.items.push({ slug: i, title: `${i} title` })
  }
  props.course = {
    categoriesCollection,
    title: 'title',
    shortDescription: 'short d',
    slug: 'course-slug'
  }
  const wrapper = shallow(<CourseCard {...props} />)
  expect(wrapper.find(Link).length).toEqual(categoriesCollection.items.length + 2)
})
