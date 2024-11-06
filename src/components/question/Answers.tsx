import type { OptionType, QuestionTitleType } from './questionType.ts'

interface AnswerProps {
  qId: QuestionTitleType['id']
  oId: OptionType['id']
  option: OptionType['option']
}

function Answers({ qId, oId, option }: AnswerProps) {
  return (
    <div className="flex items-center gap-1 min-w-max">
      <input key={oId} type="radio" name={String(qId)} id={`${qId}-${oId}`} value={oId} />
      <label htmlFor={`${qId}-${oId}`}>{option}</label>
    </div>
  )
}

export default Answers