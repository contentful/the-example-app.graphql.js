import React from 'react'
import { Query } from 'react-apollo'
import { courses } from '../schema'
import Courses from './Courses'
import Loading from './Loading'
import Error from './Error'

const CoursesAll = ({children}) => {
  return <Query query={courses} >
    {
      ({loading, error, data}) => {
        if (loading) return <Loading />
        if (error || data.courseCollection.items.length < 1) return <Error />
        const {courseCollection} = data
        return (
          <React.Fragment>
            <Courses courseCollection={courseCollection} title='All courses' />
            {children}
          </React.Fragment>
        )
      }
    }
  </Query>
}

export default CoursesAll
