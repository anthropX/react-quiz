import React from 'react'
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
