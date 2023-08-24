// ItemInfoContext.jsx
// CMRVCode 102____

import React, { createContext } from 'react';
import * as InitialValue from './InitialValue';
import * as ContextInterface from '../contexts/ContextInterface';

const CMRV = ContextInterface.ContextMethodReturnValue;

const ItemInfoContext = createContext({
    itemInfo: {
        coin: 100,
        otherInfo: null,
        option: {
            backgroundMusic: "default",
            tablecloth: "default",
            cardFace: "default",
            crystalBall: "default",
            aromatherapy: "default"
        },
        backgroundMusic: InitialValue.backgroundMusic,
        tablecloth: InitialValue.tablecloth,
        cardFace: InitialValue.cardFace,
        crystalBall: InitialValue.crystalBall,
        aromatherapy: InitialValue.aromatherapy
    }
});

class ItemInfoProvider extends React.Component {
    state = {
        ...ItemInfoContext._currentValue
    };

    // 修改硬币数量的方法
    changeCoin = (amount) => {
        // 首先检查amount是否是一个整数
        if (!Number.isInteger(amount)) {
            return new CMRV(1020101);
        }
        // 然后计算修改后的coin值
        const newCoin = this.state.itemInfo.coin + amount;
        // 如果新的coin值大于65536，就将其设为65536，并抛出一个错误
        if (newCoin > 65536) {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    coin: 65536
                }
            }));
            return new CMRV(1020102,"Insufficient coins");
        }
        // 如果新的coin值小于0，就保持原值不变，并抛出一个错误
        if (newCoin < 0) {
            return new CMRV(1020103,"Coin overflow");
        }
        // 如果新的coin值在合理范围内，就修改itemInfo中的coin属性，并返回"Coin operation successful"作为函数的返回值
        this.setState(prevState => ({
            ...prevState,
            itemInfo: {
                ...prevState.itemInfo,
                coin: newCoin
            }
        }));
        return new CMRV(1020100,"Coin operation successful");
    }

    // 修改其他信息的方法
    changePlusInfo = (otherInfo) => {
        // 首先检查其他信息是否是一个字符串，并且长度不超过128个字符
        if (typeof otherInfo !== 'string' || otherInfo.length > 128) {
            return new CMRV(1020201);
        }
        // 如果参数合理，那么就修改itemInfo中的otherInfo属性
        this.setState(prevState => ({
            ...prevState,
            itemInfo: {
                ...prevState.itemInfo,
                otherInfo: otherInfo
            }
        }));
        return new CMRV(1020200,"OK");
    }

    // 触摸背景音乐的方法
    touchBackgroundMusic = (name) => {
        // 首先检查name是否是一个字符串，并且在itemInfo中的backgroundMusic数组中存在匹配的对象
        if (typeof name !== 'string' || !this.state.itemInfo.backgroundMusic.some(item => item.name === name)) {
            return new CMRV(1020301);
        }
        // 然后找到匹配对象在数组中的索引
        const index = this.state.itemInfo.backgroundMusic.findIndex(item => item.name === name);
        // 如果匹配对象的purchased值为true，就将option中的backgroundMusic值修改为name，并返回"Selection operation successful"作为函数的返回值
        if (this.state.itemInfo.backgroundMusic[index].purchased) {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    option: {
                        ...prevState.itemInfo.option,
                        backgroundMusic: name
                    }
                }
            }));
            return new CMRV(1020300,"Selection operation successful");
        }
        // 如果匹配对象的purchased值为false，就调用changeCoin方法，并向其中传入匹配对象price值的相反数
        const result = this.changeCoin(-this.state.itemInfo.backgroundMusic[index].price);
        // 如果changeCoin方法的返回值为"Coin operation successful"，就修改匹配对象的purchased值为true，并返回"Purchase operation successful"作为函数的返回值
        if (result.getData() === "Coin operation successful") {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    backgroundMusic: prevState.itemInfo.backgroundMusic.map((item, i) => {
                        // 如果当前对象的索引与匹配对象的索引相同，就返回一个新对象，purchased属性为true，否则返回原对象
                        return i === index ? { ...item, purchased: true } : item;
                    })
                }
            }));
            return new CMRV(1020300,"Purchase operation successful");
        }
        return result;
    }

    // 触摸桌布的方法
    touchTablecloth = (name) => {
        // 首先检查name是否是一个字符串，并且在itemInfo中的tablecloth数组中存在匹配的对象
        if (typeof name !== 'string' || !this.state.itemInfo.tablecloth.some(item => item.name === name)) {
            return new CMRV(1020401);
        }
        // 然后找到匹配对象在数组中的索引
        const index = this.state.itemInfo.tablecloth.findIndex(item => item.name === name);
        // 如果匹配对象的purchased值为true，就将option中的tablecloth值修改为name，并返回"Selection operation successful"作为函数的返回值
        if (this.state.itemInfo.tablecloth[index].purchased) {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    option: {
                        ...prevState.itemInfo.option,
                        tablecloth: name
                    }
                }
            }));
            return new CMRV(1020400,"Selection operation successful");
        }
        // 如果匹配对象的purchased值为false，就调用changeCoin方法，并向其中传入匹配对象price值的相反数
        const result = this.changeCoin(-this.state.itemInfo.tablecloth[index].price);
        // 如果changeCoin方法的返回值为"Coin operation successful"，就修改匹配对象的purchased值为true，并返回"Purchase operation successful"作为函数的返回值
        if (result === "Coin operation successful") {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    tablecloth: prevState.itemInfo.tablecloth.map((item, i) => {
                        // 如果当前对象的索引与匹配对象的索引相同，就返回一个新对象，purchased属性为true，否则返回原对象
                        return i === index ? { ...item, purchased: true } : item;
                    })
                }
            }));
            return new CMRV(1020400,"Purchase operation successful");
        }
        return result;
    }


    // 触摸卡面的方法
    touchCardFace = (name) => {
        // 首先检查name是否是一个字符串，并且在itemInfo中的cardFace数组中存在匹配的对象
        if (typeof name !== 'string' || !this.state.itemInfo.cardFace.some(item => item.name === name)) {
            return new CMRV(1020501);
        }
        // 然后找到匹配对象在数组中的索引
        const index = this.state.itemInfo.cardFace.findIndex(item => item.name === name);
        // 如果匹配对象的purchased值为true，就将option中的cardFace值修改为name，并返回"Selection operation successful"作为函数的返回值
        if (this.state.itemInfo.cardFace[index].purchased) {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    option: {
                        ...prevState.itemInfo.option,
                        cardFace: name
                    }
                }
            }));
            return new CMRV(1020500,"Selection operation successful");
        }
        // 如果匹配对象的purchased值为false，就调用changeCoin方法，并向其中传入匹配对象price值的相反数
        const result = this.changeCoin(-this.state.itemInfo.cardFace[index].price);
        // 如果changeCoin方法的返回值为"Coin operation successful"，就修改匹配对象的purchased值为true，并返回"Purchase operation successful"作为函数的返回值
        if (result === "Coin operation successful") {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    cardFace: prevState.itemInfo.cardFace.map((item, i) => {
                        // 如果当前对象的索引与匹配对象的索引相同，就返回一个新对象，purchased属性为true，否则返回原对象
                        return i === index ? { ...item, purchased: true } : item;
                    })
                }
            }));
            return new CMRV(1020500,"Purchase operation successful");
        }
        return result;
    }

    // 触摸水晶球的方法
    touchCrystalBall = (name) => {
        // 首先检查name是否是一个字符串，并且在itemInfo中的crystalBall数组中存在匹配的对象
        if (typeof name !== 'string' || !this.state.itemInfo.crystalBall.some(item => item.name === name)) {
            return new CMRV(1020601);
        }
        // 然后找到匹配对象在数组中的索引
        const index = this.state.itemInfo.crystalBall.findIndex(item => item.name === name);
        // 如果匹配对象的purchased值为true，就将option中的crystalBall值修改为name，并返回"Selection operation successful"作为函数的返回值
        if (this.state.itemInfo.crystalBall[index].purchased) {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    option: {
                        ...prevState.itemInfo.option,
                        crystalBall: name
                    }
                }
            }));
            return new CMRV(1020600,"Selection operation successful");
        }
        // 如果匹配对象的purchased值为false，就调用changeCoin方法，并向其中传入匹配对象price值的相反数
        const result = this.changeCoin(-this.state.itemInfo.crystalBall[index].price);
        // 如果changeCoin方法的返回值为"Coin operation successful"，就修改匹配对象的purchased值为true，并返回"Purchase operation successful"作为函数的返回值
        if (result === "Coin operation successful") {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    crystalBall: prevState.itemInfo.crystalBall.map((item, i) => {
                        // 如果当前对象的索引与匹配对象的索引相同，就返回一个新对象，purchased属性为true，否则返回原对象
                        return i === index ? { ...item, purchased: true } : item;
                    })
                }
            }));
            return new CMRV(1020600,"Purchase operation successful");
        }
        return result;
    }

    // 触摸熏香的方法
    touchAromatherapy = (name) => {
        // 首先检查name是否是一个字符串，并且在itemInfo中的aromatherapy数组中存在匹配的对象
        if (typeof name !== 'string' || !this.state.itemInfo.aromatherapy.some(item => item.name === name)) {
            return new CMRV(1020701);
        }
        // 然后找到匹配对象在数组中的索引
        const index = this.state.itemInfo.aromatherapy.findIndex(item => item.name === name);
        // 如果匹配对象的purchased值为true，就将option中的aromatherapy值修改为name，并返回"Selection operation successful"作为函数的返回值
        if (this.state.itemInfo.aromatherapy[index].purchased) {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    option: {
                        ...prevState.itemInfo.option,
                        aromatherapy: name
                    }
                }
            }));
            return new CMRV(1020700,"Selection operation successful");
        }
        // 如果匹配对象的purchased值为false，就调用changeCoin方法，并向其中传入匹配对象price值的相反数
        const result = this.changeCoin(-this.state.itemInfo.aromatherapy[index].price);
        // 如果changeCoin方法的返回值为"Coin operation successful"，就修改匹配对象的purchased值为true，并返回"Purchase operation successful"作为函数的返回值
        if (result === "Coin operation successful") {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    aromatherapy: prevState.itemInfo.aromatherapy.map((item, i) => {
                        // 如果当前对象的索引与匹配对象的索引相同，就返回一个新对象，purchased属性为true，否则返回原对象
                        return i === index ? { ...item, purchased: true } : item;
                    })
                }
            }));
            return new CMRV(1020700,"Purchase operation successful");
        }
        return result;
    }

    render() {
        return (
            <ItemInfoContext.Provider value={{
                ...this.state,
                changeCoin: this.changeCoin,
                changePlusInfo: this.changePlusInfo,
                touchBackgroundMusic: this.touchBackgroundMusic,
                touchTablecloth: this.touchTablecloth,
                touchCardFace: this.touchCardFace,
                touchCrystalBall: this.touchCrystalBall,
                touchAromatherapy: this.touchAromatherapy
            }}>
                {this.props.children}
            </ItemInfoContext.Provider>
        );
    }
}

export { ItemInfoProvider, ItemInfoContext };