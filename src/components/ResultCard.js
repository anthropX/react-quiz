import React from 'react'
import PropTypes from 'prop-types'
export default ResultCard

function ResultCard ({
  resultText,
  noOfQuestionsAnswered,
  onNextQuestionButtonClick
}) {
  return (
    <div id='result_card' className={resultText === '' ? 'hidden' : ''}>
      <div className='horizontal_container'>
        <p id='result_text'>{resultText}</p>
        <p
          id='game_over_text'
          className={noOfQuestionsAnswered !== 20 ? 'none' : ''}
        >
          Game Over!
        </p>
      </div>
      <button
        id='next_question_button'
        disabled={noOfQuestionsAnswered === 20}
        onClick={onNextQuestionButtonClick}
      >
        Next Question
      </button>
    </div>
  )
}

ResultCard.propTypes = {
  resultText: PropTypes.string,
  noOfQuestionsAnswered: PropTypes.number,
  onNextQuestionButtonClick: PropTypes.func
}
