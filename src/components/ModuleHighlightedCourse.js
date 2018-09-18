import React from 'react'
import { markdown } from '../helpers'

const errorHighlightedCourse = '⚠️ The course is not published or does not exist.'
const error = <div class='module-highlighted-course__content'><h2 class='module-highlighted-course__title'>{errorHighlightedCourse}</h2></div>
const viewCourseLabel = 'View Course'

const Categories = (props) => {
  const categoryItems = []
  if (props.categories) {
    props.categories.forEach((category) => {
      categoryItems.push(<a key={category.slug} class='module-highlighted-course__category' href={`/courses/categories/${category.slug}`}>{category.title}</a>)
    })
    return (
      <div class='module-highlighted-course__categories'>
        {categoryItems}
      </div>
    )
  } else return null
}

const ModuleHighlightedCourse = (props) => {
  const { course } = props
  console.log(course)
  return (
    <div className='module module-highlighted-course'>
      <div className='module-highlighted-course__wrapper' style={{backgroundImage: `url(${course.image.url})`}}>
        <div className='module-highlighted-course__overlay' />
        {(!course)
          ? error
          : <div className='module-highlighted-course__content'>
            <Categories categories={course.categories} />
            <h2 className='module-highlighted-course__title' style={{whiteSpace: 'nowrap'}}>
              <span className='textFitted' style={{display: 'inline-block', fontSize: '52px'}}>
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
