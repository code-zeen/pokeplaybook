import type { Option, QuestionTitle } from './question.ts'

interface AnswerProps {
  qId: QuestionTitle['id']
  oId: Option['id']
  option: Option['option']
}

function Answers({ qId, oId, option }: AnswerProps) {
  return (
    <div className="flex gap-1">
      <input key={oId} type="radio" name={String(qId)} id={`${qId}-${oId}`} value={oId} />
      <label htmlFor={`${qId}-${oId}`}>{option}</label>
    </div>
  )
}

export default Answers