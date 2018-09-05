import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import Courses from './components/Courses'

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const SPACE_ID = '409ccxwy4hgv'
const ACCESS_TOKEN = '821f63b9888bf6b2d48587d14be057bd51feab28f188b895cb0a87b22fa12f7b'
const localeCode = "en-US"

const client = new ApolloClient({
  uri: `https://cdn.contentful.com/spaces/${SPACE_ID}/graphql/alpha?locale=${localeCode}`,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
})


ReactDOM.render((
  <Router>
    <ApolloProvider client={client}>
        <Route path='/' component={Home} />
      <Switch>
        <Route path='/courses' component={Courses} />
        <Route path='/courses/categories' component={Courses} />
      </Switch>
    </ApolloProvider>
  </Router>
  ),
  document.getElementById('root')
)
