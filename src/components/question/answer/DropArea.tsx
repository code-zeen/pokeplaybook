import { useDrop } from 'react-dnd'


function DropArea() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'any',
    drop: (item: { id: number, value: string }) => {

    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    })
  }))
  return (
    <div ref={drop} className={`flex border border-gray-300 min-h-12 rounded hover:border-sky-600 ${isOver && 'border-sky-600'}`}>
    </div>
  )
}

export default DropArea