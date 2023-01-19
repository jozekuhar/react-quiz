import React from "react"
import Question from "./Quiz/Question"


export default function EndQuiz(props) {

  console.log(props.getQuizData)

  let correctAnswers = 0
  props.getQuizData.forEach(question => {
    question.answers.forEach(answer => {
      if (answer.isHeld === true && answer.isCorrect === true) {
        correctAnswers = correctAnswers + 1
      }
    })
  })

  console.log(correctAnswers)



  const listQuestions = props.getQuizData.map((question) => {



    return <Question 
      key={question.id}
      id={question.id}
      getQuestionData={question}
      getQuizData={props.getQuizData}
      setQuizData={props.setQuizData}

      buttonClassName="quiz--answer-btn-disabled"
      checkQuizButton={true}
      currentPage="End Quiz"
      />
  })

  function changeCurrentPage() {
    props.changePage("Start Quiz")
  }

  return (
    <div className="quiz">
      <div>{listQuestions}</div>
      <div className="quiz--score--box">
        <div className="quiz--score">Your scored {correctAnswers}/{props.getQuizData.length} correct answers</div>
        <button className="quiz--btn" onClick={changeCurrentPage}>Play Again</button>
      </div>
    </div>
  )
}