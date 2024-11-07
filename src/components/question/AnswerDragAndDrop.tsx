import AnswerDraggable from './AnswerDraggable.tsx'

function AnswerDragAndDrop() {
  return (
    <div className="flex">
      <div className="flex relative border-2 border-dashed border-gray-300 rounded-xl gap-2 p-8 pt-8 mt-4">
        <div className="flex absolute bg-gray-200 px-4 py-1.5 rounded-3xl right-1/2 top-0 transform translate-x-1/2 -translate-y-1/2"><b>끌어놓으세요</b></div>
        <AnswerDraggable>test</AnswerDraggable>
        <AnswerDraggable>hello</AnswerDraggable>
        <AnswerDraggable>world</AnswerDraggable>
      </div>
    </div>
  )
}

export default AnswerDragAndDrop