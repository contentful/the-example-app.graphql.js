import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import CourseCard from './CourseCard'
import SidebarMenu from './SidebarMenu'
import { Link } from '@reach/router'

const coursePreviewFragment = gql`
  fragment CoursePreviewFragment on Course {
    slug
    title
    categoriesCollection {
      items {
        title
        slug
      }
    }
    shortDescription
  }`

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

const Courses = () => {
  return <Query
    query={gql`
     {
      courseCollection {
        items {
          ...CoursePreviewFragment
        }
      }
    }
    ${coursePreviewFragment}
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const courses = data.courseCollection.items
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
        <div>
          <div className="layout-no-sidebar">{/*breadcrumb here!!!!*/}</div>
          <div className="layout-sidebar">
            <SidebarMenu title="Categories">
              <div className="sidebar-menu">
                <ul className="sidebar-menu__list">
                  {menuItems}
                </ul>
              </div>
            </SidebarMenu>
            <section className="layout-sidebar__content">
              <div className="courses">
                <h1>{'All courses (' + courses.length + ')'}</h1>
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
          </div>
        </div>
      )
    }}
  </Query>
}

export default Courses
