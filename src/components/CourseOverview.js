import React from 'react'
import { courseBySlug } from '../schema'
import Course from './Course'
import ConnectedComponent from './ConnectedComponent'

const CourseOverview = (props) => {
  const { 'course-slug': slug, 'lesson-slug': lessonSlug } = props
  const errorCheck = (data) => {
    return data.courseCollection.items.length < 1
  }
  const success = (data) => {
    const course = data.courseCollection.items[0]
    return (
      <Course course={course} lessonSlug={lessonSlug} />
    )
  }
  return <ConnectedComponent query={courseBySlug} variables={{ slug }}
    errorCheck={errorCheck} success={success} />
}

export default CourseOverview
