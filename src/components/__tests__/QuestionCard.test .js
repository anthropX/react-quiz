import React from 'react'
import { shallow } from 'enzyme'
import QuestionCard from '../QuestionCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(<QuestionCard />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})
