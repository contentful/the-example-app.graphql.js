import React from 'react'
import { categories } from '../schema'
import SidebarMenu from './SidebarMenu'
import NavLink from './NavLink'
import ConnectedComponent from './ConnectedComponent'

const CategoriesSidebar = () => {
  const errorCheck = (data) => {
    return data.categoryCollection.items.length < 1
  }
  const success = (data) => {
    const categoryCollection = data.categoryCollection.items
    const menuItems = [
      <li key='All courses' className='sidebar-menu__item'>
        <NavLink className='sidebar-menu__link' to='/courses'>All courses</NavLink>
      </li>]
    categoryCollection.forEach(category => {
      menuItems.push(
        <li key={category.title} className='sidebar-menu__item'>
          <NavLink className='sidebar-menu__link' to={`/courses/categories/${category.slug}`}>{category.title}</NavLink>
        </li>)
    })
    return (
      <SidebarMenu title='Categories'>
        <div className='sidebar-menu'>
          <ul className='sidebar-menu__list'>
            {menuItems}
          </ul>
        </div>
      </SidebarMenu>
    )
  }
  return <ConnectedComponent query={categories} errorCheck={errorCheck} success={success} />
}

export default CategoriesSidebar
