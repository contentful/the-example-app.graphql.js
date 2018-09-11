import React from 'react'
import { Query } from 'react-apollo'
import { lessonBySlug } from '../schema'
import LessonCodeSnippet from './LessonCodeSnippet'
import LessonCopy from './LessonCopy'
import LessonImage from './LessonImage'

const Lesson = ({lessonSlug: slug}) => {
  return <Query query={lessonBySlug} variables={{slug}}>
  {
    ({loading, error, data}) => {
      if (loading) return <p>Loading...</p>
      console.log(data)
      console.log(error)
      console.log(data.lessonCollection.items.length)
      if (error || !data.lessonCollection || !data.lessonCollection.items.length) return <p>Error :(</p>
      const lesson = data.lessonCollection.items[0] //TODO is it ok tojust pick the first match?
      const moduleItems = lesson.modulesCollection.items.map(lessonModule => {
        switch (lessonModule.__typename) {
          case 'LessonCodeSnippets':
            return <LessonCodeSnippet key={lessonModule.title} {...lessonModule} />
          case 'LessonImage':
            return <LessonImage key={lessonModule.title} {...lessonModule} />
          case 'LessonCopy':
            return <LessonCopy key={lessonModule.title} {...lessonModule} />
          default:
            return null
        }
      })
      console.log(moduleItems)
      return (
        <div className='lesson'>
          <h1 className='lesson__title'>{lesson.title}</h1>
          <div className='lesson__modules'>
            LESSON YAY
            {moduleItems.length && moduleItems}
          </div>
        </div>
      )
    }
  }

  </Query>

}

export default Lesson
