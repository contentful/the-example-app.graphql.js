import React from 'react'
import { Link } from '@reach/router'

const NavLink = props => (
  <Link
    {...props}
    getProps={({href, isCurrent, isPartiallyCurrent}) => {
      const className = (props.className) ? props.className : ''
      const isAllCoursesSidebarLink = className === 'sidebar-menu__link' && href === '/courses'
      const isHomeRoute = href === '/'
      const isCourseOverview = props.children === 'Course overview'
      //home route, all courses sidebar route, course overview sidebar route must match exactly
      const current = (isHomeRoute || isAllCoursesSidebarLink || isCourseOverview) ? isCurrent : isPartiallyCurrent 
      return {
        className: className + (current ? ' active' : '')
      }
    }}
  />
)

export default NavLink
