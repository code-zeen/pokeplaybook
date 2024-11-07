import { useState } from 'react'
import { OptionType } from '../questionType.ts'

const useDragAndDrop = () => {
  const [droppedItems, setDroppedItems] = useState<OptionType[]>([])

  const addDroppedItem = (item: OptionType) => {
    setDroppedItems(prev => {
      if (!prev.includes(item)) {
        return [...prev, item]
      }
      return prev
    })
  }

  return { droppedItems, addDroppedItem }
}

export default useDragAndDrop