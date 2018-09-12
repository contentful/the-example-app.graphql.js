import React from 'react'
import { Query } from 'react-apollo'
import { courses } from '../schema'
import Courses from './Courses'

const CoursesAll = () => {
  return <Query query={courses} >
    {
      ({loading, error, data}) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        const {courseCollection} = data
        return (
          <Courses courseCollection={courseCollection} title='All courses' />
        )
      }
    }
  </Query>
}

export default CoursesAll
