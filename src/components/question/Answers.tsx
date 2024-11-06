import type { OptionType, QuestionType } from './questionType.ts'
import AnswerMultipleChoice from './AnswerMultipleChoice.tsx'

interface AnswerProps {
  qId: QuestionType['id']
  answerConfig: QuestionType['answer_config']
  options: OptionType[]
}

function Answers({ qId, answerConfig, options }: AnswerProps) {
  const { type } = answerConfig
  const isMultipleChoice = type === 1 || type === 2

  return (
    <div className="flex flex-col p-4 gap-4 md:flex-row md:gap-8">
      {isMultipleChoice && options.map(o => (
        <AnswerMultipleChoice qId={qId} oId={o.id} type={answerConfig.type} option={o} />
      ))}
    </div>
  )
}

export default Answers