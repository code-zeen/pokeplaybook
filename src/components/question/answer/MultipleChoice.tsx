import { AnswerTypeEnum } from '../../../types/enum.ts'
import { AnswerConfigType, OptionType, QuestionType } from '../questionType.ts'

interface AnswerMultipleChoiceProps {
  qId: QuestionType['id']
  oId: OptionType['id']
  type: AnswerConfigType['type']
  option: OptionType
}

function MultipleChoice({ qId, oId, type, option }: AnswerMultipleChoiceProps) {
  return (
    <div className="flex items-center gap-1 min-w-max">
      <input key={oId} type={AnswerTypeEnum[type].toLowerCase()} name={String(qId)} id={`${qId}-${oId}`} value={oId} />
      <label htmlFor={`${qId}-${oId}`}>{option.option}</label>
    </div>
  )
}

export default MultipleChoice