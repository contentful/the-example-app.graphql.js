import React from 'react'
import { coursesOfCategory } from '../schema'
import Courses from './Courses'
import ConnectedComponent from './ConnectedComponent'

const CoursesCategory = (props) => {
  const { 'category-slug': slug } = props
  const errorCheck = (data) => {
    return data.categoryCollection.items.length < 1
  }
  const success = (data) => {
    const category = data.categoryCollection.items[0]
    const courseCollection = category.linkedFrom.entryCollection
    return (
      <Courses courseCollection={courseCollection} title={category.title} />
    )
  }
  return <ConnectedComponent query={coursesOfCategory} variables={{ slug }}
    errorCheck={errorCheck} success={success} />
}

export default CoursesCategory
