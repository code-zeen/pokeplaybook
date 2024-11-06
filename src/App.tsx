import { useEffect, useState } from 'react'
import { QuestionType } from './components/question/questionType.ts'
import Question from './components/question/Question.tsx'

function App() {
  const [questions, setQuestions] = useState<QuestionType[]>([])
  useEffect(() => {
    fetchQuestions()
  }, [])


  const fetchQuestions = async () => {
    const res = await fetch('http://localhost:3001/questions')
    const data = await res.json()
    setQuestions(data)
  }

  return (
    <div className="p-1">
      {questions.map(q => (
        <Question key={q.id} question={q} />
      ))}
    </div>
  )
}

export default App