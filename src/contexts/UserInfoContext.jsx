// UserInfoContext.jsx
// CMRVCode 103____

import React, { createContext } from 'react';
import * as InitialValue from './InitialValue';
import * as ContextInterface from '../contexts/ContextInterface';

const CMRV = ContextInterface.ContextMethodReturnValue;

const UserInfoContext = createContext({
    userInfo: {
        username: InitialValue.usernameInital,
        otherInfo: InitialValue.otherInfoInitial,
        option: {
            language: "zh-CN",
            theme: "light",
            avatar: "default"
        },
        languageList: InitialValue.languageList,
        themeList: InitialValue.themeList,
        avatarList: InitialValue.avatarList
    }
});

class UserInfoProvider extends React.Component {
    state = {
        ...UserInfoContext._currentValue
    };

    // 修改用户名的方法
    changeUsername = (username) => {
        // 首先检查用户名是否是一个字符串，并且长度不超过32个字符
        if (typeof username !== 'string' || username.length > 32) {
            return new CMRV(1030101);
        }
        this.setState(prevState => ({
            ...prevState,
            userInfo: {
                ...prevState.userInfo,
                username: username
            }
        }));
        return new CMRV(1030100, "OK");
    }

    // 修改其他信息的方法
    changeOtherInfo = (otherInfo) => {
        // 首先检查其他信息是否是一个字符串，并且长度不超过128个字符
        if (typeof otherInfo !== 'string' || otherInfo.length > 128) {
            return new CMRV(1030201);
        }
        this.setState(prevState => ({
            ...prevState,
            userInfo: {
                ...prevState.userInfo,
                otherInfo: otherInfo
            }
        }));
        return new CMRV(1030200, "OK");
    }

    // 修改语言的方法
    changeLanguage = (language) => {
        // 首先检查语言是否是一个字符串，并且在userInfo中的language数组中存在
        if (typeof language !== 'string' || !this.state.userInfo.languageList.includes(language)) {
            return new CMRV(1030301);
        }
        this.setState(prevState => ({
            ...prevState,
            userInfo: {
                ...prevState.userInfo,
                option: {
                    ...prevState.userInfo.option,
                    language: language
                }
            }
        }));
        return new CMRV(1030300, "OK");
    }

    // 修改主题的方法
    changeTheme = (theme) => {
        // 首先检查主题是否是一个字符串，并且在userInfo中的theme数组中存在
        if (typeof theme !== 'string' || !this.state.userInfo.themeList.includes(theme)) {
            return new CMRV(1030401);
        }
        this.setState(prevState => ({
            ...prevState,
            userInfo: {
                ...prevState.userInfo,
                option: {
                    ...prevState.userInfo.option,
                    theme: theme
                }
            }
        }));
        return new CMRV(1030400, "OK");
    }

    // 修改头像的方法
    changeAvatar = (avatar) => {
        // 首先检查头像是否是一个字符串，并且在userInfo中的avatar数组中存在
        if (typeof avatar !== 'string' || !this.state.userInfo.avatarList.includes(avatar)) {
            return new CMRV(1030501);
        }
        this.setState(prevState => ({
            ...prevState,
            userInfo: {
                ...prevState.userInfo,
                option: {
                    ...prevState.userInfo.option,
                    avatar: avatar
                }
            }
        }));
        return new CMRV(1030500, "OK");
    }

    render() {
        return (
            <UserInfoContext.Provider value={{
                ...this.state,
                changeUsername: this.changeUsername,
                changeOtherInfo: this.changeOtherInfo,
                changeLanguage: this.changeLanguage,
                changeTheme: this.changeTheme,
                changeAvatar: this.changeAvatar,
            }}>
                {this.props.children}
            </UserInfoContext.Provider>
        );
    }
}

export { UserInfoProvider, UserInfoContext };