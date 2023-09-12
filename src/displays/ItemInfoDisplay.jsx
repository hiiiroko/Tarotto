// DisplayItemInfoContext.jsx

import React, { useContext } from 'react';
import { ItemInfoContext } from '../contexts/ItemInfoContext';

function DisplayItemInfoContext() {
    const {
        itemInfo,
        changeCoin,
        changePlusInfo,
        touchBackgroundMusic,
        touchTablecloth,
        touchCardFace,
        touchCrystalBall,
        touchAromatherapy
    } = useContext(ItemInfoContext);

    const [coin, setCoin] = React.useState('');
    const [otherInfo, setOtherInfo] = React.useState('');
    const [backgroundMusic, setBackgroundMusic] = React.useState(itemInfo.option.backgroundMusic);
    const [tablecloth, setTablecloth] = React.useState(itemInfo.option.tablecloth);
    const [cardFace, setCardFace] = React.useState(itemInfo.option.cardFace);
    const [crystalBall, setCrystalBall] = React.useState(itemInfo.option.crystalBall);
    const [aromatherapy, setAromatherapy] = React.useState(itemInfo.option.aromatherapy);

    const handleCoinChange = (event) => {
        setCoin(event.target.value);
    }

    const handleOtherInfoChange = (event) => {
        setOtherInfo(event.target.value);
    }

    const handleBackgroundMusicChange = (event) => {
        setBackgroundMusic(event.target.value);
    }

    const handleTableclothChange = (event) => {
        setTablecloth(event.target.value);
    }

    const handleCardFaceChange = (event) => {
        setCardFace(event.target.value);
    }

    const handleCrystalBallChange = (event) => {
        setCrystalBall(event.target.value);
    }

    const handleAromatherapyChange = (event) => {
        setAromatherapy(event.target.value);
    }

    const handleChangeCoin = () => {
        changeCoin(parseInt(coin));
        setCoin('');
    }

    const handleChangeOtherInfo = () => {
        changePlusInfo(otherInfo);
        setOtherInfo('');
    }

    return (
        <div>
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

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="number" value={coin} onChange={handleCoinChange} placeholder="请输入硬币数量" />
                <button onClick={handleChangeCoin}>修改硬币数量</button>
                <textarea value={otherInfo} onChange={handleOtherInfoChange} placeholder="请输入其他信息" />
                <button onClick={handleChangeOtherInfo}>修改其他信息</button>
                <select value={backgroundMusic} onChange={handleBackgroundMusicChange}>
                    {/* 遍历itemInfo中的backgroundMusic数组，为每个选项创建一个选项元素 */}
                    {itemInfo.backgroundMusicList.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                <button onClick={() => touchBackgroundMusic(backgroundMusic)}>触摸背景音乐</button>
                <select value={tablecloth} onChange={handleTableclothChange}>
                    {/* 遍历itemInfo中的tablecloth数组，为每个选项创建一个选项元素 */}
                    {itemInfo.tableclothList.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                <button onClick={() => touchTablecloth(tablecloth)}>触摸桌布</button>
                <select value={cardFace} onChange={handleCardFaceChange}>
                    {/* 遍历itemInfo中的cardFace数组，为每个选项创建一个选项元素 */}
                    {itemInfo.cardFaceList.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                <button onClick={() => touchCardFace(cardFace)}>触摸卡面</button>
                <select value={crystalBall} onChange={handleCrystalBallChange}>
                    {/* 遍历itemInfo中的crystalBall数组，为每个选项创建一个选项元素 */}
                    {itemInfo.crystalBallList.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                <button onClick={() => touchCrystalBall(crystalBall)}>触摸水晶球</button>
                <select value={aromatherapy} onChange={handleAromatherapyChange}>
                    {/* 遍历itemInfo中的aromatherapy数组，为每个选项创建一个选项元素 */}
                    {itemInfo.aromatherapyList.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                <button onClick={() => touchAromatherapy(aromatherapy)}>触摸熏香</button>
            </div>
        </div>
    );
}

export default DisplayItemInfoContext;
