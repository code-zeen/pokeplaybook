import { AnswerTypeEnum } from '../../types/enum.ts'

export interface QuestionType {
  id: number
  title: string
  content: string
  answer_config: AnswerConfigType
  options: OptionType[]
}

export interface AnswerConfigType {
  type: AnswerTypeEnum
  shouldBeOrdered: boolean
  canBeDuplicate: boolean
  correct_answer_ids: number[]
  correct_answer_values: string[]
}

export interface OptionType {
  id: number,
  option: string
}