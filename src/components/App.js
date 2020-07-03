import React, { useState, useEffect } from 'react'
import { getValueFromJson, getIncorrectAnswersFromJson } from '../util/api'
import { shuffleArray } from '../util/array'
import ProgressBar from './ProgressBar'
import InfoCard from './InfoCard'
import QuestionCard from './QuestionCard'
import ResultCard from './ResultCard'
import ScoreCard from './ScoreCard'
import '../App.css'
export default App

function App () {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [noOfCorrectAnswers, setNoOfCorrectAnswers] = useState(0)
  const [noOfQuestionsAnswered, setNoOfQuestionsAnswered] = useState(0)
  const [shuffledOptions, setShuffledOptions] = useState([])
  const [areOptionsDisabled, setAreOptionsDisabled] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)
  const [correctOptionIndex, setCorrectOptionIndex] = useState(-1)
  const [resultText, setResultText] = useState('')
  const progressBarProps = {
    progressPercentage: (noOfQuestionsAnswered / 20) * 100
  }
  const infoCardProps = {
    noOfQuestionsAnswered,
    questionCategory: getValueFromJson(questionIndex, 'category'),
    questionDifficulty: getValueFromJson(questionIndex, 'difficulty')
  }
  const questionCardProps = {
    questionText: getValueFromJson(questionIndex, 'question'),
    options: shuffledOptions,
    areOptionsDisabled,
    selectedOptionIndex,
    correctOptionIndex: correctOptionIndex,
    onOptionClick: handleOptionClick
  }
  const resultCardProps = {
    resultText,
    noOfQuestionsAnswered,
    onNextQuestionButtonClick: handleNextQuestionButtonClick
  }
  const scoreCardProps = {
    maxScore: ((noOfCorrectAnswers + 20 - noOfQuestionsAnswered) / 20) * 100,
    score: (noOfCorrectAnswers / noOfQuestionsAnswered) * 100,
    minScore: (noOfCorrectAnswers / 20) * 100
  }
  useEffect(() => {
    setShuffledOptions(
      shuffleArray([
        ...getIncorrectAnswersFromJson(questionIndex),
        getValueFromJson(questionIndex, 'correct_answer')
      ])
    )
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    setShuffledOptions(
      shuffleArray([
        ...getIncorrectAnswersFromJson(questionIndex),
        getValueFromJson(questionIndex, 'correct_answer')
      ])
    )
    // eslint-disable-next-line
  }, [questionIndex])

  function handleOptionClick (event) {
    setNoOfQuestionsAnswered(noOfQuestionsAnswered + 1)
    setSelectedOptionIndex(Number(event.target.getAttribute('data-key')))
    setCorrectOptionIndex(getCorrectOptionIndex())
    setAreOptionsDisabled(true)
    setResultText('Sorry!')
    if (
      event.target.innerHTML ===
      getValueFromJson(questionIndex, 'correct_answer')
    ) {
      setResultText('Correct!')
      setNoOfCorrectAnswers(noOfCorrectAnswers + 1)
    }
  }

  function getCorrectOptionIndex () {
    return shuffledOptions.reduce((index, option) => {
      return option === getValueFromJson(questionIndex, 'correct_answer')
        ? shuffledOptions.indexOf(option)
        : index
    }, -1)
  }

  function handleNextQuestionButtonClick () {
    setQuestionIndex(questionIndex + 1)
    setSelectedOptionIndex(-1)
    setCorrectOptionIndex(-1)
    setAreOptionsDisabled(false)
    setResultText('')
  }

  return (
    <>
      <ProgressBar {...progressBarProps} />
      <InfoCard {...infoCardProps} />
      <QuestionCard {...questionCardProps} />
      <ResultCard {...resultCardProps} />
      <ScoreCard {...scoreCardProps} />
    </>
  )
}
