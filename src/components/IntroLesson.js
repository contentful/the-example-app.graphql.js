import React from 'react'
import { Link } from '@reach/router'
import { markdown } from '../helpers'
const IntroLesson = ({course}) => {
  return (
    <div className="course">
      <h1 className="course__title">{course.title}</h1>
      <div className="course__overview">
        <h3 className="course__overview-title">OVERVIEW</h3>
        {
          course.duration &&
          <div className="course__overview-item">
            <svg className="course__overview-icon">
              <use xlinkHref="/icons/icons.svg#duration"></use>
            </svg>
            <div className="course__overview-value">{`Duration: ${course.duration}`} </div>
          </div>
        }
        {
          course.skillLevel &&
          <div className="course__overview-item">
            <svg className="course__overview-icon">
              <use xlinkHref="/icons/icons.svg#skill-level"></use>
            </svg>
            <div className="course__overview-value">{`Skill level: ${course.skillLevel}`}</div>
        </div>
        }
        {
          course.lessonsCollection.items && course.lessonsCollection.items.length &&
          <div className="course__overview-cta-wrapper">
            <Link className="course__overview-cta cta" to={`/courses/${course.slug}/lessons/${course.lessonsCollection.items[0].slug}`}>Start course</Link>
          </div>
        }
      </div>
      <div className="course__description" dangerouslySetInnerHTML={markdown(course.description)} />
    </div>
  )
}

export default IntroLesson
