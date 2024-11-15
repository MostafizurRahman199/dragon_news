import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayouts from "../layouts/HomeLayouts";
import CategoryNews from "../pages/CategoryNews";

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
        path:"/news",
        element:<h1>News</h1>,
    },
    {
        path:"/auth",
        element:<h1>Auth</h1>,
    },
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
]);

export default router;