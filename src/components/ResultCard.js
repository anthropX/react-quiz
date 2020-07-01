import React from 'react'
import PropTypes from 'prop-types'
export default ResultCard

function ResultCard ({
  resultText,
  onNextQuestionButtonClick
}) {
  return (
    <div id='result_card' className={resultText === '' ? 'hidden' : ''}>
      <div className='horizontal_container'>
        <p id='result_text'>{resultText}</p>
        <p id='game_over_text'>Game Over!</p>
      </div>
      <button id='next_question_button' onClick={onNextQuestionButtonClick}>
        Next Question
      </button>
    </div>
  )
}

ResultCard.propTypes = {
  resultText: PropTypes.string
}
