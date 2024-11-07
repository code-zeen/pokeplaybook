import { ReactElement, useState } from 'react'

const useDragAndDrop = () => {
  const [droppedItems, setDroppedItems] = useState<ReactElement[]>([])

  const addDroppedItem = (node: ReactElement) => {
    setDroppedItems(prev => {
      if (!prev.includes(node)) {
        return [...prev, node]
      }
      return prev
    })
  }

  return { droppedItems, addDroppedItem }
}

export default useDragAndDrop