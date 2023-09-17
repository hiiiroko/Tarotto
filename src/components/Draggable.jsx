// Draggable.jsx

import { CSS } from '@dnd-kit/utilities';
import { useDraggable } from '@dnd-kit/core';

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <button ref={setNodeRef} style={style}>
      <div {...listeners} {...attributes} style={{touchAction: "none"}}>
        {props.children[0] ? props.children[0] : props.children}
      </div>
      {props.children[1] ? props.children[1] : null}
    </button>
  );
}