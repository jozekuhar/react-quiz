import React from 'react'
import EndQuiz from './components/EndQuiz'
import Quiz from './components/Quiz'
import StartQuiz from './components/StartQuiz'
import "./App.css"


function App() {
  const [currentPage, setCurrentPage] = React.useState("Start Quiz")
  const [quizData, setQuizData] = React.useState([])
  
  return (
    <main>
      {
        currentPage === "Start Quiz" ? <StartQuiz changePage={setCurrentPage} startQuiz={setQuizData} />
        : currentPage === "Quiz" ? <Quiz changePage={setCurrentPage} getQuizData={quizData} setQuizData={setQuizData}/>
        : <EndQuiz changePage={setCurrentPage} getQuizData={quizData}/>
      }
    </main>
  )
}

export default App
