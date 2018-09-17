import React from 'react'
import { Query } from 'react-apollo'
import Lesson from './Lesson'
import Course from './Course'
import { courseBySlug } from '../schema'
import Loading from './Loading'
import Error from './Error'

const CourseLesson = (props) => {
  const { 'course-slug': slug, 'lesson-slug': lessonSlug } = props
  return <Query query={courseBySlug} variables={{ slug }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <Error />
        const course = data.courseCollection.items[0] // TODO IS IT OK to just pick the first one that matches?
        return (
          <React.Fragment>
            <Course course={course}><Lesson course={course} lessonSlug={lessonSlug} /></Course>
          </React.Fragment>
        )
      }
    }
  </Query>
}

export default CourseLesson
