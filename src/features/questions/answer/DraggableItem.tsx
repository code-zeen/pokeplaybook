import { cloneElement, isValidElement, ReactElement } from 'react'
import { useDrag } from 'react-dnd'
import { OptionType } from '../types/questionType.ts'
import { TextBoxProps } from './TextBox.tsx'

interface DraggableItemProps {
    children: ReactElement<TextBoxProps>
    item: OptionType
}

function DraggableItem({ children, item }: DraggableItemProps) {
    const [ { isDragging }, drag ] = useDrag(() => ({
        type: 'text',
        item: item,
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