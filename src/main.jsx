import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { DndContext } from '@dnd-kit/core';

import { DivinationInfoProvider } from './contexts/DivinationInfoContext';

import { ItemInfoProvider } from './contexts/ItemInfoContext';

import { UserInfoProvider } from './contexts/UserInfoContext';

import Root from "./routes/Root";

import ErrorPage from './routes/ErrorPage';

import Divination from './routes/Divination';

import Index from "./routes/Index";

import DisplayDivinationInfoContext from './displays/DivinationInfoDisplay';

import DisplayItemInfoContext from './displays/ItemInfoDisplay';

import DisplayUserInfoContext from './displays/UserInfoDisplay';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Index /> },
            {
                path: "divination",
                element:
                    <DivinationInfoProvider>
                        <Divination />
                    </DivinationInfoProvider>,

            },
            {
                path: "encyclopedia",
                element: <div>Encyclopedia</div>,
            },
            {
                path: "shop",
                element: <div>Shop</div>,
            },
            {
                path: "settings",
                element: <div>Settings</div>,
            },
            {
                path: "chat",
                element: <div>Chat</div>,
            },
            {
                path: "statistic/divination",
                element:
                    <DivinationInfoProvider>
                        <DisplayDivinationInfoContext />
                    </DivinationInfoProvider>,
            },
            {
                path: "statistic/item",
                element:
                    <ItemInfoProvider>
                        <DisplayItemInfoContext />
                    </ItemInfoProvider>,
            },
            {
                path: "statistic/user",
                element:
                    <UserInfoProvider>
                        <DisplayUserInfoContext />
                    </UserInfoProvider>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);