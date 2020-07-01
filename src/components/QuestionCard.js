import React from 'react'
import Options from './Options'
import ResultCard from './ResultCard'
export default QuestionCard

function QuestionCard ({ questionText, options, resultText }) {
  console.log({ questionText })
  console.log({ options })
  console.log({ resultText })
  return (
    <div id='question_card'>
      <p id='question_text'>{questionText}</p>
      <Options options={options} />
      <ResultCard resultText={resultText} />
    </div>
  )
}
