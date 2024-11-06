import { AnswerTypeEnum } from './enum.ts'

export interface Question {
  id: number
  question: string
  content: string
  answer_type: AnswerTypeEnum
  options: Option[]
}

export interface Option {
  id: number,
  option: string
}