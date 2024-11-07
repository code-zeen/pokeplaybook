import { useState } from 'react'

function TextInput() {
  const [input, setInput] = useState('')

  return (
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="border-2" />
  )
}

export default TextInput