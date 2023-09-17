// Divination--.jsx

import {
    useContext,
    useState
} from 'react';

import {
    DndContext,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay
} from '@dnd-kit/core';

import { DivinationInfoContext } from '../contexts/DivinationInfoContext';

import { Droppable } from '../components/Droppable';
import { Draggable } from '../components/Draggable';
import Card from '../components/Card';
import CardControl from '../components/CardControl';

import './Divination.scss'

export default function Divination() {
    const DIC = useContext(DivinationInfoContext);

    const [pastLaden, setPastLaden] = useState(false);
    const [presentLaden, setPresentLaden] = useState(false);
    const [futrueLaden, setFutureLaden] = useState(false);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                // distance: 5,
            },
        })
    );

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

    const [parents, setParents] = useState(Array(78).fill(-1));
    const [activeId, setActiveId] = useState(null);

    // 主要的逻辑操作就在这里进行
    function changeItemParent(index, parent) {
        setParents(prevParents => {
            // 创建一个新的数组，复制prevParents的值
            const newParents = [...prevParents];
            // 检查parents数组中是否已经存在parent
            if (parent === -1 || !parents.includes(parent)) {
                // 如果不存在，将newParents[index]的值设置为parent
                newParents[index] = parent;
                DIC.changeCardPositionByIndex(parseInt(index), 'arrayPosition', parent === null ? -1 : parent);
            }
            // 返回新的数组作为新的状态值
            return newParents;
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

    const draggableItems = []; // 用于存储Draggable组件的数组
    // 使用sort方法对DIC.divinationInfo.cards数组进行排序，按照tablePosition属性从小到大
    DIC.divinationInfo.cards.sort((a, b) => a.tablePosition - b.tablePosition);
    for (let i = 0; i < DIC.divinationInfo.cards.length; i++) { // 遍历DIC.divinationInfo.cards数组
        const card = DIC.divinationInfo.cards[i]; // 获取当前的Card属性对象
        const draggableItem = ( // 创建一个Draggable组件，id为draggableItem__加索引，例如draggableItem__0
            <Draggable
                className="draggable"
                key={card.name}
                id={`draggableItem__${i}`}
                card={card}
            >
                <Card card={card} index={i} />
                {
                    activeId == `draggableItem__${i}` ?
                        null :
                        <CardControl card={card} />
                }
            </Draggable>
        );
        draggableItems.push(draggableItem);
    }

    const getHolyTriangleElem = (index) => {
        return (
            <Droppable type={"array"} key={containers[index].position} id={containers[index].position}>
                {draggableItems.map((item, i) => ( // 遍历draggableItems数组，根据parents对象的值来判断是否渲染每个Draggable组件
                    parents[i] === containers[index].position ? item : null // 如果parents对象中对应的状态变量等于当前容器的id，表示该元素被放入了该容器，则渲染该Draggable组件；否则不渲染
                ))}
            </Droppable>)
    }

    const holyTriangle = (
        <div className='card--desktop__holyTriangle'>
            <div className='card--desktop__holyTriangle__upper'>
                {getHolyTriangleElem(0)}{getHolyTriangleElem(1)}
            </div>
            <div className='card--desktop__holyTriangle__lower'>
                {getHolyTriangleElem(2)}
            </div>
        </div>
    )

    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={sensors} >
            <div className='card--desktop'>
                <div className='card--desktop__heap'>
                    <Droppable type={"heap"} key={-1} id={-1}>
                        {draggableItems.map((item, index) => (
                            parents[index] === -1 ? item : null
                        ))}
                    </Droppable>
                </div>
                <div className='card--desktop__reveal'>
                    {holyTriangle}
                </div>
            </div>
            {/* <DragOverlay>
                {activeId ? (
                    <Card card={DIC.divinationInfo.cards[getNumber(activeId)]} />
                ) : null}
            </DragOverlay> */}
        </DndContext>
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        changeItemParent(getNumber(active.id), over ? over.id : -1);
        setActiveId(null);
    }

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }
}