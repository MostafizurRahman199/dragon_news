import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Careers from "../pages/Careers";
import PrivateRouteProvider from "./PrivateRouteProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts />,
        children: [
          
            {
                path: "/",
                element: <Navigate to={"/category/01"}></Navigate>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews/>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
            
        ],
    },
    {
        path: "/news/:id",
        element: <PrivateRouteProvider><News/></PrivateRouteProvider>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    },
    {
        path:"/auth",
        element: <AuthLayout/>, 
        children: [
            {
                path: "/auth/login",
                element: <Login/>,
            },
            {
                path: "/auth/register",
                element: <Register/>,
            },
        ],
    },
    {
        path: "/profile",
        element: <PrivateRouteProvider><Profile/></PrivateRouteProvider>,
    },
    {
        path:"/about",
        element: <About/>,
    },
    {
        path :"/career",
        element: <Careers/>,
    },
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
]);

export default router;