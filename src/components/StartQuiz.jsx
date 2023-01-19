import React from "react"
import shuffleArray from "../utilities/shuffle"
import formatString from "../utilities/format"


export default function StartQuiz(props) {

  function changePage() {
    
    // FETCH DATA & MANIPULATE DATA
    const url = "https://opentdb.com/api.php?amount=5"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        const quizData = data.results.map((question, qIndex) => {
          // Get answers and make them objects with additional fields
          const getCorrectAnswer = [{
            answer: formatString(question.correct_answer),
            isHeld: false,
            isCorrect: true
          }]
          const getIncorrectAnswers = question.incorrect_answers.map((answer) => {
            return {
              answer: formatString(answer),
              isHeld: false,
              isCorrect: false
            }
          })
          // Concat all answers and shuffle theme
          const allAnswers = getCorrectAnswer.concat(getIncorrectAnswers)
          // Added ID for each answer
          const allAnswersShuffled = shuffleArray(allAnswers).map((answer, aIndex) => {
            return {
              ...answer,
              id: "q" + qIndex + "a" + aIndex
            }
          })

          console.log(JSON.stringify(question.question))

          return {
            question: formatString(question.question),
            answers: allAnswersShuffled,
            id: "q" + qIndex
          }
        })
        return props.startQuiz(quizData)
      })

      // CHANGE PAGE
      props.changePage("Quiz")
  }

  return (
    <div className="start-quiz">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={changePage}>Start Quiz</button>
    </div>
  )
}