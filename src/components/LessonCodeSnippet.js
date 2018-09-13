import React from 'react'

const Snippet = (props) => {
  return (
    <div className={'lesson-module-code__code' + (props.active ? ' lesson-module-code__code--active' : '')} id={props.id}>
      <pre><code className={props.class + ' hljs'}>{props.code}</code></pre>
    </div>
  )
}

const CodeHeader = ({id, title, active, onClick}) => {
  return (
    <a key={id}
      onClick={() => onClick(id)}
      className={'lesson-module-code__trigger ' + (active ? ' lesson-module-code__trigger--active' : '')}
      data-target={id}>{title}
    </a>
  )
}

class LessonCodeSnippet extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = {
      active: 'javascript'
    }
  }

  onClick(id) {
    this.setState({
      active: id
    })
  }

  render() {
    const header = []
    const codeArea = []
    for (let prop in this.props) {
      switch (prop) {
        case 'curl':
          header.push(<CodeHeader id={prop} title='cURL' active={this.state.active === prop} onClick={this.onClick}/>)
          codeArea.push(<Snippet key={prop} id={prop} class='shell' code={this.props[prop]} active={this.state.active === prop} />)
          break
        case 'dotnet':
          header.push(<CodeHeader id={prop} title='.NET' active={this.state.active === prop} onClick={this.onClick}/>)
          codeArea.push(<Snippet key={prop} id={prop} class='csharp' code={this.props[prop]} active={this.state.active === prop} />)
          break
        case 'javascript':
          header.push(<CodeHeader id={prop} title='JavaScript' active={this.state.active === prop} onClick={this.onClick}/>)
          codeArea.push(<Snippet key={prop} id={prop} class='javascript' code={this.props[prop]} active={this.state.active === prop} />)
          break
        case 'java':
          header.push(<CodeHeader id={prop} title='Java' active={this.state.active === prop} onClick={this.onClick}/>)
          codeArea.push(<Snippet key={prop} id={prop} class='java' code={this.props[prop]} active={this.state.active === prop} />)
          break
        case 'android':
          header.push(<CodeHeader id={prop} title='Android' active={this.state.active === prop} onClick={this.onClick}/>)
          codeArea.push(<Snippet key={prop} id={prop} class='javaAndroid' code={this.props[prop]} active={this.state.active === prop} />)
          break
        case 'php':
          header.push(<CodeHeader id={prop} title='PHP' active={this.state.active === prop} onClick={this.onClick}/>)
          codeArea.push(<Snippet key={prop} id={prop} class='php' code={this.props[prop]} active={this.state.active === prop} />)
          break
        case 'python':
          header.push(<CodeHeader id={prop} title='Python' active={this.state.active === prop} onClick={this.onClick}/>)
          codeArea.push(<Snippet key={prop} id={prop} class='python' code={this.props[prop]} active={this.state.active === prop} />)
          break
        case 'ruby':
          header.push(<CodeHeader id={prop} title='Ruby' active={this.state.active === prop} onClick={this.onClick}/>)
          codeArea.push(<Snippet key={prop} id={prop} class='ruby' code={this.props[prop]} active={this.state.active === prop} />)
          break
        case 'swift':
          header.push(<CodeHeader id={prop} title='Swift' active={this.state.active === prop} onClick={this.onClick}/>)
          codeArea.push(<Snippet key={prop} id={prop} class='swift' code={this.props[prop]} active={this.state.active === prop} />)
          break
        default:
          break
      }
    }
    return (
      <div className="lesson-module lesson-module-code">
        <div className="lesson-module-code__header">
          {header}
        </div>
        <div className='lesson-module-code__code-area'>
          {codeArea}
        </div>
      </div>)
  }
}

export default LessonCodeSnippet
