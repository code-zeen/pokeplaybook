import { useEffect, useState } from 'react'
import type { QuestionType } from './components/question/questionType.ts'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import PokemonCard from './components/pokemon/PokemonCard.tsx'

function App() {
  const [questions, setQuestions] = useState<QuestionType[]>([])
  useEffect(() => {
    // fetchQuestions()
  }, [])


  const fetchQuestions = async () => {
    const res = await fetch('http://localhost:3001/questions')
    const data = await res.json()
    setQuestions(data)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      {/*<div className="max-w-5xl mx-auto">*/}
      {/*  <div className="flex flex-col p-1 border gap-2">*/}
      {/*    {questions.map(q => (*/}
      {/*      <Question key={q.id} question={q} />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="flex flex-col items-center border">
        <PokemonCard />
      </div>
    </DndProvider>
  )
}

export default App