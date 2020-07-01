import React from 'react'
import { shallow } from 'enzyme'
import QuestionCard from '../QuestionCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(
    <QuestionCard
      questionText="What was the name of the hero in the 80s animated video game 'Dragon's
  Lair'"
      options={[
        'Arthur',
        'Sir Toby Belch',
        'Guy of Gisbourne',
        'Dirk the Daring'
      ]}
      resultText='Correct!'
    />
  )
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('displays the question text from prop', () => {
  expect(wrapper.find('#question_text').text()).toEqual(
    "What was the name of the hero in the 80s animated video game 'Dragon's Lair'"
  )

  wrapper.setProps({
    questionText: 'Who is the creator of the comic series "The Walking Dead"?"'
  })
  expect(wrapper.find('#question_text').text()).toEqual(
    'Who is the creator of the comic series "The Walking Dead"?"'
  )
})
