import gql from 'graphql-tag'

const courseFragment = gql`fragment CourseFragment on Course {
  slug
  title
  shortDescription
  description
  duration
  skillLevel
  lessonsCollection {
    items {
      ...LessonFragment
    }
  }
}
`
const lessonFragment = gql`fragment LessonFragment on Lesson {
    title
    slug
}`

const courseBySlug = gql`query CourseBySlug($slug: String!) {
  courseCollection(where: {slug: $slug}) {
    items {
      ...CourseFragment
    }
  }
}
${courseFragment}
${lessonFragment}`

const LessonCodeSnippetFragment = gql`fragment LessonCodeSnippetFragment on LessonCodeSnippets {
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
}`

const LessonImageFragment = gql`fragment LessonImageFragment on LessonImage {
  title
  caption
  image {
    url
  }
}`

const LessonCopyFragment = gql`fragment LessonCopyFragment on LessonCopy {
  title
  copy
}`

const lessonBySlug = gql`query LessonBySlug($slug: String!) {
  lessonCollection(where: {slug: $slug}) {
    items {
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
    }
  }
}
${LessonCodeSnippetFragment}
${LessonImageFragment}
${LessonCopyFragment}
`

export {
  courseBySlug,
  lessonBySlug
}
