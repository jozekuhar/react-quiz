import React from "react"
import Question from "./Quiz/Question"


export default function Quiz(props) {

  const listQuestions = props.getQuizData.map((question) => {
    return <Question 
      key={question.id}
      id={question.id}
      getQuestionData={question}
      getQuizData={props.getQuizData}
      setQuizData={props.setQuizData}

      buttonClassName="quiz--answer-btn"
      checkQuizButton={false}
      currentPage="Quiz"
      />
  })

  // Change current page if all answers are answered
  function changeCurrentPage() {
    const allQuestionsAnswered = []
    props.getQuizData.forEach(question => {
      let questionAnswered = false
      question.answers.forEach(answer => {
        if (answer.isHeld === true) {
          questionAnswered = true
        }
      })
      allQuestionsAnswered.push(questionAnswered)
    })
    const checkAllQuestionsAnswered = allQuestionsAnswered.every(answer => answer === true)
    checkAllQuestionsAnswered ? props.changePage("End Quiz") : alert("Please answer all questions...")  
  }

  return (
    <div className="quiz">
      <div>{listQuestions}</div>
      <button className="quiz--btn" onClick={changeCurrentPage}>Check Answers</button>
    </div>
  )
}