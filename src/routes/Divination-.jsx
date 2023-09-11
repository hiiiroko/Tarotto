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

    const notify = (drag, drop) => toast(drag + ' is put into ' + drop);

    const [pastLaden, setPastLaden] = useState(false);
    const [presentLaden, setPresentLaden] = useState(false);
    const [futrueLaden, setFutureLaden] = useState(false);

    const containers = [
        {
            id: 'PAST',
            laden: pastLaden,
            toggle: () => setPastLaden(!pastLaden)
        },
        {
            id: 'PRESENT',
            laden: presentLaden,
            toggle: () => setPresentLaden(!presentLaden)
        },
        {
            id: 'FUTURE',
            laden: futrueLaden,
            toggle: () => setFutureLaden(!futrueLaden)
        }
    ];


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
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} >
            <Toaster />
            {parentA === null ? draggableMarkupA : null}
            {parentB === null ? draggableMarkupB : null}

            {containers.map((item) => (
                <Droppable key={item.id} id={item.id}>
                    {parentA === item.id ? draggableMarkupA : ''}
                    {parentB === item.id ? draggableMarkupB : ''}
                    {""+item.laden}
                </Droppable>
            ))}

        </DndContext>
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        if (over && over.id == "PAST" && containers[0].laden == true) {
            return;
        }
        if (over && over.id == "PRESENT" && containers[1].laden == true) {
            return;
        }
        if (over && over.id == "FUTURE" && containers[2].laden == true) {
            return;
        }
        // Droppable的id over.id
        // Draggable的id active.id
        if (active.id === "draggableA") { setParentA(over ? over.id : null); setPastLaden(true);}
        if (active.id === "draggableB") { setParentB(over ? over.id : null); }
        notify(active.id, over ? over.id : 'outside');
    }

    function handleDragStart(event) {
        // event.active.id 是被拖动元素的唯一标识符
        // 在这里可以执行一些操作，例如改变样式，显示提示等
      }
      
}