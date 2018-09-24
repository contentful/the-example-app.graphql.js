import React from 'react'

const LessonImage = ({ image, caption }) => {
  const error = <h3><span role='img' aria-label='danger'>⚠️</span> Image missing</h3>

  return (
    <div className='lesson-module lesson-module-image'>
      {(image && image.url)
        ? <figure className='lesson-module-image__figure'><img className='lesson-module-image__image' src={image.url} alt={image.title} />
          {caption && <figcaption className='lesson-module-image__caption'>{caption}</figcaption>}
        </figure>
        : error
      }
    </div>
  )
}

export default LessonImage
