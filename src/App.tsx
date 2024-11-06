import { useEffect, useState } from 'react'
import { Question } from './types/question.ts'

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
          <div className="flex items-center gap-4">
            <b className="px-3.5 py-2 bg-slate-500 text-white rounded-lg">{q.id}번</b>
            <h5>{q.question}</h5>
          </div>
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