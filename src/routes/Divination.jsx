// Divination--.jsx

import React, { useContext, useState } from 'react';

import { DndContext } from '@dnd-kit/core';

import { Droppable } from '../components/Droppable';
import { Draggable } from '../components/Draggable';

import toast, { Toaster } from 'react-hot-toast';

import { DivinationInfoContext } from '../contexts/DivinationInfoContext';

import Card from '../components/Card';

import './Divination.scss'

export default function Divination() {
  const {
    divinationInfo
  } = useContext(DivinationInfoContext);

  const [pastLaden, setPastLaden] = useState(false);
  const [presentLaden, setPresentLaden] = useState(false);
  const [futrueLaden, setFutureLaden] = useState(false);

  const containers = [
    {
      name: 'PAST',
      position: 0,
      laden: pastLaden,
      toggle: () => setPastLaden(!pastLaden)
    },
    {
      name: 'PRESENT',
      position: 1,
      laden: presentLaden,
      toggle: () => setPresentLaden(!presentLaden)
    },
    {
      name: 'FUTURE',
      position: 2,
      laden: futrueLaden,
      toggle: () => setFutureLaden(!futrueLaden)
    }
  ];


  const [parents, setParents] = useState(Array(78).fill(null));

  function changeItemParent(index, parent) {
    setParents(prevParents => {
      // 创建一个新的数组，复制prevParents的值
      const newParents = [...prevParents];
      // 将newParents[index]的值设置为parent
      newParents[index] = parent;
      // 返回新的数组作为新的状态值
      return newParents;
    }, () => {
      // 在这里打印更新后的parents数组
      console.log(parents);
    });
  }

  function getNumber(str) {
    // 使用正则表达式匹配字符串中的数字
    const regex = /\d+/;
    // 使用match方法返回匹配结果的数组
    const match = str.match(regex);
    // 如果匹配成功，返回第一个匹配的数字
    if (match) {
      return match[0];
    }
    // 否则，返回null
    else {
      return null;
    }
  }


  // 假设您有一个数组divinationInfo.cards，包含了78个元素，每个元素是一个Card组件的属性对象
  // 您可以使用一个循环或函数来动态生成多个Draggable组件，每个组件包含一个Card组件
  const draggableItems = []; // 用于存储Draggable组件的数组

  // for (let i = 0; i < 3; i++) { // 遍历divinationInfo.cards数组
    for (let i = 0; i < divinationInfo.cards.length; i++) { // 遍历divinationInfo.cards数组
    const card = divinationInfo.cards[i]; // 获取当前的Card属性对象
    const draggableItem = ( // 创建一个Draggable组件，id为draggableItem__加索引，例如draggableItem__0
      <Draggable id={`draggableItem__${i}`}>
        <Card props={card} />
      </Draggable>
    );
    draggableItems.push(draggableItem); // 将Draggable组件添加到draggableItems数组中
  }

  // 然后您可以使用draggableItems数组来渲染您的DndContext组件
  return (
    <DndContext onDragEnd={handleDragEnd} >
      {/* <DndContext onDragEnd={handleDragEnd} onDragMove={handleDragMove}> */}
      <Toaster />
      <div className='cardDesktop'>
        {draggableItems.map((item, index) => (
        parents[index] === null ? item : null
      ))}
      </div>
      <div className='cardArray'>
        {containers.map((container) => (
          <Droppable key={container.position} id={container.position}>
            {draggableItems.map((item, index) => ( // 遍历draggableItems数组，根据parents对象的值来判断是否渲染每个Draggable组件
              parents[index] === container.position ? item : "" // 如果parents对象中对应的状态变量等于当前容器的id，表示该元素被放入了该容器，则渲染该Draggable组件；否则不渲染
            ))}
          </Droppable>
        ))}
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    console.log('[handleDragEnd]active.id')
    console.log(getNumber(active.id))
    console.log('[handleDragEnd]over ? over.id : null')
    console.log(over ? over.id : null)

    changeItemParent(getNumber(active.id), over ? over.id : null)
    console.log(parents)
  }

  // function handleDragMove(event) {
  //   const { active, over } = event;

  //   console.log('[handleDragMove]active.id')
  //   console.log(getNumber(active.id))
  //   console.log('[handleDragMove]over ? over.id : null')
  //   console.log(over ? over.id : null)

  //   // changeItemParent(getNumber(active.id), over ? over.id : null)
  //   // console.log(parents)
  // }
}