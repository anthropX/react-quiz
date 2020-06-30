import React from 'react'
import { shallow } from 'enzyme'
import InfoCard from '../InfoCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(<InfoCard />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})
