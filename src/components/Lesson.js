import React from 'react'
import { Query } from 'react-apollo'
import { lessonBySlug } from '../schema'
import { componentTypeMap } from '../helpers'

const Lesson = ({lessonSlug: slug}) => {
  return <Query query={lessonBySlug} variables={{slug}}>
    {
      ({loading, error, data}) => {
        if (loading) return <p>Loading...</p>
        if (error || !data.lessonCollection || !data.lessonCollection.items.length) return <p>Error :(</p>
        const lesson = data.lessonCollection.items[0] // TODO is it ok tojust pick the first match?
        const moduleItems = lesson.modulesCollection.items.map(
          lessonModule => componentTypeMap(lessonModule.__typename, {key: lessonModule.title, ...lessonModule}))
        return (
          <div className='lesson'>
            <h1 className='lesson__title'>{lesson.title}</h1>
            <div className='lesson__modules'>
              {moduleItems.length && moduleItems}
            </div>
          </div>
        )
      }
    }

  </Query>
}

export default Lesson
