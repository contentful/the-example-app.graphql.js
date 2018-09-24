import React from 'react'
import { Link } from '@reach/router'
import { capitalize } from '../helpers'

const Breadcrumb = ({ location }) => {
  let crumbs = [<li key='home'><Link to='/'>Home</Link></li>]
  const { pathname } = location
  const urlComponents = pathname.split('/').filter(Boolean)
  // Map components of the path to breadcrumbs with resolvable URLs
  let mappedComponents = urlComponents.map((component, i, array) => {
    const path = array.slice(0, i + 1).join('/')

    let label = capitalize(component.replace(/-/g, ' '))

    return (<li key={label}><Link to={path}>{label}</Link></li>)
  })

  crumbs = crumbs.concat(mappedComponents)

  return (
    <div className='layout-no-sidebar'>
      <nav className='breadcrumb'>
        <ul>
          {crumbs}
        </ul>
      </nav>
    </div>
  )
}

export default Breadcrumb
