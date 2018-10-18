import React from 'react'
import { shallow } from '../enzyme'
import Message from '../Message'

it('Renders correctly', () => {
  const myMessage = 'my test message'
  const wrapper = shallow(<Message>{myMessage}</Message>)
  expect(wrapper.contains(<p className='layout-sidebar'>{myMessage}</p>)).toEqual(true)
})
