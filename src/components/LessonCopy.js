import React from 'react'
import { markdown } from '../helpers'

const LessonCopy = ({copy}) => {
  return (
    <div className='lesson-module lesson-module-copy'>
      <div className='lesson-module-copy__copy' dangerouslySetInnerHTML={markdown(copy)} />
    </div>
  )
}

export default LessonCopy
