import React from 'react'
import { mount } from 'enzyme'
import App from './App'
/* Mock so that shuffle array method simply returns the original array

This'll simplify testing greatly
*/
jest.mock('../util/array')

let wrapper

beforeEach(() => {
  wrapper = mount(<App />)
})

afterEach(() => {
  wrapper.unmount()
})

it('resizes progress bar fill when an option is clicked', () => {
  expect(wrapper.find('#progress_bar_fill').props().style.width).toEqual('0%')
  wrapper.find('#option1').simulate('click')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#progress_bar_fill').props().style.width).toEqual('5%')
  wrapper.find('#option2').simulate('click')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#progress_bar_fill').props().style.width).toEqual(
    '10%'
  )
  wrapper.find('#option3').simulate('click')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#progress_bar_fill').props().style.width).toEqual(
    '15%'
  )
  wrapper.find('#option4').simulate('click')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#progress_bar_fill').props().style.width).toEqual(
    '20%'
  )
})

it('displays "Correct!" if the option clicked is correct', () => {
  expect(wrapper.find('#result_text').text()).toEqual('')

  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#result_text').text()).toEqual('Correct!')
  wrapper.find('#next_question_button').simulate('click')

  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#result_text').text()).toEqual('Correct!')
})

it('displays "Sorry!" if the option clicked is incorrect', () => {
  expect(wrapper.find('#result_text').text()).toEqual('')

  wrapper.find('#option1').simulate('click')
  expect(wrapper.find('#result_text').text()).toEqual('Sorry!')
  wrapper.find('#next_question_button').simulate('click')

  wrapper.find('#option2').simulate('click')
  expect(wrapper.find('#result_text').text()).toEqual('Sorry!')
  wrapper.find('#next_question_button').simulate('click')

  wrapper.find('#option3').simulate('click')
  expect(wrapper.find('#result_text').text()).toEqual('Sorry!')
})


it('resizes current score fill based on the option clicked', () => {
  expect(wrapper.find('#current_score_fill').props().style.width).toEqual('0%')
  // We're using the mock shuffleArray(), so option4 is always the right answer
  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#current_score_fill').props().style.width).toEqual(
    '100%'
  )
  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option1').simulate('click')
  expect(wrapper.find('#current_score_fill').props().style.width).toEqual(
    '50%'
  )
  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#current_score_fill').props().style.width).toEqual(
    '66.66666666666666%'
  )
  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option2').simulate('click')
  expect(wrapper.find('#current_score_fill').props().style.width).toEqual(
    '50%'
  )
  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#current_score_fill').props().style.width).toEqual(
    '60%'
  )
})

it('resizes max score fill based on the option clicked', () => {
  expect(wrapper.find('#max_score_fill').props().style.width).toEqual('100%')

  wrapper.find('#option2').simulate('click')
  expect(wrapper.find('#max_score_fill').props().style.width).toEqual('95%')

  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#max_score_fill').props().style.width).toEqual('95%')

  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option3').simulate('click')
  expect(wrapper.find('#max_score_fill').props().style.width).toEqual('90%')

  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#max_score_fill').props().style.width).toEqual('90%')

  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option1').simulate('click')
  expect(wrapper.find('#max_score_fill').props().style.width).toEqual('85%')
})

it('resizes min score fill based on the option clicked', () => {
  expect(wrapper.find('#min_score_fill').props().style.width).toEqual('0%')

  wrapper.find('#option3').simulate('click')
  expect(wrapper.find('#min_score_fill').props().style.width).toEqual('0%')

  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#min_score_fill').props().style.width).toEqual('5%')

  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option1').simulate('click')
  expect(wrapper.find('#min_score_fill').props().style.width).toEqual('5%')

  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#min_score_fill').props().style.width).toEqual('10%')

  wrapper.find('#next_question_button').simulate('click')
  wrapper.find('#option2').simulate('click')
  expect(wrapper.find('#min_score_fill').props().style.width).toEqual('10%')
})

it('increments the number of questions answered text when the next question button is clicked', () => {
  expect(wrapper.find('#no_of_questions_answered_text').text()).toEqual(
    'Question 0 of 20'
  )
  wrapper.find('#option3').simulate('click')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#no_of_questions_answered_text').text()).toEqual(
    'Question 1 of 20'
  )
  wrapper.find('#option2').simulate('click')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#no_of_questions_answered_text').text()).toEqual(
    'Question 2 of 20'
  )
})

it('updates the question category text when the next question button is clicked', () => {
  expect(wrapper.find('#question_category_text').text()).toEqual(
    'Entertainment: Video Games'
  )
  wrapper.find('#option4').simulate('click')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#question_category_text').text()).toEqual('Animals')

  wrapper.find('#option3').simulate('click')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#question_category_text').text()).toEqual(
    'Entertainment: Books'
  )
})
