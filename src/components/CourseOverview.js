import React from 'react'
import { Query } from 'react-apollo'
import { courseBySlug } from '../schema'
import Course from './Course'
import Loading from './Loading'
import Error from './Error'

const CourseOverview = (props) => {
  const { 'course-slug': slug, 'lesson-slug': lessonSlug } = props
  return <Query query={courseBySlug} variables={{ slug }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error || data.courseCollection.items.length < 1) return <Error />
        const course = data.courseCollection.items[0]
        return (
          <Course course={course} lessonSlug={lessonSlug} />
        )
      }
    }
  </Query>
}

export default CourseOverview
