import { useDrop } from 'react-dnd'
import useDragAndDrop from './useDragAndDrop.ts'
import { ReactElement } from 'react'


function DropArea() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'any',
    drop: (item: ReactElement) => {
      addDroppedItem(item)
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  }))
  const { droppedItems, addDroppedItem } = useDragAndDrop()

  console.log(droppedItems)

  return (
    <div ref={drop}
         className={`flex gap-2 border border-gray-300 min-h-12 rounded p-4 hover:border-sky-600 ${isOver && 'border-sky-600'}`}>
      {droppedItems.map(item => item)}
    </div>
  )
}

export default DropArea