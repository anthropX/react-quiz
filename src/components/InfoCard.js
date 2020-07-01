import React from 'react'
export default InfoCard

function InfoCard ({
  noOfQuestionsAnswered,
  questionCategory,
  questionDifficulty
}) {
  return (
    <div id='info_card'>
      <h2 id='no_of_questions_answered_text'>
        Question {noOfQuestionsAnswered} of 20
      </h2>
      <p id='question_category_text'>{questionCategory}</p>
      <div id='question_difficulty_indicator'>
        <i className='fas fa-star highlighted' />
        <i
          className={`fas fa-star ${
            questionDifficulty !== 'easy' ? 'highlighted' : ''
          }`}
        />
        <i
          className={`fas fa-star ${
            questionDifficulty === 'hard' ? 'highlighted' : ''
          }`}
        />
      </div>
    </div>
  )
}
