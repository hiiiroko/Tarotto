// ItemInfoContext.jsx
// CMRVCode 102____

import React, { createContext } from 'react';
import * as InitialValue from './InitialValue';
import * as ContextInterface from '../contexts/ContextInterface';

const CMRV = ContextInterface.ContextMethodReturnValue;

const ItemInfoContext = createContext({
    itemInfo: {
        coin: InitialValue.coinInitial,
        plusInfo: InitialValue.plusInfoInitial,
        option: {
            backgroundMusic: "default",
            tablecloth: "default",
            cardFace: "default",
            crystalBall: "default",
            aromatherapy: "default"
        },
        backgroundMusicList: InitialValue.backgroundMusicList,
        tableclothList: InitialValue.tableclothList,
        cardFaceList: InitialValue.cardFaceList,
        crystalBallList: InitialValue.crystalBallList,
        aromatherapyList: InitialValue.aromatherapyList
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
            return new CMRV(1020102, "Insufficient coins");
        }
        // 如果新的coin值小于0，就保持原值不变，并抛出一个错误
        if (newCoin < 0) {
            return new CMRV(1020103, "Coin overflow");
        }
        this.setState(prevState => ({
            ...prevState,
            itemInfo: {
                ...prevState.itemInfo,
                coin: newCoin
            }
        }));
        return new CMRV(1020100, "Coin operation successful");
    }

    // 修改附加信息的方法
    changePlusInfo = (plusInfo) => {
        // 首先检查附加信息是否是一个字符串，并且长度不超过128个字符
        if (typeof plusInfo !== 'string' || plusInfo.length > 128) {
            return new CMRV(1020201);
        }
        this.setState(prevState => ({
            ...prevState,
            itemInfo: {
                ...prevState.itemInfo,
                plusInfo: plusInfo
            }
        }));
        return new CMRV(1020200, "OK");
    }

    // 触摸背景音乐的方法
    touchBackgroundMusic = (name) => {
        // 首先检查name是否是一个字符串，并且在itemInfo中的backgroundMusic数组中存在匹配的对象
        if (typeof name !== 'string' || !this.state.itemInfo.backgroundMusicList.some(item => item.name === name)) {
            return new CMRV(1020301);
        }
        // 然后找到匹配对象在数组中的索引
        const index = this.state.itemInfo.backgroundMusicList.findIndex(item => item.name === name);
        // 如果匹配对象的purchased值为true，就将option中的backgroundMusic值修改为name，并返回"Selection operation successful"作为函数的返回值
        if (this.state.itemInfo.backgroundMusicList[index].purchased) {
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
            return new CMRV(1020300, "Selection operation successful");
        }
        // 如果匹配对象的purchased值为false，就调用changeCoin方法，并向其中传入匹配对象price值的相反数
        const result = this.changeCoin(-this.state.itemInfo.backgroundMusicList[index].price);
        // 如果changeCoin方法的返回值为"Coin operation successful"，就修改匹配对象的purchased值为true，并返回"Purchase operation successful"作为函数的返回值
        if (result.getData() === "Coin operation successful") {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    backgroundMusicList: prevState.itemInfo.backgroundMusicList.map((item, i) => {
                        // 如果当前对象的索引与匹配对象的索引相同，就返回一个新对象，purchased属性为true，否则返回原对象
                        return i === index ? { ...item, purchased: true } : item;
                    })
                }
            }));
            return new CMRV(1020300, "Purchase operation successful");
        }
        return result;
    }

    // 触摸桌布的方法
    touchTablecloth = (name) => {
        // 首先检查name是否是一个字符串，并且在itemInfo中的tablecloth数组中存在匹配的对象
        if (typeof name !== 'string' || !this.state.itemInfo.tableclothList.some(item => item.name === name)) {
            return new CMRV(1020401);
        }
        // 然后找到匹配对象在数组中的索引
        const index = this.state.itemInfo.tableclothList.findIndex(item => item.name === name);
        // 如果匹配对象的purchased值为true，就将option中的tablecloth值修改为name，并返回"Selection operation successful"作为函数的返回值
        if (this.state.itemInfo.tableclothList[index].purchased) {
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
            return new CMRV(1020400, "Selection operation successful");
        }
        // 如果匹配对象的purchased值为false，就调用changeCoin方法，并向其中传入匹配对象price值的相反数
        const result = this.changeCoin(-this.state.itemInfo.tableclothList[index].price);
        // 如果changeCoin方法的返回值为"Coin operation successful"，就修改匹配对象的purchased值为true，并返回"Purchase operation successful"作为函数的返回值
        if (result.getData() === "Coin operation successful") {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    tableclothList: prevState.itemInfo.tableclothList.map((item, i) => {
                        // 如果当前对象的索引与匹配对象的索引相同，就返回一个新对象，purchased属性为true，否则返回原对象
                        return i === index ? { ...item, purchased: true } : item;
                    })
                }
            }));
            return new CMRV(1020400, "Purchase operation successful");
        }
        return result;
    }
    
    // 触摸卡面的方法
    touchCardFace = (name) => {
        // 首先检查name是否是一个字符串，并且在itemInfo中的cardFace数组中存在匹配的对象
        if (typeof name !== 'string' || !this.state.itemInfo.cardFaceList.some(item => item.name === name)) {
            return new CMRV(1020501);
        }
        // 然后找到匹配对象在数组中的索引
        const index = this.state.itemInfo.cardFaceList.findIndex(item => item.name === name);
        // 如果匹配对象的purchased值为true，就将option中的cardFace值修改为name，并返回"Selection operation successful"作为函数的返回值
        if (this.state.itemInfo.cardFaceList[index].purchased) {
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
            return new CMRV(1020500, "Selection operation successful");
        }
        // 如果匹配对象的purchased值为false，就调用changeCoin方法，并向其中传入匹配对象price值的相反数
        const result = this.changeCoin(-this.state.itemInfo.cardFaceList[index].price);
        // 如果changeCoin方法的返回值为"Coin operation successful"，就修改匹配对象的purchased值为true，并返回"Purchase operation successful"作为函数的返回值
        if (result.getData() === "Coin operation successful") {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    cardFaceList: prevState.itemInfo.cardFaceList.map((item, i) => {
                        // 如果当前对象的索引与匹配对象的索引相同，就返回一个新对象，purchased属性为true，否则返回原对象
                        return i === index ? { ...item, purchased: true } : item;
                    })
                }
            }));
            return new CMRV(1020500, "Purchase operation successful");
        }
        return result;
    }

    // 触摸水晶球的方法
    touchCrystalBall = (name) => {
        // 首先检查name是否是一个字符串，并且在itemInfo中的crystalBall数组中存在匹配的对象
        if (typeof name !== 'string' || !this.state.itemInfo.crystalBallList.some(item => item.name === name)) {
            return new CMRV(1020601);
        }
        // 然后找到匹配对象在数组中的索引
        const index = this.state.itemInfo.crystalBallList.findIndex(item => item.name === name);
        // 如果匹配对象的purchased值为true，就将option中的crystalBall值修改为name，并返回"Selection operation successful"作为函数的返回值
        if (this.state.itemInfo.crystalBallList[index].purchased) {
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
            return new CMRV(1020600, "Selection operation successful");
        }
        // 如果匹配对象的purchased值为false，就调用changeCoin方法，并向其中传入匹配对象price值的相反数
        const result = this.changeCoin(-this.state.itemInfo.crystalBallList[index].price);
        // 如果changeCoin方法的返回值为"Coin operation successful"，就修改匹配对象的purchased值为true，并返回"Purchase operation successful"作为函数的返回值
        if (result.getData() === "Coin operation successful") {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    crystalBallList: prevState.itemInfo.crystalBallList.map((item, i) => {
                        // 如果当前对象的索引与匹配对象的索引相同，就返回一个新对象，purchased属性为true，否则返回原对象
                        return i === index ? { ...item, purchased: true } : item;
                    })
                }
            }));
            return new CMRV(1020600, "Purchase operation successful");
        }
        return result;
    }

    // 触摸熏香的方法
    touchAromatherapy = (name) => {
        // 首先检查name是否是一个字符串，并且在itemInfo中的aromatherapy数组中存在匹配的对象
        if (typeof name !== 'string' || !this.state.itemInfo.aromatherapyList.some(item => item.name === name)) {
            return new CMRV(1020701);
        }
        // 然后找到匹配对象在数组中的索引
        const index = this.state.itemInfo.aromatherapyList.findIndex(item => item.name === name);
        // 如果匹配对象的purchased值为true，就将option中的aromatherapy值修改为name，并返回"Selection operation successful"作为函数的返回值
        if (this.state.itemInfo.aromatherapyList[index].purchased) {
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
            return new CMRV(1020700, "Selection operation successful");
        }
        // 如果匹配对象的purchased值为false，就调用changeCoin方法，并向其中传入匹配对象price值的相反数
        const result = this.changeCoin(-this.state.itemInfo.aromatherapyList[index].price);
        // 如果changeCoin方法的返回值为"Coin operation successful"，就修改匹配对象的purchased值为true，并返回"Purchase operation successful"作为函数的返回值
        if (result.getData() === "Coin operation successful") {
            this.setState(prevState => ({
                ...prevState,
                itemInfo: {
                    ...prevState.itemInfo,
                    aromatherapyList: prevState.itemInfo.aromatherapyList.map((item, i) => {
                        // 如果当前对象的索引与匹配对象的索引相同，就返回一个新对象，purchased属性为true，否则返回原对象
                        return i === index ? { ...item, purchased: true } : item;
                    })
                }
            }));
            return new CMRV(1020700, "Purchase operation successful");
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