// DivinationInfoContext.jsx
// CMRVCode 101____

import React, { createContext } from 'react';
import * as InitialValue from './InitialValue';
import * as ContextInterface from '../contexts/ContextInterface';

const CMRV = ContextInterface.ContextMethodReturnValue;

const DivinationInfoContext = createContext({
    divinationInfo: {
        status: null,
        otherInfo: null,
        cards: InitialValue.cardsInitial
    }
});

class DivinationInfoProvider extends React.Component {
    state = {
        ...DivinationInfoContext._currentValue
    };

    // 通过序号修改卡牌位置的方法
    changeCardPositionByIndex = (index, positionType, targetPosition) => {
        // 检查序号是否在合理的范围内，即0到77
        if (index < 0 || index > 77) {
            return new CMRV(1010101);
        }
        // 检查位置类型是否是'tablePosition'或'arrayPosition'之一
        if (positionType !== 'tablePosition' && positionType !== 'arrayPosition') {
            return new CMRV(1010102);
        }
        // 检查序号和目标位置是否是一个合理的整数
        if (!Number.isInteger(index) || !Number.isInteger(targetPosition)) {
            return new CMRV(1010103);
        }
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: prevState.divinationInfo.cards.map((card, i) => {
                    // 如果当前卡牌的序号与参数匹配，就返回一个新对象，否则返回原对象
                    return i === index ? { ...card, [positionType]: targetPosition } : card;
                })
            }
        }));
        return new CMRV(1010100, "OK");
    }

    // 通过名字修改卡牌位置的方法
    changeCardPositionByName = (name, positionType, targetPosition) => {
        // 检查名字是否是一个字符串，并且在cards数组中存在
        if (typeof name !== 'string' || !this.state.divinationInfo.cards.some(card => card.name === name)) {
            return new CMRV(1010201);
        }
        // 检查位置类型是否是'tablePosition'或'arrayPosition'之一
        if (positionType !== 'tablePosition' && positionType !== 'arrayPosition') {
            return new CMRV(1010202);
        }
        // 检查目标位置是否是一个合理的整数
        if (!Number.isInteger(targetPosition)) {
            return new CMRV(1010203);
        }
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: prevState.divinationInfo.cards.map(card => {
                    // 如果当前卡牌的名字与参数匹配，就返回一个新对象，否则返回原对象
                    return card.name === name ? { ...card, [positionType]: targetPosition } : card;
                })
            }
        }));
        return new CMRV(1010200, "OK");
    }

    // 随机生成所有桌面位置的方法
    randomizeAllTablePositions = () => {
        // 创建一个0到77的整数数组，用于存放随机的桌面位置
        const positions = [];
        for (let i = 0; i < 78; i++) {
            positions.push(i);
        }
        // 使用Fisher-Yates洗牌算法打乱数组的顺序
        for (let i = positions.length - 1; i > 0; i--) {
            // 随机选择一个小于等于i的索引
            const j = Math.floor(Math.random() * (i + 1));
            // 交换positions[i]和positions[j]的值
            [positions[i], positions[j]] = [positions[j], positions[i]];
        }
        // 修改所有卡牌的tablePosition属性为打乱后的数组中对应的值
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: prevState.divinationInfo.cards.map((card, i) => {
                    // 返回一个新对象，tablePosition属性为positions[i]的值
                    return { ...card, tablePosition: positions[i] };
                })
            }
        }));
        return new CMRV(1010300, "OK");
    }

    // 顺序生成所有桌面位置的方法
    orderAllTablePositions = () => {
        // 修改所有卡牌的tablePosition属性为与序号相同的值
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: prevState.divinationInfo.cards.map((card, i) => {
                    // 返回一个新对象，tablePosition属性为i的值
                    return { ...card, tablePosition: i };
                })
            }
        }));
        return new CMRV(1010400, "OK");
    }

    // 挂起所有桌面位置的方法
    suspendAllTablePositions = () => {
        // 修改所有卡牌的tablePosition属性为-1
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: prevState.divinationInfo.cards.map(card => {
                    // 返回一个新对象，tablePosition属性为-1
                    return { ...card, tablePosition: -1 };
                })
            }
        }));
        return new CMRV(1010500, "OK");
    }

    // 挂起所有牌阵位置的方法
    suspendAllArrayPositions = () => {
        // 修改所有卡牌的arrayPosition属性为-1
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: prevState.divinationInfo.cards.map(card => {
                    // 返回一个新对象，arrayPosition属性为-1
                    return { ...card, arrayPosition: -1 };
                })
            }
        }));
        return new CMRV(1010600, "OK");
    }

    // 通过序号修改卡片状态
    changeCardStatusByIndex = (index, statusType, statusValue) => {
        // 检查参数合法性
        if (!Number.isInteger(index) ) {
            return new CMRV(1010101);
        }
        if (index < 0 || index >= this.state.divinationInfo.cards.length) {
            return new CMRV(1010702);
        }
        if (statusType !== 'reversed' && statusType !== 'flipped') {
            return new CMRV(1010703);
        }
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: prevState.divinationInfo.cards.map((card, i) => {
                    return i === index ? { ...card, [statusType]: statusValue } : card;
                })
            }
        }));
        return new CMRV(1010700, "OK");
    }

    // 通过名字修改卡片状态
    changeCardStatusByName = (name, statusType, statusValue) => {
        // 检查参数合法性
        if (typeof name !== 'string' || !this.state.divinationInfo.cards.some(card => card.name === name)) {
            return new CMRV(1010801); 
        }
        if (statusType !== 'reversed' && statusType !== 'flipped') {
            return new CMRV(1010802); 
        }
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: prevState.divinationInfo.cards.map(card => {
                    return card.name === name ? { ...card, [statusType]: statusValue } : card;
                })
            }
        }));
        return new CMRV(1010800, "OK");
    }

    // 随机生成所有卡片的reversed状态
    randomizeAllReversed = () => {
        const newCards = this.state.divinationInfo.cards.map(card => ({
            ...card,
            reversed: Math.random() < 0.5  // 50%的概率为true
        }));
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: newCards
            }
        }));
        return new CMRV(1010900, "OK");
    }

    // 挂起所有卡片的reversed状态
    suspendAllReversed = () => {
        const newCards = this.state.divinationInfo.cards.map(card => ({
            ...card,
            reversed: false
        }));
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: newCards
            }
        }));
        return new CMRV(1011000, "OK");
    }

    // 挂起所有卡片的flipped状态
    suspendAllFlipped = () => {
        const newCards = this.state.divinationInfo.cards.map(card => ({
            ...card,
            flipped: false
        }));
        this.setState(prevState => ({
            ...prevState,
            divinationInfo: {
                ...prevState.divinationInfo,
                cards: newCards
            }
        }));
        return new CMRV(1011100, "OK");
    }

    render() {
        return (
            <DivinationInfoContext.Provider value={{
                ...this.state,
                changeCardPositionByIndex: this.changeCardPositionByIndex,
                changeCardPositionByName: this.changeCardPositionByName,

                randomizeAllReversed: this.randomizeAllReversed,
                suspendAllReversed: this.suspendAllReversed,
                suspendAllFlipped: this.suspendAllFlipped,

                changeCardStatusByIndex: this.changeCardStatusByIndex,
                changeCardStatusByName: this.changeCardStatusByName,

                randomizeAllTablePositions: this.randomizeAllTablePositions,
                orderAllTablePositions: this.orderAllTablePositions,
                suspendAllTablePositions: this.suspendAllTablePositions,
                suspendAllArrayPositions: this.suspendAllArrayPositions
            }}>
                {this.props.children}
            </DivinationInfoContext.Provider>
        );
    }

}

export { DivinationInfoProvider, DivinationInfoContext };