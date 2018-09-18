import React from 'react'
import SidebarMenu from './SidebarMenu'
import { Link } from '@reach/router'
import Lesson from './Lesson'
import IntroLesson from './IntroLesson'

const Course = ({ course, lessonSlug }) => {
  const lessons = course.lessonsCollection.items
  let matchingLesson = null
  let nextLesson = null
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
    for (let i = 0; i < lessons.length; i++) {
      let lesson = lessons[i]
      if (lesson.slug === lessonSlug) {
        matchingLesson = lesson
        console.log(i)
        if (i + 1 < lessons.length) {
          nextLesson = lessons[i + 1]
        }
        break
      }
    }
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
          (matchingLesson) ? <Lesson lesson={matchingLesson} nextLesson={nextLesson} courseSlug={course.slug} /> : <IntroLesson course={course} />
        }
      </section>
    </div>
  )
}

export default Course
