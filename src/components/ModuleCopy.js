import React from 'react'
import { markdown } from '../helpers'

//TODO check this is correct somehow
const ModuleCopy = (props) => {
  const { module } = props;
  const style = module.visualStyle === 'Emphasized' ? '--emphasized' : ''
  return (
    <div className={`module module-copy${style}`}>
      <div className={`module-copy__wrapper${style}`}>
        <div className={`module-copy__first${style}`}>
        { module.headline && <h1 className={`module-copy__headline${style}`}>{module.headline}</h1> }
          <div className={`module-copy__copy${style}`} dangerouslySetInnerHTML={markdown(module.copy)}></div>
        </div>
        <div className={`module-copy__second${style}`}>
          {module.ctaTitle && module.ctaLink && <a className={`module-copy__cta${style}`} href={module.ctaLink}>{module.ctaTitle}</a>}
        </div>
      </div>
    </div>
  )
}
export default ModuleCopy
