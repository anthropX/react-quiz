import React from 'react'
export default ResultCard

function ResultCard () {
  return (
    <div id='result_card'>
      <div className='horizontal_container'>
        <p id='result_text'>Correct!</p>
        <p id='game_over_text'>Game Over!</p>
      </div>
      <button id='next_question_button'>Next Question</button>
    </div>
  )
}
