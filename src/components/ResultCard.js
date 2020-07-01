import React from 'react'
export default ResultCard

function ResultCard ({ resultText }) {
  return (
    <div id='result_card' className={resultText === '' ? 'hidden' : ''}>
      <div className='horizontal_container'>
        <p id='result_text'>{resultText}</p>
        <p id='game_over_text'>Game Over!</p>
      </div>
      <button id='next_question_button'>Next Question</button>
    </div>
  )
}
