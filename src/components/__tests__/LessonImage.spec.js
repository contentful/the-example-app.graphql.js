import React from 'react'
import { shallow } from '../enzyme'
import LessonImage from '../LessonImage'

it('renders the image if it is included in props', () => {
  const props = {
    image: {url: 'my.image.url'},
    caption: 'my image caption'
  }
  const wrapper = shallow(<LessonImage {...props} />)
  expect(wrapper.find('figure').length).toEqual(1)
  expect(wrapper.find('img').first().prop('src')).toEqual(props.image.url)
})

it('renders error if no image is provided', () => {
  const props = {
    caption: 'my caption'
  }
  const wrapper = shallow(<LessonImage {...props} />)
  expect(wrapper.contains(<h3><span role='img' aria-label='danger'>⚠️</span> Image missing</h3>)).toEqual(true)
})
