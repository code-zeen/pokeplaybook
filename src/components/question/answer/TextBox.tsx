import { forwardRef, HTMLAttributes } from 'react'

export interface TextBoxProps extends HTMLAttributes<HTMLDivElement> {
    text: string
}

const TextBox = forwardRef<HTMLDivElement, TextBoxProps>(
    ({ text, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                className="inline-flex border border-gray-300 rounded px-4 py-1.5 cursor-grab bg-gray-50 hover:border-sky-600 hover:bg-sky-50 select-none">
                {text}
            </div>
        )
    }
)

export default TextBox