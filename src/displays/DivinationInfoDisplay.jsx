// DivinationInfoDisplay.jsx

import { useContext, useState } from 'react';
import { DivinationInfoContext } from '../contexts/DivinationInfoContext';

function DisplayDivinationInfoContext() {
    const {
        divinationInfo,
        changeCardPositionByIndex,
        changeCardPositionByName,
        changeCardStatusByIndex,
        changeCardStatusByName,
        randomizeAllTablePositions,
        orderAllTablePositions,
        suspendAllTablePositions,
        suspendAllArrayPositions,
        randomizeAllReversed,
        suspendAllReversed,
        suspendAllFlipped
    } = useContext(DivinationInfoContext);

    const [input, setInput] = useState('');
    const [positionType, setPositionType] = useState('tablePosition');
    const [targetPosition, setTargetPosition] = useState('');
    const [statusType, setStatusType] = useState('reversed');
    const [statusValue, setStatusValue] = useState(false);

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handlePositionTypeChange = (event) => {
        setPositionType(event.target.value);
    }

    const handleTargetPositionChange = (event) => {
        setTargetPosition(event.target.value);
    }

    const handleStatusTypeChange = (event) => {
        setStatusType(event.target.value);
    }

    const handleStatusValueChange = (event) => {
        setStatusValue(event.target.value === 'true');
    }

    const handleChangeByIndex = () => {
        const index = parseInt(input);
        if (!isNaN(index) && index >= 0 && index < divinationInfo.cards.length) {
            changeCardPositionByIndex(index, positionType, parseInt(targetPosition));
        } else {
            alert('请输入有效的卡牌序号');
        }
    }

    const handleChangeByName = () => {
        changeCardPositionByName(input, positionType, parseInt(targetPosition));
    }

    const handleChangeStatusByIndex = () => {
        const index = parseInt(input);
        if (!isNaN(index) && index >= 0 && index < divinationInfo.cards.length) {
            changeCardStatusByIndex(index, statusType, statusValue);
        } else {
            alert('请输入有效的卡牌序号');
        }
    }

    const handleChangeStatusByName = () => {
        changeCardStatusByName(input, statusType, statusValue);
    }

    return (
        <div>
            <div style={{ overflow: 'auto', height: '300px' }}>
                <table>
                    <thead>
                        <tr>
                            <th>卡牌名字</th>
                            <th>桌面位置</th>
                            <th>牌阵位置</th>
                            <th>Reversed状态</th>
                            <th>Flipped状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        {divinationInfo.cards.map(card => (
                            <tr key={card.name}>
                                <td>{card.name}</td>
                                <td>{card.tablePosition}</td>
                                <td>{card.arrayPosition}</td>
                                <td>{card.reversed ? '是' : '否'}</td>
                                <td>{card.flipped ? '是' : '否'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="text" value={input} onChange={handleInputChange} placeholder="请输入卡牌序号或名字" />
                <select value={positionType} onChange={handlePositionTypeChange}>
                    <option value="tablePosition">桌面位置</option>
                    <option value="arrayPosition">牌阵位置</option>
                </select>
                <input type="text" value={targetPosition} onChange={handleTargetPositionChange} placeholder="请输入目标位置" />
                <button onClick={handleChangeByIndex}>通过序号修改卡牌位置</button>
                <button onClick={handleChangeByName}>通过名字修改卡牌位置</button>
                <select value={statusType} onChange={handleStatusTypeChange}>
                    <option value="reversed">Reversed状态</option>
                    <option value="flipped">Flipped状态</option>
                </select>
                <select value={statusValue} onChange={handleStatusValueChange}>
                    <option value={false}>否</option>
                    <option value={true}>是</option>
                </select>
                <button onClick={handleChangeStatusByIndex}>通过序号修改卡片状态</button>
                <button onClick={handleChangeStatusByName}>通过名字修改卡片状态</button>
                <button onClick={randomizeAllTablePositions}>随机生成所有桌面位置</button>
                <button onClick={orderAllTablePositions}>顺序生成所有桌面位置</button>
                <button onClick={suspendAllTablePositions}>挂起所有桌面位置</button>
                <button onClick={suspendAllArrayPositions}>挂起所有牌阵位置</button>
                <button onClick={randomizeAllReversed}>随机生成所有卡片的Reversed状态</button>
                <button onClick={suspendAllReversed}>挂起所有卡片的Reversed状态</button>
                <button onClick={suspendAllFlipped}>挂起所有卡片的Flipped状态</button>
            </div>
        </div>
    );
}

export default DisplayDivinationInfoContext;
