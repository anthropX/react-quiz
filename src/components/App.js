import React, { useState } from 'react'
import '../App.css'
import ProgressBar from './ProgressBar'
import InfoCard from './InfoCard'
import QuestionCard from './QuestionCard'
import ResultCard from './ResultCard'
import ScoreCard from './ScoreCard'
export default App

function App () {
  const [noOfCorrectAnswers, setNoOfCorrectAnswers] = useState(1)
  const [noOfQuestionsAnswered, setNoOfQuestionsAnswered] = useState(1)
  const progressBarProps = {
    progressPercentage: (noOfQuestionsAnswered / 20) * 100
  }
  const infoCardProps = {
    noOfQuestionsAnswered,
    questionCategory: 'Entertainment: Video Games',
    questionDifficulty: 'medium'
  }
  const questionCardProps = {
    questionText:
      "What was the name of the hero in the 80s animated video game 'Dragon's Lair'",
    options: [
      'Arthur',
      'Sir Toby Belch',
      'Guy of Gisbourne',
      'Dirk the Daring'
    ],
    areOptionsDisabled: false,
    onOptionClick: event => {
      console.log(event.target.id)
    }
  }
  const resultCardProps = {
    resultText: '',
    noOfQuestionsAnswered,
    onNextQuestionButtonClick: event => {
      console.log(event.target.id)
    }
  }
  const scoreCardProps = {
    maxScore: ((noOfCorrectAnswers + 20 - noOfQuestionsAnswered) / 20) * 100,
    score: (noOfCorrectAnswers / noOfQuestionsAnswered) * 100,
    minScore: (noOfCorrectAnswers / 20) * 100
  }
  console.log(scoreCardProps)

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
