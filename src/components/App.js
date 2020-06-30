import React from 'react'
import '../App.css'
import ProgressBar from './ProgressBar'
import InfoCard from './InfoCard'
import QuestionCard from './QuestionCard'
import ScoreCard from './ScoreCard'
export default App

function App () {
  return (
    <>
      <ProgressBar />
      <InfoCard />
      <QuestionCard />
      <ScoreCard />
    </>
  )
}
