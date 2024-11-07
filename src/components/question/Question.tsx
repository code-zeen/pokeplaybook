import Answers from './answer/Answers.tsx'
import QuestionTitle from './QuestionTitle'
import type { QuestionType } from './questionType.ts'

interface QuestionProps {
  question: QuestionType
}

function Question({ question }: QuestionProps) {
  return (
    <div className="flex flex-col gap-1 border rounded overflow-hidden">
      <QuestionTitle id={question.id} title={question.title} />
      <Answers qId={question.id} answerConfig={question.answer_config} options={question.options} />
    </div>
  )
}

export default Question