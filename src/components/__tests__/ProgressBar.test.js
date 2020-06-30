import React from 'react'
import { shallow } from 'enzyme'
import ProgressBar from '../ProgressBar'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ProgressBar />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})
