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
      <InfoCard
        noOfQuestionsAnswered={noOfQuestionsAnswered}
        questionCategory='Entertainment: Video Games'
        questionDifficulty='medium'
      />
      <QuestionCard
        questionText="What was the name of the hero in the 80s animated video game 'Dragon's
        Lair'"
        options={[
          'Arthur',
          'Sir Toby Belch',
          'Guy of Gisbourne',
          'Dirk the Daring'
        ]}
        areOptionsDisabled={false}
        resultText=''
        onOptionClick={event => {
          console.log(event.target.id)
        }}
        onNextQuestionButtonClick={event => {
          console.log(event.target.id)
        }}
      />
      <ScoreCard />
    </>
  )
}
