import {createBrowserRouter} from "react-router";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import OtherLayout from "../components/otherlayout/OtherLayout.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Basket from "../pages/basket/Basket.jsx";
import Wishlist from "../pages/wishlist/Wishlist.jsx";
import Notfound from "../pages/notfound/Notfound.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home
            }
        ]
    },
    {
        path: '/admin',
        Component: OtherLayout,
        children: [
            {
                path: '/admin',
                Component: Admin
            }
        ]
    },
    {
        path: '/basket',
        Component: OtherLayout,
        children: [
            {
                path: '/basket',
                Component: Basket
            }
        ]
    },
    {
        path: '/wishlist',
        Component: OtherLayout,
        children: [
            {
                path: '/wishlist',
                Component: Wishlist
            }
        ]
    },
    {
        path: '*',
        Component: Notfound
    }
])
