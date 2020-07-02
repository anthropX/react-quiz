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