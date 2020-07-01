import React from 'react'
import { shallow } from 'enzyme'
import ResultCard from '../ResultCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ResultCard resultText='Correct!' />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('displays result text from prop', () => {
  expect(wrapper.find('#result_text').text()).toEqual('Correct!')
  wrapper.setProps({ resultText: 'Sorry!' })
  expect(wrapper.find('#result_text').text()).toEqual('Correct!')
})
