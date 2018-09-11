import React from 'react'

const LessonImage = (props) => {
  console.log(props)
  const error = <h3><span role="img" aria-label="danger">⚠️</span> Image missing</h3>

  return (
    <div className="lesson-module lesson-module-image">
      {(props.image && props.image.url) ?
        <figure className="lesson-module-image__figure"><img className="lesson-module-image__image" src={props.image.url} alt={props.image.title} />
          {props.caption && <figcaption className="lesson-module-image__caption">{props.caption}</figcaption>}
        </figure>
        :
        error
      }
    </div>
  )
}

export default LessonImage
