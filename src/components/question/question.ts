import { AnswerTypeEnum } from '../../types/enum.ts'

export interface Question extends QuestionTitleType {
  content: string
  answer_type: AnswerTypeEnum
  options: OptionType[]
}

export interface QuestionTitleType {
  id: number
  title: string
}
export interface OptionType {
  id: number,
  option: string
}