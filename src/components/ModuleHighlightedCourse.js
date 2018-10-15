import React from 'react'
import { markdown } from '../helpers'
import { Link } from '@reach/router'

const errorHighlightedCourse = '⚠️ The course is not published or does not exist.'
const error = <div className='module-highlighted-course__content'><h2 className='module-highlighted-course__title'>{errorHighlightedCourse}</h2></div>
const viewCourseLabel = 'View Course'

export const Categories = ({ categories }) => {
  const categoryItems = []
  if (categories) {
    categories.forEach((category) => {
      categoryItems.push(<Link key={category.slug} className='module-highlighted-course__category' to={`/courses/categories/${category.slug}`}>{category.title}</Link>)
    })
    return (
      <div className='module-highlighted-course__categories'>
        {categoryItems}
      </div>
    )
  } else return null
}

const ModuleHighlightedCourse = ({ course }) => {
  return (
    <div className='module module-highlighted-course'>
      <div className='module-highlighted-course__wrapper' style={{ backgroundImage: `url(${course.image.url})` }}>
        <div className='module-highlighted-course__overlay' />
        {(!course)
          ? error
          : <div className='module-highlighted-course__content'>
            <Categories categories={course.categories} />
            <h2 className='module-highlighted-course__title' style={{ whiteSpace: 'nowrap' }}>
              <span className='textFitted' style={{ display: 'inline-block', fontSize: '52px' }}>
                <a href={`/courses/${course.slug}`}>{course.title}</a>
              </span>
            </h2>
            <div className='module-highlighted-course__description-wrapper'>
              <p />
              <p dangerouslySetInnerHTML={markdown(course.shortDescription)} />
              <p />
            </div>
            <div className='module-highlighted-course__link-wrapper'>
              <a className='module-highlighted-course__link' href={`/courses/${course.slug}`}>{viewCourseLabel}</a>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
export default ModuleHighlightedCourse
