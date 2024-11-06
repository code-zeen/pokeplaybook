import { useEffect, useState } from 'react'
import { Question } from './components/question/question.ts'
import QuestionTitle from './components/question/QuestionTitle.tsx'
import Answers from './components/question/Answers.tsx'

function App() {
  const [questions, setQuestions] = useState<Question[]>([])
  useEffect(() => {
    fetchQuestions()
  }, [])


  const fetchQuestions = async () => {
    const res = await fetch('http://localhost:3001/questions')
    const data = await res.json()
    setQuestions(data)
  }

  return (
    <div>
      {questions.map(q => (
        <div className="flex flex-col gap-1 p-4">
          <QuestionTitle id={q.id} title={q.title} />
          <div className="flex gap-8 flex-wrap">
            {q.options.map(o => (
              <Answers qId={q.id} oId={o.id} option={o.option} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App