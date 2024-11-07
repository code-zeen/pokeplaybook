import { useState } from 'react'

const useDragAndDrop = () => {
  const [droppedItemIds, setDroppedItemIds] = useState<number[]>([])

  const addDroppedItemId = (id: number) => {
    setDroppedItemIds(prev => {
      if (!prev.includes(id)) {
        return [...prev, id]
      }
      return prev
    })
  }

  return { droppedItemIds, addDroppedItemId }
}

export default useDragAndDrop