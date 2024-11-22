import { useState } from 'react'
import { OptionType } from '../types/questionType.ts'

const useDragAndDrop = () => {
    const [ droppedItems, setDroppedItems ] = useState<OptionType[]>([])

    const addDroppedItem = (item: OptionType) => {
        setDroppedItems(prev => {
            if (!prev.includes(item)) {
                return [ ...prev, item ]
            }
            return prev
        })
    }
    const removeClickedItem = (item: OptionType) => {
        setDroppedItems(prev => prev.filter((e) => e.id !== item.id))
    }

    return { droppedItems, addDroppedItem, removeClickedItem }
}

export default useDragAndDrop