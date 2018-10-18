import React from 'react'
import { shallow } from '../enzyme'
import LessonCodeSnippet, { Snippet, CodeHeader } from '../LessonCodeSnippet'

const defaultProps = {
  curl: 'curl code',
  dotNet: '.net code',
  javascript: 'js code',
  java: 'java code',
  javaAndroid: 'android code',
  php: 'php code',
  python: ' python code',
  ruby: 'ruby code',
  swift: 'swift code',
  __typename: 'lessoncodesnippettype',
  title: 'rando title'
}
it('renders CodeHeaders and Snippets', () => {
  const wrapper = shallow(<LessonCodeSnippet {...defaultProps} />)
  expect(wrapper.find(CodeHeader).length).toEqual(Object.keys(defaultProps).length - 2)
  expect(wrapper.find(Snippet).length).toEqual(Object.keys(defaultProps).length - 2)
})

it('changes state when a code header is clicked', () => {
  const wrapper = shallow(<LessonCodeSnippet {...defaultProps} />)
  expect(wrapper.state().active).toEqual('javascript')
  const codeHeader = wrapper.find(CodeHeader).first()
  codeHeader.simulate('click')
  expect(wrapper.state().active).not.toEqual('javascript') // This is a hack
})

it('codeHeader components display special class when active = true', () => {
  const props = {
    active: true
  }
  let wrapper = shallow(<CodeHeader {...props} />)
  expect(wrapper.hasClass('lesson-module-code__trigger--active')).toEqual(true)
  wrapper = shallow(<CodeHeader {...{ active: false }} />)
  expect(wrapper.hasClass('lesson-module-code__trigger--active')).toEqual(false)
})

it('snippet components display special class when active = true', () => {
  const props = {
    active: true
  }
  let wrapper = shallow(<Snippet {...props} />)
  expect(wrapper.hasClass('lesson-module-code__code--active')).toEqual(true)
  wrapper = shallow(<Snippet {...{ active: false }} />)
  expect(wrapper.hasClass('lesson-module-code__code--active')).toEqual(false)
})
