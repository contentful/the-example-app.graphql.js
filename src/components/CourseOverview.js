import React from 'react'
import { Query } from 'react-apollo'
import { courseBySlug } from '../schema'
import Course from './Course'
import IntroLesson from './IntroLesson'
import Breadcrumb from './Breadcrumb'

const CourseOverview = (props) => {
  const { 'course-slug': slug } = props
  return <Query query={courseBySlug} variables={{ slug }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        const course = data.courseCollection.items[0] // TODO IS IT OK to just pick the first one that matches?
        console.log(course)
        return (
          <React.Fragment>
            <Breadcrumb />
            <Course course={course}><IntroLesson course={course} /></Course>
          </React.Fragment>
        )
      }
    }
  </Query>
}

export default CourseOverview
