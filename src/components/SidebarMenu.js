import React from 'react'
import { Link } from '@reach/router'

const SidebarManu = (props) => {
  const {title, links} = props
  const linkItems = links.map(({link, title}) => {
    return (<li key={title} className="sidebar-menu__item">
      <Link className="sidebar-menu__link" to={link}>{title}</Link>
    </li>)
  })
  return (
    <section className="layout-sidebar__sidebar">
      <div className="layout-sidebar__sidebar-header">
        <h2 className="layout-sidebar__sidebar-title">{title}</h2>
      </div>
      <div className="layout-sidebar__sidebar-content">
        <div className="sidebar-menu">
          <ul className="sidebar-menu__list">
            {linkItems}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SidebarManu
