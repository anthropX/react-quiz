import React from 'react'
import { shallow } from 'enzyme'
import ResultCard from '../ResultCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ResultCard resultText='' noOfQuestionsAnswered={0} />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('is visible or hidden based on prop value', () => {
  expect(wrapper.find('#result_card').props().className).toEqual('hidden')
  wrapper.setProps({ resultText: 'Correct!' })
  expect(wrapper.find('#result_card').props().className).toEqual('')
  wrapper.setProps({ resultText: 'Sorry!' })
  expect(wrapper.find('#result_card').props().className).toEqual('')
})

it('displays result text from prop', () => {
  expect(wrapper.find('#result_text').text()).toEqual('')
  wrapper.setProps({ resultText: 'Correct!' })
  expect(wrapper.find('#result_text').text()).toEqual('Correct!')
  wrapper.setProps({ resultText: 'Sorry!' })
  expect(wrapper.find('#result_text').text()).toEqual('Sorry!')
})

describe('after the 20th question is answered', () => {
  it('displays game over', () => {
    expect(wrapper.find('#game_over_text').props().className).toEqual('none')
    wrapper.setProps({ noOfQuestionsAnswered: 1 })
    expect(wrapper.find('#game_over_text').props().className).toEqual('none')
    wrapper.setProps({ noOfQuestionsAnswered: 19 })
    expect(wrapper.find('#game_over_text').props().className).toEqual('none')
    wrapper.setProps({ noOfQuestionsAnswered: 20 })
    expect(wrapper.find('#game_over_text').props().className).toEqual('')
  })

  it('disables the next question button', () => {
    expect(wrapper.find('#next_question_button').props().disabled).toEqual(
      false
    )
    wrapper.setProps({ noOfQuestionsAnswered: 1 })
    expect(wrapper.find('#next_question_button').props().disabled).toEqual(
      false
    )
    wrapper.setProps({ noOfQuestionsAnswered: 19 })
    expect(wrapper.find('#next_question_button').props().disabled).toEqual(
      false
    )
    wrapper.setProps({ noOfQuestionsAnswered: 20 })
    expect(wrapper.find('#next_question_button').props().disabled).toEqual(true)
  })
})
