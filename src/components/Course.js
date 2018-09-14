import React from 'react'
import SidebarMenu from './SidebarMenu'
import { Link } from '@reach/router'

// needs lesson collection w/ slug + title, course slug

const Course = ({course, children}) => {
  const lessons = course.lessonsCollection.items
  // prep sidebar
  // TO DO add active/visited situation to link
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
        {children}
      </section>
    </div>
  )
}

export default Course
