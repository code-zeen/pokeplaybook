import { AnswerTypeEnum } from '../../../enum/enum.ts'
import { AnswerConfigType, OptionType, QuestionType } from '../questionType.ts'

interface AnswerMultipleChoiceProps {
  options: OptionType[]
  qId: QuestionType['id']
  type: AnswerConfigType['type']
}

function MultipleChoice({ options, qId, type }: AnswerMultipleChoiceProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-8 w-full">
      {options.map(o => (
        <div key={o.id} className="flex items-center gap-1 min-w-max">
          <input type={AnswerTypeEnum[type].toLowerCase()} name={String(qId)} id={`${qId}-${o.id}`}
                 value={o.id} />
          <label htmlFor={`${qId}-${o.id}`}>{o.option}</label>
        </div>
      ))}
    </div>
  )
}

export default MultipleChoice