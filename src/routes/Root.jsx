// Root.jsx

import { useState, useContext } from 'react';
import {
    Outlet,
    NavLink,
} from "react-router-dom";

import classNames from 'classnames';
import { GiCrystalBall, GiSpellBook, GiAmethyst, GiAbstract044, GiChatBubble } from "react-icons/gi";

import { UserInfoContext } from '../contexts/UserInfoContext';
import "./Root.scss"
import "./BASE.scss"

function tabStyle({ isActive }) {
    return isActive ? 'tab tab--active' : 'tab';
}

export default function Root() {
    const UIC = useContext(UserInfoContext);

    const toggleDev = () => {
        UIC.changeOtherInfo(UIC.userInfo.otherInfo === "user" ? "dev" : "user");
    };
    window.toggleDev = toggleDev;

    const frameClass = classNames('frame');

    return (
        <div className={frameClass}>
            <div className='nav'>
                <NavLink className={tabStyle} to="/divination">
                    <GiCrystalBall />占卜
                </NavLink>
                <NavLink className={tabStyle} to="/encyclopedia">
                    <GiSpellBook />百科
                </NavLink>
                {/* <NavLink className={tabStyle} to="/shop">
                    <GiAmethyst />商店
                </NavLink>
                <NavLink className={tabStyle} to="/settings">
                    <GiAbstract044 />设置
                </NavLink>
                <NavLink className={tabStyle} to="/chat">
                    <GiChatBubble />对话
                </NavLink> */}

                {UIC.userInfo.otherInfo === "dev" && (
                    <>
                        <NavLink className={tabStyle} to="/statistic/divination">
                            占卜数据
                        </NavLink>
                        {/* <NavLink className={tabStyle} to="/statistic/item">
                            物品数据
                        </NavLink>
                        <NavLink className={tabStyle} to="/statistic/user">
                            用户数据
                        </NavLink> */}
                    </>
                )}

            </div>
            <Outlet />
        </div>
    )
}
