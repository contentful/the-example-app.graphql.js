import React from 'react'
import { shallow } from '../enzyme'
import Course from '../Course'
import IntroLesson from '../IntroLesson'
import Lesson from '../Lesson'
import NavLink from '../NavLink'

it('renders the correct number of sidebar links and intro if lesson doesnt exist in collection', () => {
  const props = {}
  props.course = {
    lessonsCollection: { items: [{slug:'item1'}, {slug:'item2'}]}
  }
  props.lessonSlug = 'my-lesson'
  const wrapper = shallow(<Course {...props} />)
  expect(wrapper.find(NavLink).length).toEqual(props.course.lessonsCollection.items.length + 1)
  expect(wrapper.find(IntroLesson).length).toEqual(1)
  expect(wrapper.find(Lesson).length).toEqual(0)
})

it('sends correct props to sidebar links', () => {
  const lesson = {
    slug: 'lesson-slug',
    title: 'fancy lesson'
  }
  const course = { lessonsCollection: { items: [lesson]}, slug: 'course-slug'}
  const props = { course }
  const wrapper = shallow(<Course {...props} />)
  expect(wrapper.find(NavLink).first().prop('to')).toEqual(`/courses/${course.slug}`)
  expect(wrapper.find(NavLink).at(1).prop('to')).toEqual(`/courses/${course.slug}/lessons/${lesson.slug}`)
})

it('sends null nextLesson prop to lesson if current slug is last in lesson collection', () => {
  const lessonsCollection = { items: [
    {slug: 'my-slug'}
  ]}
  const props = {
    course: {lessonsCollection},
    lessonSlug: 'my-slug'
  }
  const wrapper = shallow(<Course {...props} />)
  expect(wrapper.find(Lesson).prop('nextLesson')).toEqual(null)
})

it('sends correct nextLesson prop to lesson if there is a next lesson', () => {
  const lessonsCollection = { items: [
    {slug: 'bad-slug'},
    {slug: 'not-my-slug'},
    {slug: 'my-slug'},
    {slug: 'final-slug'}
  ]}
  const props = {
    course: {lessonsCollection},
    lessonSlug: 'my-slug'
  }
  const wrapper = shallow(<Course {...props} />)
  expect(wrapper.find(Lesson).prop('nextLesson')).toEqual(lessonsCollection.items[3])
})
