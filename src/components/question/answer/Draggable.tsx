import DraggableItem from './DraggableItem.tsx'

function Draggable() {
  const draggableItems = [ { id: 1, value: 'test', }, { id: 2, value: 'hello', }, { id: 3, value: 'world', },]
  return (
    <div className="flex relative border-2 border-dashed border-gray-300 rounded-xl gap-2 p-8 pt-8 mt-4">
      <div
        className="flex absolute bg-gray-100 px-4 py-1.5 rounded-3xl right-1/2 top-0 transform translate-x-1/2 -translate-y-1/2">
        <b>끌어놓으세요</b>
      </div>
      {draggableItems.map((item, i) => (
        <DraggableItem key={i} item={item} />
      ))}
    </div>
  )
}

export default Draggable