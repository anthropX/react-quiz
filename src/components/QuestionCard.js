import React from 'react'
import Options from './Options'
import ResultCard from './ResultCard'

const QuestionCard = () => {
  return (
    <div id='question_card'>
      <p id='question_text'>
        What was the name of the hero in the 80s animated video game 'Dragon's
        Lair'?
      </p>
      <Options />
      <ResultCard />
    </div>
  )
}

export default QuestionCard
