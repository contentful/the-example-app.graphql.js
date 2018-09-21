import React from 'react'
import SidebarMenu from './SidebarMenu'
import NavLink from './NavLink'
import Lesson from './Lesson'
import IntroLesson from './IntroLesson'

const Course = ({ course, lessonSlug }) => {
  const lessons = course.lessonsCollection.items
  let nextLesson = null
  // prep sidebar
  const overview =
    <div key='course-overview' className='table-of-contents__item'>
      <NavLink className='table-of-contents__link' to={`/courses/${course.slug}`}>Course overview</NavLink>
    </div>

  const sidebarLinks = lessons.map(lesson =>
    <div key={lesson.slug} className='table-of-contents__item'>
      <NavLink className='table-of-contents__link' to={`/courses/${course.slug}/lessons/${lesson.slug}`}>{lesson.title}</NavLink>
    </div>)
  sidebarLinks.unshift(overview)

  const matched = lessons.find((lesson) => lesson.slug === lessonSlug)
  const matchedLessonIndex = lessons.indexOf(matched)
  if (matchedLessonIndex + 1 < lessons.length) {
    nextLesson = lessons[matchedLessonIndex + 1]
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
          (matchedLessonIndex > -1) ? <Lesson lesson={matched} nextLesson={nextLesson} courseSlug={course.slug} /> : <IntroLesson course={course} />
        }
      </section>
    </div>
  )
}

export default Course
