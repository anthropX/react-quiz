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
  onOptionClick,
  noOfQuestionsAnswered,
  onNextQuestionButtonClick
}) {
  console.log({ questionText })
  console.log({ options })
  console.log({ areOptionsDisabled })
  console.log({ resultText })
  console.log({ onOptionClick })
  console.log({ noOfQuestionsAnswered })
  console.log({ onNextQuestionButtonClick })
  return (
    <div id='question_card'>
      <p id='question_text'>{questionText}</p>
      <Options
        options={options}
        areOptionsDisabled={areOptionsDisabled}
        onOptionClick={onOptionClick}
      />
      <ResultCard
        resultText={resultText}
        noOfQuestionsAnswered={noOfQuestionsAnswered}
        onNextQuestionButtonClick={onNextQuestionButtonClick}
      />
    </div>
  )
}

QuestionCard.propTypes = {
  questionText: PropTypes.string,
  options: PropTypes.array,
  resultText: PropTypes.string
}
