import { ChangeEvent, useState } from 'react'
import { OptionType } from '../questionType.ts'

interface SelectProps {
  options: OptionType[]
}

function Select({ options }: SelectProps) {
  const [selected, setSelected] = useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(e.target.value))
  }

  return (
    <select value={selected} onChange={handleChange} className="px-4 py-2 border rounded">
      <option value={0} disabled>선택하세요</option>
      {options.map(o => (
        <option value={o.id}>{o.option}</option>
      ))}
    </select>
  )
}

export default Select