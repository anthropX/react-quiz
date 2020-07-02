import React from 'react'
import PropTypes from 'prop-types'
export default Options

function Options ({
  options,
  areOptionsDisabled,
  optionSelected,
  onOptionClick
}) {
  return (
    <div id='options'>
      {options.map((option, index) => {
        return (
          <button
            id={`option${index + 1}`}
            disabled={areOptionsDisabled}
            className={optionSelected === index ? 'highlighted' : ''}
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
  optionSelected: PropTypes.number,
  onOptionClick: PropTypes.func
}
