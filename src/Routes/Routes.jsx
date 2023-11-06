import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Signup from "../Pages/Signup/Signup";
import AllFood from "../Pages/Food/AllFood";
import SingleFood from "../Pages/Food/SingleFood";
import Purchase from "../Pages/Purchase/Purchase";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                index : true,
                element:<Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/allfoods',
                element: <AllFood></AllFood>
            },
            {
                path: '/food/:id',
                element: <SingleFood></SingleFood>,
                loader : ({params}) => fetch(`http://localhost:5000/api/v1/foods/${params.id}`)
            },
            {
                path: '/food/purchase/:id',
                element: <Purchase></Purchase>,
                loader : ({params}) => fetch(`http://localhost:5000/api/v1/foods/${params.id}`)
            }
        ]
        
    }
])

export default router;