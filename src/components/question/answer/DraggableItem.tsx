import { useDrag } from 'react-dnd'
import { cloneElement, isValidElement, ReactElement } from 'react'
import { TextBoxProps } from './TextBox.tsx'

interface DraggableItemProps {
  children: ReactElement<TextBoxProps>
}

function DraggableItem({ children }: DraggableItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'any',
    item: children,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  if (!isValidElement(children)) {
    return null
  }

  return cloneElement(children, {
    ...children.props,
    ref: drag,
    style: {
      ...children.props.style,
      opacity: isDragging ? 0.5 : 1,
    },
  } as TextBoxProps)
}

export default DraggableItem