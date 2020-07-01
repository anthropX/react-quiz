import React from 'react'
import { shallow } from 'enzyme'
import InfoCard from '../InfoCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(
    <InfoCard
      noOfQuestionsAnswered={0}
      questionCategory='Entertainment: Video Games'
      questionDifficulty='medium'
    />
  )
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('displays the number of questions answered based on prop value', () => {
  expect(wrapper.find('#no_of_questions_answered_text').text()).toEqual(
    'Question 0 of 20'
  )
  wrapper.setProps({ noOfQuestionsAnswered: 5 })
  expect(wrapper.find('#no_of_questions_answered_text').text()).toEqual(
    'Question 5 of 20'
  )
  wrapper.setProps({ noOfQuestionsAnswered: 17 })
  expect(wrapper.find('#no_of_questions_answered_text').text()).toEqual(
    'Question 17 of 20'
  )
})

it('displays the question category text from prop value', () => {
  expect(wrapper.find('#question_category_text').text()).toEqual(
    'Entertainment: Video Games'
  )
  wrapper.setProps({ questionCategory: 'Animals' })
  expect(wrapper.find('#question_category_text').text()).toEqual(
    'Animals'
  )
  wrapper.setProps({ questionCategory: 'Geography' })
  expect(wrapper.find('#question_category_text').text()).toEqual(
    'Geography'
  )
})

it('indicates the question difficulty based on prop value', () => {
  expect(wrapper.find('.fas.fa-star.highlighted').length).toEqual(2)

  wrapper.setProps({ questionDifficulty: 'easy' })
  expect(wrapper.find('.fas.fa-star.highlighted').length).toEqual(1)

  wrapper.setProps({ questionDifficulty: 'hard' })
  expect(wrapper.find('.fas.fa-star.highlighted').length).toEqual(3)
})