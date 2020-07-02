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
  return (
    <div id='question_card'>
      <p id='question_text'>{questionText}</p>
      <Options
        options={options}
        areOptionsDisabled={areOptionsDisabled}
        optionSelected={optionSelected}
        onOptionClick={onOptionClick}
      />
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
