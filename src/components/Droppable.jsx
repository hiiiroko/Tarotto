// Droppable.jsx

import { useDroppable } from '@dnd-kit/core';

export function Droppable(props) {
  const { setNodeRef, isOver } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
    backgroundColor: isOver ? 'orange' : undefined
  };


  return (
    <div ref={setNodeRef} style={style} className='droppable'>
      {props.children}
    </div>
  );
}