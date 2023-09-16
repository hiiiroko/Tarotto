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
      'droppable--desktop': type == "desktop",
      'droppable--array': type == "array"
    });

  const style = {
    color: isOver ? 'green' : undefined,
    backgroundColor: isOver ? 'orange' : undefined
  };

  return (
    <div ref={setNodeRef} style={style} className={dropClass}>
      {props.children}
    </div>
  );
}