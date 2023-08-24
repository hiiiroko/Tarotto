// DisplayDivinationInfoContext.jsx

import React, { useContext } from 'react';
// 导入DivinationInfoContext，以便在组件中使用它的值和方法
import { DivinationInfoContext } from '../contexts/DivinationInfoContext';

function DisplayDivinationInfoContext() {
    // 使用useContext钩子来获取DivinationInfoContext的值和方法
    const { divinationInfo, changeCardPositionByIndex, changeCardPositionByName, randomizeAllTablePositions, orderAllTablePositions, suspendAllTablePositions, suspendAllArrayPositions } = useContext(DivinationInfoContext);

    // 创建一个本地状态，用于存放用户输入的卡牌序号或名字
    const [input, setInput] = React.useState('');

    // 创建一个本地状态，用于存放用户选择的位置类型
    const [positionType, setPositionType] = React.useState('tablePosition');

    // 创建一个本地状态，用于存放用户输入的目标位置
    const [targetPosition, setTargetPosition] = React.useState('');

    // 创建一个处理函数，用于当用户输入卡牌序号或名字时更新input状态
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    // 创建一个处理函数，用于当用户选择位置类型时更新positionType状态
    const handlePositionTypeChange = (event) => {
        setPositionType(event.target.value);
    }

    // 创建一个处理函数，用于当用户输入目标位置时更新targetPosition状态
    const handleTargetPositionChange = (event) => {
        setTargetPosition(event.target.value);
    }

    // 创建一个处理函数，用于当用户点击通过序号修改卡牌位置的按钮时调用changeCardPositionByIndex方法
    const handleChangeByIndex = () => {
        // 尝试将input转换为整数
        const index = parseInt(input);
        // 如果转换成功，并且是0到77之间的整数，就调用changeCardPositionByIndex方法
        if (!isNaN(index) && index >= 0 && index <= 77) {
            const SC = changeCardPositionByIndex(index, positionType, parseInt(targetPosition));
            console.log(SC.getReturnValue());
        } else {
            // 如果转换失败或者不在范围内，就弹出一个警告框提示用户输入有效的卡牌序号
            alert('请输入0到77之间的整数作为卡牌序号');
        }
    }

    // 创建一个处理函数，用于当用户点击通过名字修改卡牌位置的按钮时调用changeCardPositionByName方法
    const handleChangeByName = () => {
        // 调用changeCardPositionByName方法，传入input作为卡牌名字
        changeCardPositionByName(input, positionType, parseInt(targetPosition));
    }

    return (
        <div>
            {/* 创建一个可滚动表格，显示所有卡牌的名字和位置属性 */}
            <div style={{ overflow: 'auto', height: '300px' }}>
                <table>
                    <thead>
                        <tr>
                            <th>卡牌名字</th>
                            <th>桌面位置</th>
                            <th>牌阵位置</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 遍历divinationInfo.cards数组，为每个卡牌创建一个表格行 */}
                        {divinationInfo.cards.map(card => (
                            <tr key={card.name}>
                                <td>{card.name}</td>
                                <td>{card.tablePosition}</td>
                                <td>{card.arrayPosition}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 在表格下添加一些元素，让用户可以输入或选择参数，并调用相应的方法 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* 添加一个输入框，让用户可以输入卡牌序号或名字 */}
                <input type="text" value={input} onChange={handleInputChange} placeholder="请输入卡牌序号或名字" />
                {/* 添加一个选择框，让用户可以选择位置类型 */}
                <select value={positionType} onChange={handlePositionTypeChange}>
                    <option value="tablePosition">桌面位置</option>
                    <option value="arrayPosition">牌阵位置</option>
                </select>
                {/* 添加一个输入框，让用户可以输入目标位置 */}
                <input type="text" value={targetPosition} onChange={handleTargetPositionChange} placeholder="请输入目标位置" />
                {/* 添加两个按钮，让用户可以通过序号或名字修改卡牌位置 */}
                <button onClick={handleChangeByIndex}>通过序号修改卡牌位置</button>
                <button onClick={handleChangeByName}>通过名字修改卡牌位置</button>
                {/* 添加四个按钮，让用户可以随机生成，顺序生成，挂起所有桌面位置或牌阵位置 */}
                <button onClick={randomizeAllTablePositions}>随机生成所有桌面位置</button>
                <button onClick={orderAllTablePositions}>顺序生成所有桌面位置</button>
                <button onClick={suspendAllTablePositions}>挂起所有桌面位置</button>
                <button onClick={suspendAllArrayPositions}>挂起所有牌阵位置</button>
            </div>
        </div>
    );
}

export default DisplayDivinationInfoContext;
