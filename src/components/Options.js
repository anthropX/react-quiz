import React from 'react'
export default Options

function Options ({ options }) {
  return (
    <div id='options'>
      {options.map((option, index) => {
        return (
          <button id={`option${index + 1}`} key={index}>
            {option}
          </button>
        )
      })}
    </div>
  )
}
