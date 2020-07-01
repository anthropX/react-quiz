import React, { useState } from 'react'
import '../App.css'
import ProgressBar from './ProgressBar'
import InfoCard from './InfoCard'
import QuestionCard from './QuestionCard'
import ScoreCard from './ScoreCard'
export default App

function App () {
  const [noOfQuestionsAnswered, setNoOfQuestionsAnswered] = useState(0)
  return (
    <>
      <ProgressBar progressPercentage={(noOfQuestionsAnswered / 20) * 100} />
      <InfoCard />
      <QuestionCard />
      <ScoreCard />
    </>
  )
}
