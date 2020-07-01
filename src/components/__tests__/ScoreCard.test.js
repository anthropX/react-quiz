import React from 'react'
import { shallow } from 'enzyme'
import ScoreCard from '../ScoreCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ScoreCard maxScore={100} score={0} minScore={0} />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('displays the max score from props as text', () => {
  expect(wrapper.find('#max_score_text').text()).toEqual('Max Score: 100%')

  wrapper.setProps({ maxScore: 75 })
  expect(wrapper.find('#max_score_text').text()).toEqual('Max Score: 75%')

  wrapper.setProps({ maxScore: 20 })
  expect(wrapper.find('#max_score_text').text()).toEqual('Max Score: 20%')
})
