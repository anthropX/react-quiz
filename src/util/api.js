const questions = require('../data/questions.json')
module.exports = { getValueFromJson, getIncorrectAnswersFromJson }

function getValueFromJson (index, key) {
  return decodeURIComponent(questions[index][key])
}
function getIncorrectAnswersFromJson (index) {
  return questions[index].incorrect_answers.map(incorrectAnswer =>
    decodeURIComponent(incorrectAnswer)
  )
}
