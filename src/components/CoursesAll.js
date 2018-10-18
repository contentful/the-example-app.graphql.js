import React from 'react'
import { courses } from '../schema'
import Courses from './Courses'
import ConnectedComponent from './ConnectedComponent'

const CoursesAll = () => {
  const errorCheck = (data) => {
    return data.courseCollection.items.length < 1
  }
  const success = (data) => {
    const { courseCollection } = data
    return (
      <Courses courseCollection={courseCollection} title='All courses' />
    )
  }
  return <ConnectedComponent query={courses} errorCheck={errorCheck} success={success} />
}

export default CoursesAll
