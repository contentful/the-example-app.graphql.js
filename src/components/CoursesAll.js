import React from 'react'
import { Query } from 'react-apollo'
import { courses } from '../schema'
import Courses from './Courses'
import Breadcrumb from './Breadcrumb'

const CoursesAll = (props) => {
  return <Query query={courses} >
    {
      ({loading, error, data}) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        const {courseCollection} = data
        return (
          <React.Fragment>
            <Breadcrumb path={props.uri} title={(props.path.endsWith('/categories') ? 'Categories' : 'Courses')} />
            <Courses courseCollection={courseCollection} title='All courses' />
          </React.Fragment>
        )
      }
    }
  </Query>
}

export default CoursesAll
