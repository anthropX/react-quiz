import React from 'react'
import PropTypes from 'prop-types'
import Options from './Options'
export default QuestionCard

function QuestionCard ({
  questionText,
  options,
  areOptionsDisabled,
  selectedOptionIndex,
  correctOptionIndex,
  onOptionClick
}) {
  const optionsProps = {
    options,
    areOptionsDisabled,
    selectedOptionIndex,
    correctOptionIndex,
    onOptionClick
  }
  return (
    <div id='question_card'>
      <p id='question_text'>{questionText}</p>
      <Options {...optionsProps} />
    </div>
  )
}

QuestionCard.propTypes = {
  questionText: PropTypes.string,
  options: PropTypes.array,
  areOptionsDisabled: PropTypes.bool,
  selectedOptionIndex: PropTypes.number,
  correctOptionIndex: PropTypes.number,
  onOptionClick: PropTypes.func
}
