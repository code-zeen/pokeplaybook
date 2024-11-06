import { AnswerTypeEnum } from '../../types/enum.ts'

export interface Question extends QuestionTitle {
  content: string
  answer_type: AnswerTypeEnum
  options: Option[]
}

export interface QuestionTitle {
  id: number
  title: string
}
export interface Option {
  id: number,
  option: string
}