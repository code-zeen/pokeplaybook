import Answers from './Answers'
import QuestionTitle from './QuestionTitle'
import type { QuestionType } from './questionType.ts'

interface  QuestionProps {
  question: QuestionType
}

function Question({ question }: QuestionProps) {
  return (
    <div className="flex flex-col gap-1">
      <QuestionTitle id={question.id} title={question.title} />
      <div className="flex flex-col p-4 gap-4 md:flex-row md:gap-8">
        {question.options.map(o => (
          <Answers qId={question.id} oId={o.id} option={o.option} />
        ))}
      </div>
    </div>
  )
}

export default Question