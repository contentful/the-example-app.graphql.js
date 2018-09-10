import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"

const courseFragment = gql`fragment CourseFragment on Course {
  slug
  title
  image {
    url
  }
  lessonsCollection {
    items {
      ...LessonFragment
    }
  }
  categoriesCollection {
    items {
      title
      slug
    }
  }
  shortDescription
  description
  duration
  skillLevel
}`

const lessonFragments = {
  lesson: gql`fragment LessonFragment on Lesson {
    title
    slug
    modulesCollection {
      items {
        ... on LessonCodeSnippets {
          ...LessonCodeSnippetFragment
        }
        ... on LessonImage {
          ...LessonImageFragment
        }
        ... on LessonCopy {
          ...LessonCopyFragment
        }
      }
    }
  }`,
  codeSnippet: gql`fragment LessonCodeSnippetFragment on LessonCodeSnippets {
    title
    curl
    dotNet
    javascript
    java
    javaAndroid
    php
    python
    ruby
    swift
  }`,
  image: gql`fragment LessonImageFragment on LessonImage {
    title
    caption
    image {
      url
    }
  }`,
  copy: gql`fragment LessonCopyFragment on LessonCopy {
    title
    copy
  }`
}

const courseBySlug = gql`query CourseBySlug($slug: String!) {
  courseCollection(where: {slug: $slug}) {
    items {
      ...CourseFragment
    }
  }
}`



const Course = (props) => {
  console.log(props)
  const courseSlug = 'course-slug'
  const {[courseSlug]: slug} = props
  return <Query
    query={gql`
    {
      courseCollection(where: {slug: $slug}) {
        items {
          ...CourseFragment
        }
    }
    ${courseFragment}
    ${lessonFragments.lesson}
    ${lessonFragments.codeSnippet}
    ${lessonFragments.image}
    ${lessonFragments.copy}
    `}
    variables= {{slug}}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(data)
      return (
        <div>COURSE!</div>
      )
    }}
  </Query>
}

export default Course
