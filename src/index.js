import React from 'react'
import ReactDOM from 'react-dom';
import './public/stylesheets/style.css'
import Home from './components/Home'
import { Router } from '@reach/router'

import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './fragmentTypes.json';

const SPACE_ID = 'qz0n5cdakyl9'
const ACCESS_TOKEN = '580d5944194846b690dd89b630a1cb98a0eef6a19b860ef71efc37ee8076ddb8'
const localeCode = "en-US"
const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: `https://cdn.contentful.com/spaces/${SPACE_ID}/graphql/alpha?locale=${localeCode}`,
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
    <Router>
      <Home path='/'></Home>
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
