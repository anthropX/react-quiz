import React from 'react'
import { shallow } from 'enzyme'
import ScoreCard from '../ScoreCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ScoreCard />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})
