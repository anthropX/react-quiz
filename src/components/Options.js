import React from 'react'
import PropTypes from 'prop-types'
export default Options

function Options ({ options, areOptionsDisabled, onOptionClick }) {
  return (
    <div id='options'>
      {options.map((option, index) => {
        return (
          <button
            id={`option${index + 1}`}
            disabled={areOptionsDisabled}
            onClick={onOptionClick}
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
  onOptionClick: PropTypes.func
}
