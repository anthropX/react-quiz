import React from 'react'
import { mount } from 'enzyme'
import App from './App'
// Mock so that shuffle array method simply returns the original array
// This will reduce testing complexity
jest.mock('../util/array')

let wrapper

beforeEach(() => {
  wrapper = mount(<App />)
})

afterEach(() => {
  wrapper.unmount()
})

describe('When an option is clicked', () => {
  it('resizes progress bar fill', () => {
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
    expect(wrapper.find('#current_score_fill').props().style.width).toEqual(
      '0%'
    )
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
})

describe('When the next question button is clicked', () => {
  it('increments the number of questions answered text', () => {
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

  it('updates the question category text', () => {
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

  it('updates the question difficulty indicator', () => {
    expect(wrapper.find('.fas.fa-star.highlighted').length).toEqual(3)

    wrapper.find('#option4').simulate('click')
    wrapper.find('#next_question_button').simulate('click')
    expect(wrapper.find('.fas.fa-star.highlighted').length).toEqual(1)

    wrapper.find('#option4').simulate('click')
    wrapper.find('#next_question_button').simulate('click')
    expect(wrapper.find('.fas.fa-star.highlighted').length).toEqual(3)

    wrapper.find('#option2').simulate('click')
    wrapper.find('#next_question_button').simulate('click')
    expect(wrapper.find('.fas.fa-star.highlighted').length).toEqual(1)

    wrapper.find('#option2').simulate('click')
    wrapper.find('#next_question_button').simulate('click')
    expect(wrapper.find('.fas.fa-star.highlighted').length).toEqual(2)
  })

  it('updates the question text', () => {
    expect(wrapper.find('#question_text').text()).toEqual(
      "What was the name of the hero in the 80s animated video game 'Dragon's Lair'?"
    )
    wrapper.find('#option1').simulate('click')
    wrapper.find('#next_question_button').simulate('click')
    expect(wrapper.find('#question_text').text()).toEqual(
      'What is the scientific name for modern day humans?'
    )
    wrapper.find('#option3').simulate('click')
    wrapper.find('#next_question_button').simulate('click')
    expect(wrapper.find('#question_text').text()).toEqual(
      "What is Ron Weasley's middle name?"
    )
  })

  it('updates text in each option', () => {
    expect(wrapper.find('#option1').text()).toEqual('Arthur')
    expect(wrapper.find('#option2').text()).toEqual('Sir Toby Belch')
    expect(wrapper.find('#option3').text()).toEqual('Guy of Gisbourne')
    expect(wrapper.find('#option4').text()).toEqual('Dirk the Daring')

    wrapper.find('#option4').simulate('click')
    wrapper.find('#next_question_button').simulate('click')
    expect(wrapper.find('#option1').text()).toEqual('Homo Ergaster')
    expect(wrapper.find('#option2').text()).toEqual('Homo Erectus')
    expect(wrapper.find('#option3').text()).toEqual('Homo Neanderthalensis')
    expect(wrapper.find('#option4').text()).toEqual('Homo Sapiens')

    wrapper.find('#option3').simulate('click')
    wrapper.find('#next_question_button').simulate('click')
    expect(wrapper.find('#option1').text()).toEqual('Arthur')
    expect(wrapper.find('#option2').text()).toEqual('John')
    expect(wrapper.find('#option3').text()).toEqual('Dominic')
    expect(wrapper.find('#option4').text()).toEqual('Bilius')
  })
})

describe('after the 20th question is answered', () => {
  it('displays the game over text', () => {
    expect(wrapper.find('#game_over_text').props().className).toEqual('none')

    simulateClicks(20)
    expect(wrapper.find('#game_over_text').props().className).toEqual('none')

    wrapper.find('#option1').simulate('click')
    expect(wrapper.find('#game_over_text').props().className).toEqual('')
  })

  it('disables next question button', () => {
    expect(wrapper.find('#next_question_button').props().disabled).toEqual(
      false
    )
    simulateClicks(20)
    expect(wrapper.find('#next_question_button').props().disabled).toEqual(
      false
    )
    wrapper.find('#option1').simulate('click')
    expect(wrapper.find('#next_question_button').props().disabled).toEqual(true)
  })
})

it('disables all options when an option is clicked, enables all options when the next question button is clicked', () => {
  expect(isEveryOptionEnabled()).toEqual(true)
  wrapper.find('#option3').simulate('click')
  expect(isEveryOptionDisabled()).toEqual(true)
  wrapper.find('#next_question_button').simulate('click')
  expect(isEveryOptionEnabled()).toEqual(true)
  wrapper.find('#option2').simulate('click')
  expect(isEveryOptionDisabled()).toEqual(true)
  wrapper.find('#next_question_button').simulate('click')
  expect(isEveryOptionEnabled()).toEqual(true)
  wrapper.find('#option1').simulate('click')
  expect(isEveryOptionDisabled()).toEqual(true)
  wrapper.find('#next_question_button').simulate('click')
  expect(isEveryOptionEnabled()).toEqual(true)
  wrapper.find('#option4').simulate('click')
  expect(isEveryOptionDisabled()).toEqual(true)
})

it('displays the result card when one of the options is clicked, hides the result card when the next question button is clicked', () => {
  expect(wrapper.find('#result_card').props().className).toEqual('hidden')
  wrapper.find('#option1').simulate('click')
  expect(wrapper.find('#result_card').props().className).toEqual('')

  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#result_card').props().className).toEqual('hidden')
  wrapper.find('#option2').simulate('click')
  expect(wrapper.find('#result_card').props().className).toEqual('')

  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#result_card').props().className).toEqual('hidden')
  wrapper.find('#option3').simulate('click')
  expect(wrapper.find('#result_card').props().className).toEqual('')

  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#result_card').props().className).toEqual('hidden')
  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#result_card').props().className).toEqual('')
})

it("highlights option that's clicked, removes highlight when the next question button is clicked", () => {
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.find('#option1').simulate('click')
  expect(wrapper.find('#option1').props().className).toEqual('highlighted')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.find('#option2').simulate('click')
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('highlighted')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.find('#option3').simulate('click')
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('highlighted')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.find('#option4').simulate('click')
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('highlighted')
  wrapper.find('#next_question_button').simulate('click')
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('')
})

function isEveryOptionDisabled () {
  if (
    wrapper.find('#option1').props().disabled &&
    wrapper.find('#option2').props().disabled &&
    wrapper.find('#option3').props().disabled &&
    wrapper.find('#option4').props().disabled
  ) {
    return true
  }
  return false
}

function isEveryOptionEnabled () {
  if (
    !wrapper.find('#option1').props().disabled &&
    !wrapper.find('#option2').props().disabled &&
    !wrapper.find('#option3').props().disabled &&
    !wrapper.find('#option4').props().disabled
  ) {
    return true
  }
  return false
}

function simulateClicks (n) {
  for (let i = 0; i < n - 1; i++) {
    wrapper.find('#option1').simulate('click')
    wrapper.find('#next_question_button').simulate('click')
  }
}
