import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Courses = () => {
  return <Query
    query={gql`
    {
      courseCollection {
        items {
          title
          slug
          shortDescription
          description
          duration
          skillLevel
        }
      }
    }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.courseCollection.items.map(({ title, slug, shortDescription }) => (
        <div>
          <p>{title}</p>
          <p>{slug}</p>
           <p>{shortDescription}</p>
        </div>
      ))
    }}
  </Query>
}

export default Courses
