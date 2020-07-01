import React from 'react'
import { shallow } from 'enzyme'
import Options from '../Options'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Options />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})
