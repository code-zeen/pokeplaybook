import { ReactNode } from 'react'

function AnswerDraggable({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex border border-gray-300 rounded px-4 py-1.5 cursor-grab bg-gray-50">
      {children}
    </div>
  )
}

export default AnswerDraggable