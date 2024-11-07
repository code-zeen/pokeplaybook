import type { OptionType, QuestionType } from '../questionType.ts'
import MultipleChoice from './MultipleChoice.tsx'
import { AnswerTypeEnum } from '../../../types/enum.ts'
import DragAndDrop from './DragAndDrop.tsx'
import TextInput from './TextInput.tsx'

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
    <div className="flex justify-center p-8">
      {isMultipleChoice && <MultipleChoice options={options} qId={qId} type={answerConfig.type} />}
      {isText && <TextInput />}
      {isDragAndDrop && <DragAndDrop options={options} />}
    </div>
  )
}

export default Answers