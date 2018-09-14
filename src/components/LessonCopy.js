import React from 'react'
import { markdown } from '../helpers'

const LessonCopy = (props) => {
  console.log(props)
  return (
    <div className='lesson-module lesson-module-copy'>
      <div className='lesson-module-copy__copy' dangerouslySetInnerHTML={markdown(props.copy)} />
    </div>
  )
}

export default LessonCopy
