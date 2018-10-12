import React from 'react'
import { shallow } from '../enzyme'
import Courses from '../Courses'
import CourseCard from '../CourseCard'
import CategoriesSidebar from '../CategoriesSidebar'
let wrapper;
const defaultProps = {
  courseCollection: { items: []},
  title: 'mytitle'
}
const renderWithProps = (props) => {
  wrapper = shallow(<Courses {...props} />)
}

it('renders the category sidebar and courseCards', () => {
  const courseCollection = {items: []}
  for (let i = 0; i<3; i++) {
    courseCollection.items.push({slug: i, title: `${i} title`})
  }
  const props = Object.assign({}, defaultProps, {courseCollection})
  renderWithProps(props)
  expect(wrapper.find(CategoriesSidebar).length).toEqual(1)
  expect(wrapper.find(CourseCard).length).toEqual(courseCollection.items.length)
  expect(wrapper.find(CourseCard).first().prop('course')).toEqual(courseCollection.items[0])
})

it('does not render any courseCards if there are no courses in courseCollection', () => {
  renderWithProps(defaultProps)
  expect(wrapper.find(CourseCard).length).toEqual(0)
})
