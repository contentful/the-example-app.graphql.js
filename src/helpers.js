import marked from 'marked'
import ModuleHeroImage from './components/ModuleHeroImage'
import ModuleCopy from './components/ModuleCopy'
import ModuleHighlightedCourse from './components/ModuleHighlightedCourse'
import LessonCodeSnippet from './components/LessonCodeSnippet'
import LessonImage from './components/LessonImage'
import LessonCopy from './components/LessonCopy'
import React from 'react'
import Error from './components/Error'

// Parse markdown text
const markdown = (content = '') => {
  if (!content.trim()) {
    return ''
  }
  return { __html: marked(removeInvalidDataURL(content), {sanitize: true})}
}

/**
 * Evil users might try to add base64 url data to execute js code
 * so we should purge any potentially harmful data to mitigate risk
 */
function removeInvalidDataURL (content) {
  let regex = /data:\S+;base64\S*/gm
  return content.replace(regex, '#')
}

function componentTypeMap(type, props) {

  const components = {
    LayoutHighlightedCourse: <ModuleHighlightedCourse {...props} />,
    LayoutCopy: <ModuleCopy {...props} />,
    LayoutHeroImage: <ModuleHeroImage {...props} />,
    LessonCodeSnippets: <LessonCodeSnippet {...props} />,
    LessonImage: <LessonImage {...props} />,
    LessonCopy: <LessonCopy {...props} />
  }
  return (components[type]) ? components[type] : <Error />
}

export {
  markdown,
  componentTypeMap
}
