import { useDrag } from 'react-dnd'

interface DraggableItemProps {
  item: {
    id: number
    value: string
  }
}

function DraggableItem({ item }: DraggableItemProps) {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'any',
    item: { id: item.id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return isDragging ? (
    <div ref={dragPreview}
         className="inline-flex border border-gray-300 rounded px-4 py-1.5 cursor-grab bg-gray-50 hover:border-sky-600 hover:bg-sky-50 select-none">
    </div>
  ) : (
    <div ref={drag}
         className="inline-flex border border-gray-300 rounded px-4 py-1.5 cursor-grab bg-gray-50 hover:border-sky-600 hover:bg-sky-50 select-none">
      {item.value}
    </div>
  )
}

export default DraggableItem