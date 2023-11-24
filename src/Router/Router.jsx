import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Log from "../Pages/Log/Log";
import Register from "../Pages/Register/Register";

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
                path: "/product",
                element: <Product></Product>
            },
            {
                path: "/login",
                element: <Log></Log>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);