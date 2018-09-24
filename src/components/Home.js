import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { componentTypeMap } from '../helpers'
import Loading from './Loading'
import Error from './Error'

const fragments = {
  HighlightedCourse: gql`
  fragment HighlightedCourse on Course {
      slug
      title
      shortDescription
      image {
        url
      }
    }`
}
const query = gql`{
  layoutCollection(limit: 1) {
    items {
      title
      slug
      contentModulesCollection {
        items {
          ... on LayoutHighlightedCourse {
            course {
              ... HighlightedCourse
            }
          }
          ... on LayoutCopy {
            headline
            copy
            ctaTitle
            ctaLink
            visualStyle
          }
          ... on LayoutHeroImage {
            title
            headline
            backgroundImage {
              url
            }
          }
        }
      }
    }
  }
}
${fragments.HighlightedCourse}`

const Home = () => {
  return (
    <Query query={query}>{
      ({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <Error />
        return data.layoutCollection.items.map(item => {
          return item.contentModulesCollection.items.map(contentModule =>
            componentTypeMap(contentModule.__typename, { key: item.slug, ...contentModule }))
        })
      }
    }
    </Query>
  )
}

export default Home
