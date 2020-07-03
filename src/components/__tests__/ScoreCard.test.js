import React from 'react'
import { shallow } from 'enzyme'
import ScoreCard from '../ScoreCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(
    <ScoreCard
      maxScore={100}
      score={0}
      minScore={0}
      noOfQuestionsAnswered={0}
    />
  )
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

it('rounds and displays the score from props as text', () => {
  expect(wrapper.find('#current_score_text').text()).toEqual('Score: 0%')

  wrapper.setProps({ score: 33.33333333333333 })
  expect(wrapper.find('#current_score_text').text()).toEqual('Score: 33%')

  wrapper.setProps({ score: 16.666666666666664 })
  expect(wrapper.find('#current_score_text').text()).toEqual('Score: 17%')
})

it('sets size of the max score fill based on prop value', () => {
  expect(wrapper.find('#max_score_fill').props().style.width).toEqual('100%')

  wrapper.setProps({ maxScore: 75 })

  expect(wrapper.find('#max_score_fill').props().style.width).toEqual('75%')

  wrapper.setProps({ maxScore: 20 })
  expect(wrapper.find('#max_score_fill').props().style.width).toEqual('20%')
})

it('sets size of the current score fill based on prop value', () => {
  expect(wrapper.find('#current_score_fill').props().style.width).toEqual('0%')

  wrapper.setProps({ score: 33.33333333333333 })
  expect(wrapper.find('#current_score_fill').props().style.width).toEqual(
    '33.33333333333333%'
  )
  wrapper.setProps({ score: 16.666666666666664 })
  expect(wrapper.find('#current_score_fill').props().style.width).toEqual(
    '16.666666666666664%'
  )
})

it('sets size of the min score fill based on prop value', () => {
  expect(wrapper.find('#min_score_fill').props().style.width).toEqual('0%')

  wrapper.setProps({ minScore: 25 })
  expect(wrapper.find('#min_score_fill').props().style.width).toEqual('25%')

  wrapper.setProps({ minScore: 80 })
  expect(wrapper.find('#min_score_fill').props().style.width).toEqual('80%')
})

it(
  'moves min score fill behind score fill after the 20th question is' +
    'answered',
  () => {
    expect(wrapper.find('#min_score_fill').props().className).toEqual('')

    wrapper.setProps({ noOfQuestionsAnswered: 1 })
    expect(wrapper.find('#min_score_fill').props().className).toEqual('')

    wrapper.setProps({ noOfQuestionsAnswered: 19 })
    expect(wrapper.find('#min_score_fill').props().className).toEqual('')

    wrapper.setProps({ noOfQuestionsAnswered: 20 })
    expect(wrapper.find('#min_score_fill').props().className).toEqual('none')
  }
)
