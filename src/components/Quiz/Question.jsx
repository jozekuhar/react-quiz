import React from "react"


export default function Question(props) {

  const currentQuestion = props.getQuestionData

  const listAnswers = currentQuestion.answers.map((answer) => {

    let styles = {}

    if (props.currentPage === "Quiz") {
      styles = {
        backgroundColor: answer.isHeld ? "#D6DBF5" : "transparent",
        border: answer.isHeld ? ".1rem solid #D6DBF5" : ".1rem solid #293264"
      }
    }

    if (props.currentPage === "End Quiz") {
      console.log(answer)
      if (answer.isCorrect && answer.isHeld) {
        styles = {
          backgroundColor: "#94D7A2",
          border: ".1rem solid #94D7A2",
        }
      } else if (answer.isHeld && !answer.isCorrect) {
        styles = {
          backgroundColor: answer.isHeld ? "#F8BCBC" : "transparent",
          border: answer.isHeld ? ".1rem solid #F8BCBC" : ".1rem solid #293264",
          opacity: .5,
        }
      } else if (answer.isCorrect) {
        styles = {
          backgroundColor: "#94D7A2",
          border: ".1rem solid #94D7A2",
          opacity: .5,
        }
      } else {
        styles = {
          opacity: .5,
        }
      }
    }
    


    return <button 
      className={props.buttonClassName}
      style={styles}
      key={answer.id}
      id={answer.id}
      onClick={() => handleAnswers(answer.id)}
      disabled={props.checkQuizButton}
      >{answer.answer}</button>
  })

  function handleAnswers(btnId) {
    const newAnswers = currentQuestion.answers.map(answer => {
      if (answer.id === btnId) {
        return {
          ...answer,
          isHeld: true,
        }
      } else {
        return {
          ...answer,
          isHeld: false,
        }
      }
    })

    const newQuestions = props.getQuizData.map(question => {
      if (question.id === currentQuestion.id) {
        return {
          ...question,
          answers: newAnswers,
        }
      } else {
        return {
          ...question,
        }
      }
    })
    props.setQuizData(newQuestions)
  }

  return (
    <div>
      <div className="quiz--question">{currentQuestion.question}</div>
      <div>{listAnswers}</div>
    </div>
  )
}