import type { QuestionTitle } from './question.ts'

function QuestionTitle({ id, title }: QuestionTitle) {
  return (
    <div className="flex items-center gap-4 bg-slate-100 px-8 py-6">
      <b className="px-3.5 py-2 bg-slate-500 text-white rounded-lg">{id}번</b>
      <h5>{title}</h5>
    </div>
  )
}

export default QuestionTitle