import React from 'react'
import { Query } from 'react-apollo'
import Loading from './Loading'
import Error from './Error'

const ConnectedComponent = ({ query, success, errorCheck = () => false, variables = null }) => {
  return <Query query={query} variables={variables}>
    {
      ({ loading, error, data }) => {
        if (loading) return <Loading />
        if (error || errorCheck(data)) return <Error />
        return success(data)
      }
    }
  </Query>
}

export default ConnectedComponent
