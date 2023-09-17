// Droppable.jsx

import { useDroppable } from '@dnd-kit/core';
import classNames from 'classnames';

export function Droppable(props) {
  const { setNodeRef, isOver } = useDroppable({
    id: props.id,
  });
  const type = props.type;

  const dropClass = classNames('droppable',
    {
      'droppable--heap': type === "heap",
      'droppable--array': type === "array"
    });

  const style = {
    backgroundColor: isOver && type === "array" ? 'white' : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className={dropClass}>
      {props.children}
    </div>
  );
}