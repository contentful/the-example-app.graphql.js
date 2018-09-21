import React from 'react'
import { Query } from 'react-apollo'
import { coursesOfCategory } from '../schema'
import Courses from './Courses'
import Loading from './Loading'
import Error from './Error'

const CoursesCategory = (props) => {
  const { 'category-slug': slug } = props
  return <Query query={coursesOfCategory} variables={{ slug }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error || data.categoryCollection.items.length < 1) return <Error />
        const category = data.categoryCollection.items[0]
        const courseCollection = category.linkedFrom.entryCollection
        return (
          <Courses courseCollection={courseCollection} title={category.title} />
        )
      }
    }
  </Query>
}

export default CoursesCategory
