import React from 'react'
import { shallow } from 'enzyme'
import ProgressBar from '../ProgressBar'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ProgressBar progressPercentage={0} />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('sizes progress fill based on prop value', () => {
  expect(wrapper.find('#progress_bar_fill').props().style.width).toEqual('0%')

  wrapper.setProps({ progressPercentage: 5 })
  expect(wrapper.find('#progress_bar_fill').props().style.width).toEqual('5%')

  wrapper.setProps({ progressPercentage: 95 })
  expect(wrapper.find('#progress_bar_fill').props().style.width).toEqual('95%')
})
