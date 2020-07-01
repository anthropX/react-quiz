import React from 'react'
import { shallow } from 'enzyme'
import ResultCard from '../ResultCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ResultCard resultText='' />)
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
