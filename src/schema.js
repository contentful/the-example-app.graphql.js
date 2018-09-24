import gql from 'graphql-tag'

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
    title
  }
}`

const LessonCopyFragment = gql`fragment LessonCopyFragment on LessonCopy {
  title
  copy
}`

const lessonFragment = gql`fragment LessonFragment on Lesson {
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
${LessonCodeSnippetFragment}
${LessonImageFragment}
${LessonCopyFragment}`

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

const courseBySlug = gql`query CourseBySlug($slug: String!) {
  courseCollection(where: {slug: $slug}) {
    items {
      ...CourseFragment
    }
  }
}
${courseFragment}
${lessonFragment}`

// Const lessonBySlug = gql`query LessonBySlug($slug: String!) {
//   LessonCollection(where: {slug: $slug}) {
//     Items {
//       Title
//       Slug
//       ModulesCollection {
//         Items {
//           ... on LessonCodeSnippets {
//             ...LessonCodeSnippetFragment
//           }
//           ... on LessonImage {
//             ...LessonImageFragment
//           }
//           ... on LessonCopy {
//             ...LessonCopyFragment
//           }
//         }
//       }
//     }
//   }
// }
// ${LessonCodeSnippetFragment}
// ${LessonImageFragment}
// ${LessonCopyFragment}
// `

const coursePreviewFragment = gql`
fragment CoursePreviewFragment on Course {
  slug
  title
  categoriesCollection {
    items {
      title
      slug
    }
  }
  shortDescription
}`

const courses = gql`
{
 courseCollection {
   items {
     ...CoursePreviewFragment
   }
 }
}
${coursePreviewFragment}
`

const coursesOfCategory = gql`query CoursesOfCategory($slug: String!) {
  categoryCollection(where: {slug: $slug}) {
    items {
      title
      linkedFrom {
        entryCollection {
          items {
            ...CoursePreviewFragment
          }
        }
      }
    }
  }
}
${coursePreviewFragment}`

const categoryFragment = gql`fragment CategoryFragment on Category {
  title
  slug
}`

const categories = gql`
query Categories {
  categoryCollection {
    items {
      ...CategoryFragment
    }
  }
}
${categoryFragment}`

export {
  courseBySlug,
  // LessonBySlug,
  courses,
  coursesOfCategory,
  categories
}
