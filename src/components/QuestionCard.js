import React from 'react'
import PropTypes from 'prop-types'
import Options from './Options'
export default QuestionCard

function QuestionCard ({
  questionText,
  options,
  areOptionsDisabled,
  onOptionClick
}) {
  console.log({ questionText })
  console.log({ options })
  console.log({ areOptionsDisabled })
  console.log({ onOptionClick })
  return (
    <div id='question_card'>
      <p id='question_text'>{questionText}</p>
      <Options
        options={options}
        areOptionsDisabled={areOptionsDisabled}
        onOptionClick={onOptionClick}
      />
    </div>
  )
}

QuestionCard.propTypes = {
  questionText: PropTypes.string,
  options: PropTypes.array
}
