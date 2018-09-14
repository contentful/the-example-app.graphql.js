import React from 'react'

const SidebarMenu = (props) => {
  const {title} = props
  return (
    <section className='layout-sidebar__sidebar'>
      <div className='layout-sidebar__sidebar-header'>
        <h2 className='layout-sidebar__sidebar-title'>{title}</h2>
      </div>
      <div className='layout-sidebar__sidebar-content'>
        {props.children}
      </div>
    </section>
  )
}

export default SidebarMenu
