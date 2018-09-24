import React from 'react'

const ModuleHeroImage = ({ headline, backgroundImage }) => {
  return (
    <div className='module-hero-image'>
      <div className='module-hero-image__wrapper'>
        <div className='module-hero-image__headline-wrapper'>
          <h2 className='module-hero-image__headline'>{headline}</h2>
        </div>
        <img className='module-hero-image__image' src={backgroundImage.file.url} alt={backgroundImage.title} />
      </div>
    </div>
  )
}
export default ModuleHeroImage
