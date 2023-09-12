// DisplayUserInfoContext.jsx

import React, { useContext } from 'react';
import { UserInfoContext } from '../contexts/UserInfoContext';

function DisplayUserInfoContext() {
    const {
        userInfo,
        changeUsername,
        changeOtherInfo,
        changeLanguage,
        changeTheme,
        changeAvatar
    } = useContext(UserInfoContext);

    const [username, setUsername] = React.useState('');
    const [otherInfo, setOtherInfo] = React.useState('');
    const [language, setLanguage] = React.useState(userInfo.option.languageList);
    const [theme, setTheme] = React.useState(userInfo.option.theme);
    const [avatar, setAvatar] = React.useState(userInfo.option.avatar);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleOtherInfoChange = (event) => {
        setOtherInfo(event.target.value);
    }

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    }

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    }

    const handleAvatarChange = (event) => {
        setAvatar(event.target.value);
    }

    const handleChangeUsername = () => {
        changeUsername(username);
        setUsername('');
    }

    const handleChangeOtherInfo = () => {
        changeOtherInfo(otherInfo);
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
                <input type="text" value={username} onChange={handleUsernameChange} placeholder="请输入用户名" />
                <button onClick={handleChangeUsername}>修改用户名</button>
                <textarea value={otherInfo} onChange={handleOtherInfoChange} placeholder="请输入其他信息" />
                <button onClick={handleChangeOtherInfo}>修改其他信息</button>
                <select value={language} onChange={handleLanguageChange}>
                    {/* 遍历userInfo中的language数组，为每个选项创建一个选项元素 */}
                    {userInfo.languageList.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                    ))}
                </select>
                <button onClick={() => changeLanguage(language)}>修改语言</button>
                <select value={theme} onChange={handleThemeChange}>
                    {/* 遍历userInfo中的theme数组，为每个选项创建一个选项元素 */}
                    {userInfo.themeList.map(thm => (
                        <option key={thm} value={thm}>{thm}</option>
                    ))}
                </select>
                <button onClick={() => changeTheme(theme)}>修改主题</button>
                <select value={avatar} onChange={handleAvatarChange}>
                    {/* 遍历userInfo中的avatar数组，为每个选项创建一个选项元素 */}
                    {userInfo.avatarList.map(avt => (
                        <option key={avt} value={avt}>{avt}</option>
                    ))}
                </select>
                <button onClick={() => changeAvatar(avatar)}>修改头像</button>
            </div>
        </div>
    );
}

export default DisplayUserInfoContext;
