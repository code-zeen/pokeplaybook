import type { OptionType, QuestionType } from '../questionType.ts'
import MultipleChoice from './MultipleChoice.tsx'
import { AnswerTypeEnum } from '../../../types/enum.ts'
import DragAndDrop from './DragAndDrop.tsx'

interface AnswerProps {
  qId: QuestionType['id']
  answerConfig: QuestionType['answer_config']
  options: OptionType[]
}

function Answers({ qId, answerConfig, options }: AnswerProps) {
  const { type } = answerConfig
  const isMultipleChoice = type === AnswerTypeEnum.RADIO || type === AnswerTypeEnum.CHECKBOX
  const isText = type === AnswerTypeEnum.TEXT
  const isDragAndDrop = type === AnswerTypeEnum.DRAGNDROP

  return (
    <div className="flex flex-col p-8 gap-4 md:flex-row md:gap-8">
      {isMultipleChoice && options.map(o => (
        <MultipleChoice key={o.id} qId={qId} oId={o.id} type={answerConfig.type} option={o} />
      ))}
      {isText && <input type="text" className="border-2" />}
      {isDragAndDrop && <DragAndDrop options={options} />}
    </div>
  )
}

export default Answers