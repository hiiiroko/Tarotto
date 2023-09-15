// Draggable.jsx

import { useContext } from 'react';
import { DivinationInfoContext } from '../contexts/DivinationInfoContext';

import { CSS } from '@dnd-kit/utilities';
import { useDraggable } from '@dnd-kit/core';

import { FaArrowsRotate } from "react-icons/fa6";

export function Draggable(props) {
  const { name, reversed } = props.card;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  const DIC = useContext(DivinationInfoContext);

  const handleReverse = () => {
    DIC.changeCardStatusByName(name, "reversed", !reversed);
  }

  return (
    <button ref={setNodeRef} style={style}>
      <div {...listeners} {...attributes}>
        {props.children}
      </div>
      <div className='reverseButton' onMouseDown={handleReverse}>
        <FaArrowsRotate />
      </div>
    </button>
  );
}