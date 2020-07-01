import React from 'react'
import { shallow } from 'enzyme'
import ResultCard from '../ResultCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ResultCard />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})
