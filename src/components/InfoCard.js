import React from 'react'
export default InfoCard

function InfoCard () {
  return (
    <div id='info_card'>
      <h2 id='no_of_questions_answered_text'>Question 0 of 20</h2>
      <p id='question_category_text'>Entertainment: Video Games</p>
      <div id='question_difficulty_indicator' >
      <i class="fas fa-star highlighted"></i>
      <i class="fas fa-star highlighted"></i>
      <i class="fas fa-star"></i>
      </div>

    </div>
  )
}
