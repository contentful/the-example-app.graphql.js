import React from 'react'
import { Query } from 'react-apollo'
import { coursesOfCategory } from '../schema'
import Courses from './Courses'

const CoursesCategory = (props) => {
  const {'category-slug': slug } = props
  return <Query query={coursesOfCategory} variables={{slug}}>
    {
      ({loading, error, data}) => {
        if (loading) return <p>Loading...</p>
        if (error || data.categoryCollection.items.length < 1) return <p>Error :(</p>
        const category = data.categoryCollection.items[0] //TODO is it okay to just take the first one that matches?
        const courseCollection = category.linkedFrom.entryCollection
        return (
          <Courses courseCollection={courseCollection} title={category.title}/>
        )
      }
    }
  </Query>
}

export default CoursesCategory
