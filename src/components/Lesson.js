import React from 'react'
import { componentTypeMap } from '../helpers'

const Lesson = ({ lesson }) => {
  const moduleItems = lesson.modulesCollection.items.map(
    lessonModule => componentTypeMap(lessonModule.__typename, { key: lessonModule.title, ...lessonModule }))
  return (
    <div className='lesson'>
      <h1 className='lesson__title'>{lesson.title}</h1>
      <div className='lesson__modules'>
        {moduleItems.length && moduleItems}
      </div>
    </div>
  )

}

export default Lesson
