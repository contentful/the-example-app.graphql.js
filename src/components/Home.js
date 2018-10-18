import React from 'react'
import { componentTypeMap } from '../helpers'
import { home } from '../schema'
import ConnectedComponent from './ConnectedComponent'

const Home = () => {
  const success = (data) => {
    return data.layoutCollection.items.map(item => {
      return item.contentModulesCollection.items.map(contentModule =>
        componentTypeMap(contentModule.__typename, { key: item.slug, ...contentModule }))
    })
  }
  return <ConnectedComponent query={home} success={success} />
}

export default Home
