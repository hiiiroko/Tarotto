// DisplayUserInfoContext.jsx

import React, { useContext } from 'react';
// 导入UserInfoContext，以便在组件中使用它的值和方法
import { UserInfoContext } from '../contexts/UserInfoContext';

function DisplayUserInfoContext() {
    // 使用useContext钩子来获取UserInfoContext的值和方法
    const { userInfo, changeUsername, changeOtherInfo, changeLanguage, changeTheme, changeAvatar } = useContext(UserInfoContext);

    // 创建一个本地状态，用于存放用户输入的用户名
    const [username, setUsername] = React.useState('');

    // 创建一个本地状态，用于存放用户输入的其他信息
    const [otherInfo, setOtherInfo] = React.useState('');

    // 创建一个本地状态，用于存放用户选择的语言
    const [language, setLanguage] = React.useState(userInfo.option.language);

    // 创建一个本地状态，用于存放用户选择的主题
    const [theme, setTheme] = React.useState(userInfo.option.theme);

    // 创建一个本地状态，用于存放用户选择的头像
    const [avatar, setAvatar] = React.useState(userInfo.option.avatar);

    // 创建一个处理函数，用于当用户输入用户名时更新username状态
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    // 创建一个处理函数，用于当用户输入其他信息时更新otherInfo状态
    const handleOtherInfoChange = (event) => {
        setOtherInfo(event.target.value);
    }

    // 创建一个处理函数，用于当用户选择语言时更新language状态
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    }

    // 创建一个处理函数，用于当用户选择主题时更新theme状态
    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    }

    // 创建一个处理函数，用于当用户选择头像时更新avatar状态
    const handleAvatarChange = (event) => {
        setAvatar(event.target.value);
    }

    // 创建一个处理函数，用于当用户点击修改用户名的按钮时调用changeUsername方法
    const handleChangeUsername = () => {
        // 调用changeUsername方法，传入username作为参数
        changeUsername(username);
        // 清空username状态
        setUsername('');
    }

    // 创建一个处理函数，用于当用户点击修改其他信息的按钮时调用changeOtherInfo方法
    const handleChangeOtherInfo = () => {
        // 调用changeOtherInfo方法，传入otherInfo作为参数
        changeOtherInfo(otherInfo);
        // 清空otherInfo状态
        setOtherInfo('');
    }

    return (
        <div>
            {/* 修改表格，显示所有userInfo中的字段 */}
            <table>
                <thead>
                    <tr>
                        <th>字段</th>
                        <th>值</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 遍历userInfo中的键值对，为每个字段创建一个表格行 */}
                    {Object.entries(userInfo).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{JSON.stringify(value)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* 在表格下添加一些元素，让用户可以输入或选择参数，并调用相应的方法 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* 添加一个输入框，让用户可以输入用户名 */}
                <input type="text" value={username} onChange={handleUsernameChange} placeholder="请输入用户名" />
                {/* 添加一个按钮，让用户可以修改用户名 */}
                <button onClick={handleChangeUsername}>修改用户名</button>
                {/* 添加一个输入区域，让用户可以输入其他信息 */}
                <textarea value={otherInfo} onChange={handleOtherInfoChange} placeholder="请输入其他信息" />
                {/* 添加一个按钮，让用户可以修改其他信息 */}
                <button onClick={handleChangeOtherInfo}>修改其他信息</button>
                {/* 添加一个选择框，让用户可以选择语言 */}
                <select value={language} onChange={handleLanguageChange}>
                    {/* 遍历userInfo中的language数组，为每个选项创建一个选项元素 */}
                    {userInfo.language.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                    ))}
                </select>
                {/* 添加一个按钮，让用户可以修改语言 */}
                <button onClick={() => changeLanguage(language)}>修改语言</button>
                {/* 添加一个选择框，让用户可以选择主题 */}
                <select value={theme} onChange={handleThemeChange}>
                    {/* 遍历userInfo中的theme数组，为每个选项创建一个选项元素 */}
                    {userInfo.theme.map(thm => (
                        <option key={thm} value={thm}>{thm}</option>
                    ))}
                </select>
                {/* 添加一个按钮，让用户可以修改主题 */}
                <button onClick={() => changeTheme(theme)}>修改主题</button>
                {/* 添加一个选择框，让用户可以选择头像 */}
                <select value={avatar} onChange={handleAvatarChange}>
                    {/* 遍历userInfo中的avatar数组，为每个选项创建一个选项元素 */}
                    {userInfo.avatar.map(avt => (
                        <option key={avt} value={avt}>{avt}</option>
                    ))}
                </select>
                {/* 添加一个按钮，让用户可以修改头像 */}
                <button onClick={() => changeAvatar(avatar)}>修改头像</button>
            </div>
        </div>
    );
}

export default DisplayUserInfoContext;
