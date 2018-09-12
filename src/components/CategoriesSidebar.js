import React from 'react'
import { Query } from 'react-apollo'
import { categories } from '../schema'
import SidebarMenu from './SidebarMenu'
import { Link } from '@reach/router'

const CategoriesSidebar = (props) => {
  return <Query query={categories}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error || data.categoryCollection.items.length < 1) return <p>Error :(</p>
        const categoryCollection = data.categoryCollection.items
        const menuItems = [
          <li key='All courses' className="sidebar-menu__item">
            <Link className="sidebar-menu__link" to='/courses'>All courses</Link>
          </li>]
        categoryCollection.forEach(category => {
          menuItems.push(
            <li key={category.title} className="sidebar-menu__item">
              <Link className="sidebar-menu__link" to={`/courses/categories/${category.slug}`}>{category.title}</Link>
            </li>)
        })
        return (
          <SidebarMenu title="Categories">
            <div className="sidebar-menu">
              <ul className="sidebar-menu__list">
                {menuItems}
              </ul>
            </div>
          </SidebarMenu>
        )
      }
    }
  </Query>
}

export default CategoriesSidebar
