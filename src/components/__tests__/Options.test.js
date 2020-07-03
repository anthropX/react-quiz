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
      areOptionsDisabled={false}
      selectedOptionIndex={-1}
      correctOptionIndex={-1}
    />
  )
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('has the same number of buttons as the size of options array', () => {
  expect(wrapper.find('button').length).toEqual(4)
  wrapper.setProps({
    options: ['True', 'False']
  })
  expect(wrapper.find('button').length).toEqual(2)
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

it('disables buttons based on prop value', () => {
  expect(wrapper.find('#option1').props().disabled).toEqual(false)
  expect(wrapper.find('#option2').props().disabled).toEqual(false)
  expect(wrapper.find('#option3').props().disabled).toEqual(false)
  expect(wrapper.find('#option4').props().disabled).toEqual(false)

  wrapper.setProps({ areOptionsDisabled: true })
  expect(wrapper.find('#option1').props().disabled).toEqual(true)
  expect(wrapper.find('#option2').props().disabled).toEqual(true)
  expect(wrapper.find('#option3').props().disabled).toEqual(true)
  expect(wrapper.find('#option4').props().disabled).toEqual(true)
})

it('highlights option based on prop value', () => {
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.setProps({ selectedOptionIndex: 0 })
  expect(wrapper.find('#option1').props().className).toEqual('highlight_selected')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.setProps({ selectedOptionIndex: 1 })
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('highlight_selected')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.setProps({ selectedOptionIndex: 2 })
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('highlight_selected')
  expect(wrapper.find('#option4').props().className).toEqual('')
  wrapper.setProps({ selectedOptionIndex: 3 })
  expect(wrapper.find('#option1').props().className).toEqual('')
  expect(wrapper.find('#option2').props().className).toEqual('')
  expect(wrapper.find('#option3').props().className).toEqual('')
  expect(wrapper.find('#option4').props().className).toEqual('highlight_selected')
})
