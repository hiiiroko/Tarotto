// DisplayItemInfoContext.jsx

import React, { useContext } from 'react';
// 导入ItemInfoContext，以便在组件中使用它的值和方法
import { ItemInfoContext } from '../contexts/ItemInfoContext';

function DisplayItemInfoContext() {
    // 使用useContext钩子来获取ItemInfoContext的值和方法
    const { itemInfo, changeCoin, changePlusInfo, touchBackgroundMusic, touchTablecloth, touchCardFace, touchCrystalBall, touchAromatherapy } = useContext(ItemInfoContext);

    // 创建一个本地状态，用于存放用户输入的硬币数量
    const [coin, setCoin] = React.useState('');

    // 创建一个本地状态，用于存放用户输入的其他信息
    const [otherInfo, setOtherInfo] = React.useState('');

    // 创建一个本地状态，用于存放用户选择的背景音乐
    const [backgroundMusic, setBackgroundMusic] = React.useState(itemInfo.option.backgroundMusic);

    // 创建一个本地状态，用于存放用户选择的桌布
    const [tablecloth, setTablecloth] = React.useState(itemInfo.option.tablecloth);

    // 创建一个本地状态，用于存放用户选择的卡面
    const [cardFace, setCardFace] = React.useState(itemInfo.option.cardFace);

    // 创建一个本地状态，用于存放用户选择的水晶球
    const [crystalBall, setCrystalBall] = React.useState(itemInfo.option.crystalBall);

    // 创建一个本地状态，用于存放用户选择的熏香
    const [aromatherapy, setAromatherapy] = React.useState(itemInfo.option.aromatherapy);

    // 创建一个处理函数，用于当用户输入硬币数量时更新coin状态
    const handleCoinChange = (event) => {
        setCoin(event.target.value);
    }

    // 创建一个处理函数，用于当用户输入其他信息时更新otherInfo状态
    const handleOtherInfoChange = (event) => {
        setOtherInfo(event.target.value);
    }

    // 创建一个处理函数，用于当用户选择背景音乐时更新backgroundMusic状态
    const handleBackgroundMusicChange = (event) => {
        setBackgroundMusic(event.target.value);
    }

    // 创建一个处理函数，用于当用户选择桌布时更新tablecloth状态
    const handleTableclothChange = (event) => {
        setTablecloth(event.target.value);
    }

    // 创建一个处理函数，用于当用户选择卡面时更新cardFace状态
    const handleCardFaceChange = (event) => {
        setCardFace(event.target.value);
    }

    // 创建一个处理函数，用于当用户选择水晶球时更新crystalBall状态
    const handleCrystalBallChange = (event) => {
        setCrystalBall(event.target.value);
    }

    // 创建一个处理函数，用于当用户选择熏香时更新aromatherapy状态
    const handleAromatherapyChange = (event) => {
        setAromatherapy(event.target.value);
    }

    // 创建一个处理函数，用于当用户点击修改硬币数量的按钮时调用changeCoin方法
    const handleChangeCoin = () => {
        // 将coin状态转换为整数，并调用changeCoin方法，传入coin作为参数
        changeCoin(parseInt(coin));
        // 清空coin状态
        setCoin('');
    }

    // 创建一个处理函数，用于当用户点击修改其他信息的按钮时调用changeOtherInfo方法
    const handleChangeOtherInfo = () => {
        // 调用changeOtherInfo方法，传入otherInfo作为参数
        changePlusInfo(otherInfo);
        // 清空otherInfo状态
        setOtherInfo('');
    }

    return (
        <div>
            {/* 创建一个表格，显示所有itemInfo中的字段 */}
            <table>
                <thead>
                    <tr>
                        <th>字段</th>
                        <th>值</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 遍历itemInfo中的键值对，为每个字段创建一个表格行 */}
                    {Object.entries(itemInfo).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{JSON.stringify(value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* 在表格下添加一些元素，让用户可以输入或选择参数，并调用相应的方法 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* 添加一个输入框，让用户可以输入硬币数量 */}
                <input type="number" value={coin} onChange={handleCoinChange} placeholder="请输入硬币数量" />
                {/* 添加一个按钮，让用户可以修改硬币数量 */}
                <button onClick={handleChangeCoin}>修改硬币数量</button>
                {/* 添加一个输入区域，让用户可以输入其他信息 */}
                <textarea value={otherInfo} onChange={handleOtherInfoChange} placeholder="请输入其他信息" />
                {/* 添加一个按钮，让用户可以修改其他信息 */}
                <button onClick={handleChangeOtherInfo}>修改其他信息</button>
                {/* 添加一个选择框，让用户可以选择背景音乐 */}
                <select value={backgroundMusic} onChange={handleBackgroundMusicChange}>
                    {/* 遍历itemInfo中的backgroundMusic数组，为每个选项创建一个选项元素 */}
                    {itemInfo.backgroundMusic.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                {/* 添加一个按钮，让用户可以触摸背景音乐 */}
                <button onClick={() => touchBackgroundMusic(backgroundMusic)}>触摸背景音乐</button>
                {/* 添加一个选择框，让用户可以选择桌布 */}
                <select value={tablecloth} onChange={handleTableclothChange}>
                    {/* 遍历itemInfo中的tablecloth数组，为每个选项创建一个选项元素 */}
                    {itemInfo.tablecloth.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                {/* 添加一个按钮，让用户可以触摸桌布 */}
                <button onClick={() => touchTablecloth(tablecloth)}>触摸桌布</button>
                {/* 添加一个选择框，让用户可以选择卡面 */}
                <select value={cardFace} onChange={handleCardFaceChange}>
                    {/* 遍历itemInfo中的cardFace数组，为每个选项创建一个选项元素 */}
                    {itemInfo.cardFace.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                {/* 添加一个按钮，让用户可以触摸卡面 */}
                <button onClick={() => touchCardFace(cardFace)}>触摸卡面</button>
                {/* 添加一个选择框，让用户可以选择水晶球 */}
                <select value={crystalBall} onChange={handleCrystalBallChange}>
                    {/* 遍历itemInfo中的crystalBall数组，为每个选项创建一个选项元素 */}
                    {itemInfo.crystalBall.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                {/* 添加一个按钮，让用户可以触摸水晶球 */}
                <button onClick={() => touchCrystalBall(crystalBall)}>触摸水晶球</button>
                {/* 添加一个选择框，让用户可以选择熏香 */}
                <select value={aromatherapy} onChange={handleAromatherapyChange}>
                    {/* 遍历itemInfo中的aromatherapy数组，为每个选项创建一个选项元素 */}
                    {itemInfo.aromatherapy.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                {/* 添加一个按钮，让用户可以触摸熏香 */}
                <button onClick={() => touchAromatherapy(aromatherapy)}>触摸熏香</button>
            </div>
        </div>
    );
}

export default DisplayItemInfoContext;
