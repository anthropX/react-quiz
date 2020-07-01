import React from 'react'
import PropTypes from 'prop-types'
import Options from './Options'
import ResultCard from './ResultCard'
export default QuestionCard

function QuestionCard ({
  questionText,
  options,
  areOptionsDisabled,
  resultText,
  onClick
}) {
  console.log({ questionText })
  console.log({ options })
  console.log({ areOptionsDisabled })
  console.log({ resultText })
  console.log({ onClick })
  return (
    <div id='question_card'>
      <p id='question_text'>{questionText}</p>
      <Options
        options={options}
        areOptionsDisabled={areOptionsDisabled}
        onClick={onClick}
      />
      <ResultCard resultText={resultText} />
    </div>
  )
}

QuestionCard.propTypes = {
  questionText: PropTypes.string,
  options: PropTypes.array,
  resultText: PropTypes.string
}
