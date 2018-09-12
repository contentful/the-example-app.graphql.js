import React from 'react'
import CourseCard from './CourseCard'
import { Link } from '@reach/router'
import CategoriesSidebar from './CategoriesSidebar'

// const NavLink = (props) => {
//   return (
//     <Link
//       {...props}
//       getProps = {({ isCurrent }) => {
//         return {className: (isCurrent) ? ' active'  : '' }
//       }}
//       />
//   )
// }

const Courses = ({courseCollection, title}) => {
  const courses = courseCollection.items
      //prep for sidebar
      const menuItems = [
        <li key='All courses' className="sidebar-menu__item">
          <Link className="sidebar-menu__link" to='/courses'>All courses</Link>
        </li>
      ]
      courses.forEach(({categoriesCollection}) => categoriesCollection.items.forEach(category => {
        menuItems.push(
          <li key={category.title} className="sidebar-menu__item">
            <Link className="sidebar-menu__link" to={`/courses/categories/${category.slug}`}>{category.title}</Link>
          </li>)
      }))
      return (
        <React.Fragment>
            <CategoriesSidebar />
            <section className="layout-sidebar__content">
              <div className="courses">
                <h1>{ title + ' (' + courses.length + ')'}</h1>
                <div className="grid-list">
                  {courses.length &&
                    courses.map(course => {
                      return (
                        <div key={course.slug} className="grid-list__item"><CourseCard course={course} /></div>
                      )
                    })
                  }
                </div>
              </div>
            </section>
        </React.Fragment>
      )
}

export default Courses
