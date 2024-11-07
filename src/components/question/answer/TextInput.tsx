import { useState } from 'react'

function TextInput() {
  const [input, setInput] = useState('')

  return (
    <div className="flex border border-blue-200">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border-2" />
    </div>
  )
}

export default TextInput