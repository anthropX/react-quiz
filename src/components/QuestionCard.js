import React from 'react'
import PropTypes from 'prop-types'
import Options from './Options'
export default QuestionCard

function QuestionCard ({
  questionText,
  options,
  areOptionsDisabled,
  optionSelected,
  onOptionClick
}) {
  const optionsProps = {
    options,
    areOptionsDisabled,
    optionSelected,
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
  optionSelected: PropTypes.number,
  onOptionClick: PropTypes.func
}
