// Divination.jsx

import React, { useContext, useState } from 'react';

import { DndContext } from '@dnd-kit/core';

import { Droppable } from '../components/Droppable';
import { Draggable } from '../components/Draggable';

import toast, { Toaster } from 'react-hot-toast';

import { DivinationInfoContext } from '../contexts/DivinationInfoContext';

import Card from '../components/Card';

export default function Divination() {
    const {
        divinationInfo
    } = useContext(DivinationInfoContext);

    const notify = (drag,drop) => toast(drag+' is put into '+drop);

    // const items = ['A', 'B', 'C'];
    const containers = ['PAST', 'PRESENT', 'FUTURE'];
    // 逻辑归一，去掉重复即可
    const [parentA, setParentA] = useState(null);
    const [parentB, setParentB] = useState(null);
    const draggableMarkupA = (
        <Draggable id="draggableA"><Card props={divinationInfo.cards[0]} /></Draggable>
    );
    const draggableMarkupB = (
        <Draggable id="draggableB"><Card props={divinationInfo.cards[1]} /></Draggable>
    );

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Toaster />
            {parentA === null ? draggableMarkupA : null}
            {parentB === null ? draggableMarkupB : null}

            {containers.map((id) => (
                <Droppable key={id} id={id}>
                    {parentA === id ? draggableMarkupA : id}
                    {parentB === id ? draggableMarkupB : id}
                </Droppable>
            ))}

        </DndContext>
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        if (active.id === "draggableA") setParentA(over ? over.id : null);
        if (active.id === "draggableB") setParentB(over ? over.id : null);
        notify(active.id,over.id);
    }
}