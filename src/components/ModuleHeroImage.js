import React from 'react'

//TODO check this is correct somehow
const ModuleHeroImage = (props) => {
  const {module} = props
  return (
    <div className="module-hero-image">
      <div className="module-hero-image__wrapper">
        <div className="module-hero-image__headline-wrapper">
          <h2 className="module-hero-image__headline">{module.headline}</h2>
        </div>
        <img className="module-hero-image__image" src={module.backgroundImage.file.url} alt={module.backgroundImage.title}></img>
      </div>
    </div>
  )
}
export default ModuleHeroImage
