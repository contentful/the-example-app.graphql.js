import React from 'react'
import { shallow } from '../enzyme'
import CategoriesSidebar from '../CategoriesSidebar'
import ConnectedComponent from '../ConnectedComponent'
import { categories } from '../../schema'
import NavLink from '../NavLink'

let wrapper

beforeEach(() => {
  wrapper = shallow(<CategoriesSidebar />)
})

it('returns a connected component with correct props', () => {
  const cc = wrapper.find(ConnectedComponent).first()
  expect(wrapper.find(ConnectedComponent).length).toEqual(1)
  expect(cc.prop('query')).toEqual(categories)
  expect(cc.prop('errorCheck')).toBeDefined()
  expect(cc.prop('success')).toBeDefined()
})

it('errorCheck is set up correctly', () => {
  const validCase = {
    categoryCollection: {
      items: ['first item']
    }
  }
  const errorCase = {
    categoryCollection: {
      items: []
    }
  }
  const errorCheck = wrapper.find(ConnectedComponent).first().prop('errorCheck')
  expect(errorCheck(validCase)).toEqual(false)
  expect(errorCheck(errorCase)).toEqual(true)
})

it('success renders NavLinks', () => {
  const items = [
    { title: '1', slug: 'slug1' },
    { title: '2', slug: 'slug2' },
    { title: '3', slug: 'slug3' }
  ]
  const data = {
    categoryCollection: {
      items
    }
  }
  const success = wrapper.find(ConnectedComponent).first().prop('success')
  const result = shallow(success(data))
  expect(result.find(NavLink).length).toEqual(items.length + 1)
})
