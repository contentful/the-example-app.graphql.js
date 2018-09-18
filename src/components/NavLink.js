import React from 'react'
import { Link } from '@reach/router'

const NavLink = props => (
  <Link
    {...props}
    getProps={({href, isCurrent, isPartiallyCurrent}) => {
      const className = (props.className) ? props.className : ''
      const isAllCoursesSidebarLink = className === 'sidebar-menu__link' && href === '/courses'
      const isHomeRoute = href === '/'
      const current = (isHomeRoute || isAllCoursesSidebarLink) ? isCurrent : isPartiallyCurrent //home route and all courses sidebar route must match exactly
      return {
        className: className + (current ? ' active' : '')
      }
    }}
  />
)

export default NavLink
