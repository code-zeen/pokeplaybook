import type { OptionType, QuestionType } from './questionType.ts'

interface AnswerProps {
  qId: QuestionType['id']
  oId: OptionType['id']
  answerConfig: QuestionType['answer_config']
  option: OptionType['option']
}

function Answers({ qId, oId, answerConfig, option }: AnswerProps) {
  const { type } = answerConfig
  const inputType = type === 1 ? 'radio' : type === 2 ? 'checkbox' : 'text'

  return (
    <div className="flex items-center gap-1 min-w-max">
      <input key={oId} type={inputType} name={String(qId)} id={`${qId}-${oId}`} value={oId} />
      <label htmlFor={`${qId}-${oId}`}>{option}</label>
    </div>
  )
}

export default Answers