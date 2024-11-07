import { forwardRef, HTMLAttributes } from 'react'

export interface Item {
  id: number
  value: string
}

interface TextBoxProps extends HTMLAttributes<HTMLDivElement> {
  item: Item
}

const TextBox = forwardRef<HTMLDivElement, TextBoxProps>(
  ({ item, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="inline-flex border border-gray-300 rounded px-4 py-1.5 cursor-grab bg-gray-50 hover:border-sky-600 hover:bg-sky-50 select-none">
        {item.value}
      </div>
    )
  }
)

export default TextBox