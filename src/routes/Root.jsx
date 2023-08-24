import {
    Outlet,
    NavLink,
} from "react-router-dom";

function tabStyle({ isActive }) {
    return isActive ? 'docnav-title  laytit-active' : 'docnav-title ';
}

export default function Root() {

    return (
        <div>
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
