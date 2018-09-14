import React from 'react'
import CourseCard from './CourseCard'
import CategoriesSidebar from './CategoriesSidebar'

const Courses = ({courseCollection, title}) => {
  const courses = courseCollection.items
  return (
    <div className='layout-sidebar'>
      <CategoriesSidebar />
      <section className='layout-sidebar__content'>
        <div className='courses'>
          <h1>{ title + ' (' + courses.length + ')'}</h1>
          <div className='grid-list'>
            {courses.length &&
                    courses.map(course => {
                      return (
                        <div key={course.slug} className='grid-list__item'><CourseCard course={course} /></div>
                      )
                    })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
