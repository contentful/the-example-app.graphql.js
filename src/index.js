import React from 'react'
import ReactDOM from 'react-dom'
import './public/stylesheets/style.css'
import Home from './components/Home'
import Layout from './components/Layout'
import CourseOverview from './components/CourseOverview'
import CoursesAll from './components/CoursesAll'
import CoursesCategory from './components/CoursesCategory'

import { Router } from '@reach/router'

import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import introspectionQueryResultData from './fragmentTypes.json'

const { REACT_APP_SPACE_ID: SPACE_ID, REACT_APP_ACCESS_TOKEN: ACCESS_TOKEN, REACT_APP_LOCALE_CODE: LOCALE_CODE} = process.env
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
      uri: `https://cdn.contentful.com/spaces/${SPACE_ID}/graphql/alpha?locale=${LOCALE_CODE}`,
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
      </Router>
    </Layout>
  </ApolloProvider>
),
document.getElementById('root')
)
