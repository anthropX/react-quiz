import React, { useState } from 'react'
import { getValueFromJson, getIncorrectAnswersFromJson } from '../util/api'
import '../App.css'
import ProgressBar from './ProgressBar'
import InfoCard from './InfoCard'
import QuestionCard from './QuestionCard'
import ResultCard from './ResultCard'
import ScoreCard from './ScoreCard'
export default App

function App () {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [noOfCorrectAnswers, setNoOfCorrectAnswers] = useState(0)
  const [noOfQuestionsAnswered, setNoOfQuestionsAnswered] = useState(0)
  const [areOptionsDisabled, setAreOptionsDisabled] = useState(false)
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
    options: [
      ...getIncorrectAnswersFromJson(questionIndex),
      getValueFromJson(questionIndex, 'correct_answer')
    ],
    areOptionsDisabled,
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

  function handleOptionClick (event) {
    setNoOfQuestionsAnswered(noOfQuestionsAnswered + 1)
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

  function handleNextQuestionButtonClick (event) {
    setQuestionIndex(questionIndex + 1)
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
