import { useDrop } from 'react-dnd'
import useDragAndDrop from './useDragAndDrop.ts'


function DropArea() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'any',
    drop: (item: { id: number, value: string }) => {
      addDroppedItemId(item.id)
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    })
  }))
  const { droppedItemIds, addDroppedItemId } = useDragAndDrop()

  return (
    <div ref={drop} className={`flex border border-gray-300 min-h-12 rounded hover:border-sky-600 ${isOver && 'border-sky-600'}`}>
    </div>
  )
}

export default DropArea