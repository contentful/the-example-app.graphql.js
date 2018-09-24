import React from 'react'
import { markdown } from '../helpers'

const ModuleCopy = (props) => {
  const { visualStyle, headline, copy, ctaLink, ctaTitle } = props
  const style = visualStyle === 'Emphasized' ? '--emphasized' : ''
  return (
    <div className={`module module-copy${style}`}>
      <div className={`module-copy__wrapper${style}`}>
        <div className={`module-copy__first${style}`}>
          { headline && <h1 className={`module-copy__headline${style}`}>{headline}</h1> }
          <div className={`module-copy__copy${style}`} dangerouslySetInnerHTML={markdown(copy)} />
        </div>
        <div className={`module-copy__second${style}`}>
          {ctaTitle && ctaLink && <a className={`module-copy__cta${style}`} href={ctaLink}>{ctaTitle}</a>}
        </div>
      </div>
    </div>
  )
}
export default ModuleCopy
