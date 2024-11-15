import type { OptionType, QuestionType } from '../questionType.ts'
import MultipleChoice from './MultipleChoice.tsx'
import { AnswerTypeEnum } from '../../../enum/enum.ts'
import DragAndDrop from './DragAndDrop.tsx'
import TextInput from './TextInput.tsx'
import Select from './Select.tsx'

interface AnswerProps {
  qId: QuestionType['id']
  answerConfig: QuestionType['answer_config']
  options: OptionType[]
}

function Answers({ qId, answerConfig, options }: AnswerProps) {
  const { type } = answerConfig
  const isMultipleChoice = type === AnswerTypeEnum.RADIO || type === AnswerTypeEnum.CHECKBOX
  const isText = type === AnswerTypeEnum.TEXT
  const isSelect = type === AnswerTypeEnum.SELECT
  const isDragAndDrop = type === AnswerTypeEnum.DRAGNDROP

  return (
    <div className="flex justify-center p-8">
      {isMultipleChoice && <MultipleChoice options={options} qId={qId} type={answerConfig.type} />}
      {isText && <TextInput />}
      {isSelect && <Select options={options} />}
      {isDragAndDrop && <DragAndDrop options={options} />}
    </div>
  )
}

export default Answers