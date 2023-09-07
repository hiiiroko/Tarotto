// Droppable.jsx

import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {setNodeRef, isOver} = useDroppable({
    id: props.id,
    data: {
      // 初始化每个Droppable内的Draggable数量为0
      draggableCount: 0,
    },
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