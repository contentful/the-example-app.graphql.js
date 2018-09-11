import React from 'react'

const LessonCodeSnippet = (props) => {
  console.log(props)
  const header = []
  const codeArea = []
  // for (let prop in props) {
  //   if (prop === "key" || prop === "title") {
  //     return
  //   }
  //   switch (prop) {
  //     case 'curl':
  //       header.push(<a className="lesson-module-code__trigger" data-target={prop}>cURL</a>)
  //       codeArea.push(
  //         <div className="lesson-module-code__code" id="curl">
  //           <pre><code className="shell">{props[prop]}</code></pre>
  //         </div>)
  //       break
  //     case 'dotnet':
  //       header.push(<a className="lesson-module-code__trigger" data-target={prop}>.NET</a>)
  //       codeArea.push(
  //         <div className="lesson-module-code__code" id="dotnet">
  //           <pre><code className="csharp">{props[prop]}</code></pre>
  //         </div>)
  //       break
  //     case 'javascript':
  //       header.push(<a className="lesson-module-code__trigger lesson-module-code__trigger--active" data-target="javascript">JavaScript</a>)
  //       codeArea.push(
  //         <div className="lesson-module-code__code lesson-module-code__code--active" id="javascript">
  //           <pre><code className="javascript">{props[prop]}</code></pre>
  //         </div>)
  //       break
  //     case 'java':
  //       header.push(<a className="lesson-module-code__trigger" data-target="java">Java</a>)
  //       codeArea.push(
  //         <div className="lesson-module-code__code" id="java">
  //           <pre><code className="java">{props[prop]}</code></pre>
  //         </div>
  //       )
  //       break
  //     case 'android':
  //       header.push(<a className="lesson-module-code__trigger" data-target="android">Android</a>)
  //       break
  //     case 'php':
  //       header.push(<a className="lesson-module-code__trigger" data-target="php">PHP</a>)
  //       break
  //     case 'python':
  //       header.push(<a className="lesson-module-code__trigger" data-target="python">Python</a>)
  //       break
  //     case 'ruby':
  //       header.push(<a className="lesson-module-code__trigger" data-target="ruby">Ruby</a>)
  //       break
  //     case 'swift':
  //       header.push(<a className="lesson-module-code__trigger" data-target="swift">Swift</a>)
  //       break
  //     default:
  //       break
  //   }
  // }
  return (
    <div className="lesson-module lesson-module-code">
    CODE SNIPPET SUPPOSEDLY
      <div className="lesson-module-code__header">
        {header}
      </div>
      <div className='lesson-module-code__code-area'>

        <div className="lesson-module-code__code" id="android">
          <pre><code className="java">true</code></pre>
        </div>
        <div className="lesson-module-code__code" id="php">
          <pre><code className="php">true</code></pre>
        </div>
        <div className="lesson-module-code__code" id="python">
          <pre><code className="python">true</code></pre>
        </div>
        <div className="lesson-module-code__code" id="ruby">
          <pre><code className="ruby">true</code></pre>
        </div>
        <div className="lesson-module-code__code" id="swift">
          <pre><code className="swift">true</code></pre>
        </div>
      </div>
    </div>)
}

export default LessonCodeSnippet
