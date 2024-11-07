import { useDrag } from 'react-dnd'
import TextBox, { Item } from './TextBox.tsx'

interface ItemProps {
  item: Item
}

function DraggableItem({ item }: ItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'any',
    item: { id: item.id },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <TextBox ref={drag} item={item} className={`${isDragging ? 'opacity-50' : 'opacity-1'}`} />
  )
}

export default DraggableItem