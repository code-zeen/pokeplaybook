import { ReactNode } from 'react'

function DraggableItem({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex border border-gray-300 rounded px-4 py-1.5 cursor-grab bg-gray-50 hover:border-sky-600 hover:bg-sky-50 select-none">
      {children}
    </div>
  )
}

export default DraggableItem