import React from 'react'
import PropTypes from 'prop-types'
export default Options

function Options ({
  options,
  areOptionsDisabled,
  selectedOptionIndex,
  correctOptionIndex,
  onOptionClick
}) {
  function setOptionClass (index) {
    if (selectedOptionIndex === index) return 'highlight_selected'
    else if (correctOptionIndex === index) return 'highlight_correct'
    return ''
  }

  return (
    <div id='options'>
      {options.map((option, index) => {
        return (
          <button
            id={`option${index + 1}`}
            disabled={areOptionsDisabled}
            className={setOptionClass(index)}
            onClick={onOptionClick}
            data-key={index}
            key={index}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

Options.propTypes = {
  options: PropTypes.array,
  areOptionsDisabled: PropTypes.bool,
  selectedOptionIndex: PropTypes.number,
  correctOptionIndex: PropTypes.number,
  onOptionClick: PropTypes.func
}
