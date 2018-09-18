import React from 'react'
import SidebarMenu from './SidebarMenu'
import { Link } from '@reach/router'
import Lesson from './Lesson'
import IntroLesson from './IntroLesson'

const Course = ({course, lessonSlug}) => {
  const lessons = course.lessonsCollection.items
  let matchingLessons = null
  // prep sidebar
  const sidebarLinks = [
    <div key='course-overview' className='table-of-contents__item'>
      <Link className='table-of-contents__link' to={`/courses/${course.slug}` /* +query??? */}>Course overview</Link>
    </div>
  ]

  lessons.forEach(lesson => {
    sidebarLinks.push(
      <div key={lesson.slug} className='table-of-contents__item'>
        <Link className='table-of-contents__link' to={`/courses/${course.slug}/lessons/${lesson.slug}` /* +query??? */}>{lesson.title}</Link>
      </div>
    )
  })

  if (lessonSlug) {
    matchingLessons = lessons.filter(lesson => lesson.slug === lessonSlug)
  }

  return (
    <div className='layout-sidebar'>
      <SidebarMenu title='Table of Contents'>
        <div className='table-of-contents'>
          <div className='table-of-contents__list'>
            {sidebarLinks}
          </div>
        </div>
      </SidebarMenu>
      <section className='layout-sidebar__content'>
      {
        (matchingLessons && matchingLessons.length > 0) ? <Lesson lesson={matchingLessons[0]} /> : <IntroLesson course={course} />
      }
      </section>
    </div>
  )
}

export default Course
