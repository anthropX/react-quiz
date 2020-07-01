import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import ProgressBar from '../ProgressBar'
import InfoCard from '../InfoCard'
import QuestionCard from '../QuestionCard'
import ResultCard from '../ResultCard'
import ScoreCard from '../ScoreCard'

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('has the progress bar', () => {
  expect(wrapper.find(ProgressBar).length).toEqual(1)
})

it('has the info card', () => {
  expect(wrapper.find(InfoCard).length).toEqual(1)
})

it('has the question card', () => {
  expect(wrapper.find(QuestionCard).length).toEqual(1)
})

it('has the result card', () => {
  expect(wrapper.find(ResultCard).length).toEqual(1)
})

it('has the score card', () => {
  expect(wrapper.find(ScoreCard).length).toEqual(1)
})
