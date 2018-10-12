import React from 'react'
import { capitalize } from '../helpers'
import PropTypes from 'prop-types'

export const Snippet = (props) => {
  return (
    <div className={'lesson-module-code__code' + (props.active ? ' lesson-module-code__code--active' : '')} id={props.id}>
      <pre><code className={props.type + ' hljs'}>{props.code}</code></pre>
    </div>
  )
}

export const CodeHeader = ({ id, title, active, onClick }) => {
  return (
    <a key={id}
      onClick={() => onClick(id)}
      className={'lesson-module-code__trigger ' + (active ? ' lesson-module-code__trigger--active' : '')}
      data-target={id}>{title}
    </a>
  )
}

class LessonCodeSnippet extends React.Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.getType = this.getType.bind(this)
    this.getTItle = this.getTitle.bind(this)
    this.state = {
      active: 'javascript'
    }
  }

  onClick (id) {
    this.setState({
      active: id
    })
  }

  getType (platform) {
    const types = {
      curl: 'shell',
      dotNet: 'csharp',
      android: 'javaAndroid'
    }
    return (types[platform]) ? types[platform] : platform
  }

  getTitle (platform) {
    const titles = {
      curl: 'cURL',
      dotNet: '.NET',
      javascript: 'JavaScript',
      php: 'PHP'
    }
    return (titles[platform]) ? titles[platform] : capitalize(platform)
  }

  render () {
    const headers = []
    const snippets = []
    for (let prop in this.props) {
      if (prop === '__typename' || prop === 'title') {
        continue
      }
      headers.push(<CodeHeader key={prop} id={prop} title={this.getTitle(prop)} active={this.state.active === prop} onClick={this.onClick} />)
      snippets.push(<Snippet key={prop} id={prop} type={this.getType(prop)} code={this.props[prop]} active={this.state.active === prop} />)
    }
    return (
      <div className='lesson-module lesson-module-code'>
        <div className='lesson-module-code__header'>
          {headers}
        </div>
        <div className='lesson-module-code__code-area'>
          {snippets}
        </div>
      </div>)
  }
}

export default LessonCodeSnippet

LessonCodeSnippet.propTypes = {
  __typename: PropTypes.string.isRequired,
  title: PropTypes.string,
  curl: PropTypes.string,
  dotNet: PropTypes.string,
  javascript: PropTypes.string,
  java: PropTypes.string,
  javaAndroid: PropTypes.string,
  php: PropTypes.string,
  python: PropTypes.string,
  ruby: PropTypes.string,
  swift: PropTypes.string
}
