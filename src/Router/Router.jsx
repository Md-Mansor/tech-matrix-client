import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Log from "../Pages/Log/Log";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Layout/Dashboard/Cart/Cart";
import MyProduct from "../Layout/Dashboard/MyProduct/MyProduct";
import MyProfile from "../Layout/Dashboard/MyProfile/MyProfile";
import Users from "../Layout/Dashboard/Users/Users";
import Statistics from "../Layout/Dashboard/Statistics/Statistics";
import Coupons from "../Layout/Dashboard/Coupons/Coupons";
import Review from "../Layout/Dashboard/Review/Review";
import Report from "../Layout/Dashboard/Report/Report";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "product",
                element: <Product></Product>
            },
            {
                path: "login",
                element: <Log></Log>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "profile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "add",
                element: <Cart></Cart>
            },
            {
                path: "product",
                element: <MyProduct></MyProduct>
            },
            {
                path: "users",
                element: <Users></Users>
            },
            {
                path: "statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "coupons",
                element: <Coupons></Coupons>
            },
            {
                path: "review",
                element: <Review></Review>
            },
            {
                path: "report",
                element: <Report></Report>
            }
        ]
    }
]);