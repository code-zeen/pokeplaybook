import { useEffect, useState } from 'react'
import { QuestionType } from './components/question/questionType.ts'
import Question from './components/question/Question.tsx'
import DragAndDrop from './components/question/answer/DragAndDrop.tsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
    <DndProvider backend={HTML5Backend}>
      <div className="p-1">
        {/*{questions.map(q => (*/}
        {/*  <Question key={q.id} question={q} />*/}
        {/*))}*/}
        <DragAndDrop />
      </div>
    </DndProvider>
  )
}

export default App