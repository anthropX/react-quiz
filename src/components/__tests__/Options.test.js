import React from 'react'
import { shallow } from 'enzyme'
import Options from '../Options'

let wrapper

beforeEach(() => {
  wrapper = shallow(
    <Options
      options={[
        'Arthur',
        'Sir Toby Belch',
        'Guy of Gisbourne',
        'Dirk the Daring'
      ]}
    />
  )
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('displays text in each option based on prop value', () => {
  expect(wrapper.find('#option1').text()).toEqual('Arthur')
  expect(wrapper.find('#option2').text()).toEqual('Sir Toby Belch')
  expect(wrapper.find('#option3').text()).toEqual('Guy of Gisbourne')
  expect(wrapper.find('#option4').text()).toEqual('Dirk the Daring')
  wrapper.setProps({
    options: ['1962', '1492', '1963', '1987']
  })
  expect(wrapper.find('#option1').text()).toEqual('1962')
  expect(wrapper.find('#option2').text()).toEqual('1492')
  expect(wrapper.find('#option3').text()).toEqual('1963')
  expect(wrapper.find('#option4').text()).toEqual('1987')
})
