import { useState } from 'react'

function TextInput() {
    const [ input, setInput ] = useState('')

    return (
        <div className="flex">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                   className="h-10 px-2 border rounded" />
        </div>
    )
}

export default TextInput