import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import CourseCard from './CourseCard'
import SidebarMenu from './SidebarMenu'
import { Link } from '@reach/router'

const courseFragment = gql`
  fragment CourseFragment on Course {
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
          ...CourseFragment
        }
      }
    }
    ${courseFragment}
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const courses = data.courseCollection.items
      //prep for sidebar
      const menuLinks = [{link: '/courses', title: 'All courses'}]
      courses.forEach(({categoriesCollection}) => categoriesCollection.items.forEach(category => {
        menuLinks.push({link: `/courses/categories/${category.slug}`, title: category.title})
      }))
      return (
        <div>
          <div className="layout-no-sidebar">{/*breadcrumb here!!!!*/}</div>
          <div className="layout-sidebar">
            {<SidebarMenu title="Categories" links={menuLinks} />}
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
