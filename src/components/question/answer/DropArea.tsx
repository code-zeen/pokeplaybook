import { useDrop } from 'react-dnd'
import useDragAndDrop from './useDragAndDrop.ts'
import { OptionType } from '../questionType.ts'
import TextBox from './TextBox.tsx'


function DropArea() {
    const [ { isOver }, drop ] = useDrop(() => ({
        accept: [ 'text' ],
        drop: (item: OptionType) => {
            addDroppedItem(item)
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
        }),
    }))
    const { droppedItems, addDroppedItem, removeClickedItem } = useDragAndDrop()

    return (
        <div ref={drop}
             className={`flex gap-2 border border-gray-300 min-h-16 rounded p-4 hover:border-sky-600 ${isOver && 'border-sky-600'}`}>
            {droppedItems.map(i => (
                <TextBox key={i.id} text={i.option} onClick={() => removeClickedItem(i)} />
            ))}
        </div>
    )
}

export default DropArea