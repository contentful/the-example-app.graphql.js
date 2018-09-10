import React from 'react'
import { Link } from '@reach/router'

const CourseCard = (props) => {
  const {categoriesCollection, title, shortDescription, slug} = props.course
  const categoryLinks = []
  categoriesCollection.items.forEach(({slug: catSlug, title: catTitle}) => {
    categoryLinks.push(
      <div key={catSlug} className="course-card__category">
        <Link className="course-card__category-link" to={`/courses/categories/${catSlug}` /*+ QUERY STRING WHAT IS THAT*/}>{catTitle}</Link>
      </div>
    )
  })
  return (
    <div className="course-card">
      <div className="course-card__categories">
        {categoryLinks}
      </div>
      <h2 className="course-card__title"><Link to={`/courses/${slug}` /*+ query string?*/}>{title}</Link></h2>
      <p className="course-card__description">{shortDescription}</p>
      <div className="course-card__link-wrapper"><Link className="course-card__link" to={`/courses/${slug}` /*+ query string??>*/}>View Courses</Link></div>
    </div>
  )
}

export default CourseCard
