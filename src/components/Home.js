import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ModuleCopy from './ModuleCopy'
import ModuleHeroImage from './ModuleHeroImage'
import ModuleHighlightedCourse from './ModuleHighlightedCourse'

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
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        return data.layoutCollection.items.map(item => {
          return item.contentModulesCollection.items.map(contentModule => {
            switch (contentModule.__typename) {
              case 'LayoutHighlightedCourse':
                return <ModuleHighlightedCourse key={item.slug} course={contentModule.course} />
              case 'LayoutCopy':
                return <ModuleCopy key={item.slug} />
              case 'LayoutHeroImage':
                return <ModuleHeroImage key={item.slug} />
              default:
                return null
            }
          })
        })
      }
    }</Query>
  )
}

export default Home
