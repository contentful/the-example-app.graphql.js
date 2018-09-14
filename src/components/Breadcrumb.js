import React from 'react'
import { Link } from '@reach/router'

const Breadcrumb = (props) => {
  const pathTitles = {
    'courses': 'Courses',
    'categories': 'Categories',
    'lessons': 'Lessons'
  }
  const pathRoutes = {
    'courses': '/courses',
    'categories': '/courses/categories',
    'lessons': '/courses/:course/lessons'
  }
  console.log('breadcrumb')
  console.log(props)
  if (!props.path) {
    return null
    // hack
  }
  const links = [<li key='home'><Link to='/'>Home</Link></li>]
  const crumbs = props.path.split('/')
  crumbs.forEach((crumb, i) => {
    console.log(crumb)
    if (crumb === '') {
      return
    }
    if (i === crumbs.length - 1) {
      links.push(<li key={props.path}><Link to={props.path}>{props.title}</Link></li>)
    } else if (pathRoutes[crumb] && pathTitles[crumb]) {
      links.push(<li key={pathRoutes[crumb]}><Link to={pathRoutes[crumb]}>{pathTitles[crumb]}</Link></li>)
    }
  })
  return (
    <div className='layout-no-sidebar'>
      <nav className='breadcrumb'>
        <ul>
          {links}
        </ul>
      </nav>
    </div>
  )
}

export default Breadcrumb
