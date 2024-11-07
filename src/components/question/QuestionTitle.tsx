import type { QuestionType } from './questionType.ts'

interface QuestionTitleProps {
  id: QuestionType['id']
  title: QuestionType['title']
}

function QuestionTitle({ id, title }: QuestionTitleProps) {
  return (
    <div className="flex items-center gap-4 bg-slate-100 p-2 md:p-4">
      <b className="px-3 py-2 bg-slate-500 text-white rounded-lg whitespace-nowrap">{id}번</b>
      <h5>{title}</h5>
    </div>
  )
}

export default QuestionTitle