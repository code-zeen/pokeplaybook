import Draggable from './Draggable.tsx'
import DropArea from './DropArea.tsx'

function DragAndDrop() {
  return (
    <div className="flex flex-col">
      <Draggable />
      <DropArea />
    </div>
  )
}

export default DragAndDrop