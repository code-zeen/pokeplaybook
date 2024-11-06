import { useEffect, useState } from 'react'
import { Question } from './components/question/question.ts'
import QuestionTitle from './components/question/QuestionTitle.tsx'

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
              <div className="flex gap-1">
                <input key={o.id} type="radio" name={String(q.id)} id={`${q.id}-${o.id}`} value={o.option} />
                <label htmlFor={`${q.id}-${o.id}`}>{o.option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App