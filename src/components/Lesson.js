import React from 'react'
import { componentTypeMap } from '../helpers'
import { Link } from '@reach/router'

const Lesson = ({ lesson, nextLesson, courseSlug }) => {
  const moduleItems = lesson.modulesCollection.items.map(
    lessonModule => componentTypeMap(lessonModule.__typename, { key: lessonModule.title, ...lessonModule }))
  return (
    <div className='lesson'>
      <h1 className='lesson__title'>{lesson.title}</h1>
      <div className='lesson__modules'>
        {moduleItems.length && moduleItems}
      </div>
      { nextLesson && <Link className='lesson__cta cta' to={`/courses/${courseSlug}/lessons/${nextLesson.slug}`}>Go to the next lesson</Link>}
    </div>
  )

}

export default Lesson
