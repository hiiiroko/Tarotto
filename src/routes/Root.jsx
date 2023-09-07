// Root.jsx

import { useState } from 'react';

import {
    Outlet,
    NavLink,
} from "react-router-dom";

// toDelete
function tabStyle({ isActive }) {
    return isActive ? '' : '';
}

import "./Root.scss"
import "./BASE.scss"

export default function Root() {

    // 开发者模式开关挂载于window对象，通过控制台调用window.toggleDev();
    const [dev, setDev] = useState(false);
    const toggleDev = () => setDev((prevDev) => !prevDev);
    window.dev = dev;
    window.toggleDev = toggleDev;

    return (
        <div className={!window.dev ? 'root' : 'root--dev'}>
            <NavLink
                className={tabStyle}
                to="/divination"
            >
                占卜
            </NavLink>

            <NavLink
                className={tabStyle}
                to="/encyclopedia"
            >
                百科
            </NavLink>

            <NavLink
                className={tabStyle}
                to="/shop"
            >
                商店
            </NavLink>

            <NavLink
                className={tabStyle}
                to="/settings"
            >
                设置
            </NavLink>

            <NavLink
                className={tabStyle}
                to="/chat"
            >
                对话
            </NavLink>

            <NavLink
                className={tabStyle}
                to="/statistic/divination"
            >
                占卜数据
            </NavLink>

            <NavLink
                className={tabStyle}
                to="/statistic/item"
            >
                物品数据
            </NavLink>

            <NavLink
                className={tabStyle}
                to="/statistic/user"
            >
                用户数据
            </NavLink>

            <Outlet />
        </div>
    )
}
