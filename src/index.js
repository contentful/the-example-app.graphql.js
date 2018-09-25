import React from 'react'
import ReactDOM from 'react-dom'
import './public/stylesheets/style.css'
import Home from './components/Home'
import Layout from './components/Layout'
import CourseOverview from './components/CourseOverview'
import CoursesAll from './components/CoursesAll'
import CoursesCategory from './components/CoursesCategory'
import NotFound from './components/NotFound'
import { Router } from '@reach/router'

import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import introspectionQueryResultData from './fragmentTypes.json'

const { REACT_APP_SPACE_ID: SPACE_ID, REACT_APP_ACCESS_TOKEN: ACCESS_TOKEN } = process.env
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
})
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      }
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    })
  ]),
  cache: new InMemoryCache({ fragmentMatcher })
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Layout>
      <Router >
        <Home path='/' />
        <CoursesAll path='/courses' />
        <CoursesAll path='/courses/categories' />
        <CoursesCategory path='/courses/categories/:category-slug' />
        <CourseOverview path='/courses/:course-slug' />
        <CourseOverview path='/courses/:course-slug/lessons' />
        <CourseOverview path='courses/:course-slug/lessons/:lesson-slug' />
        <NotFound default />
      </Router>
    </Layout>
  </ApolloProvider>
),
document.getElementById('root')
)
