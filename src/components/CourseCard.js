import React from 'react'
import { Link } from '@reach/router'

const CourseCard = ({ course }) => {
  const { categoriesCollection, title, shortDescription, slug } = course
  const categoryLinks = []
  categoriesCollection.items.forEach(({ slug: catSlug, title: catTitle }) => {
    categoryLinks.push(
      <div key={catSlug} className='course-card__category'>
        <Link className='course-card__category-link' to={`/courses/categories/${catSlug}`}>{catTitle}</Link>
      </div>
    )
  })
  return (
    <div className='course-card'>
      <div className='course-card__categories'>
        {categoryLinks}
      </div>
      <h2 className='course-card__title'><Link to={`/courses/${slug}`}>{title}</Link></h2>
      <p className='course-card__description'>{shortDescription}</p>
      <div className='course-card__link-wrapper'><Link className='course-card__link' to={`/courses/${slug}`}>View Course</Link></div>
    </div>
  )
}

export default CourseCard
