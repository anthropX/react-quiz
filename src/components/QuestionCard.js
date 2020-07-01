import React from 'react'

const QuestionCard = () => {
  return (
    <div id='question_card'>
      <p id='question_text'>
        What was the name of the hero in the 80s animated video game 'Dragon's
        Lair'?
      </p>
      <div id='options'>
        <button>Arthur</button>
        <button>Sir Toby Belch</button>
        <button>Guy of Gisbourne</button>
        <button>Dirk the Daring</button>
      </div>
      <div id='result_card'>
        <p id='result_text'>Correct!</p>
        <button id='next_question_button'>Next Question</button>
      </div>
    </div>
  )
}

export default QuestionCard
