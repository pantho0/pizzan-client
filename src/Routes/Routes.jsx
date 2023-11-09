import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Signup from "../Pages/Signup/Signup";
import AllFood from "../Pages/Food/AllFood";
import SingleFood from "../Pages/Food/SingleFood";
import Purchase from "../Pages/Purchase/Purchase";
import MyProfile from "../Pages/Profile/MyProfile";
import AddedFoods from "../Pages/Added Foods/AddedFoods";
import AddNewFood from "../Pages/Add New Food/AddNewFood";
import Orders from "../Pages/Orders/Orders";
import PrivateRoute from "../Private/PrivateRoute";
import UpdateFood from "../Pages/Added Foods/UpdateFood";

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
                element: <AllFood></AllFood>,
                loader: () => fetch("https://pizzan-server.vercel.app/api/v1/productcount")
            },
            {
                path: '/food/:id',
                element: <SingleFood></SingleFood>,
                loader : ({params}) => fetch(`https://pizzan-server.vercel.app/api/v1/foods/${params.id}`)
            },
            {
                path: '/food/purchase/:id',
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
                loader : ({params}) => fetch(`https://pizzan-server.vercel.app/api/v1/foods/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <UpdateFood></UpdateFood>,
            },
            {
                path: '/profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
                children:[
                    {
                        path: 'profile/addedfoods',
                        element: <AddedFoods></AddedFoods>
                    },
                    {
                        path: 'profile/addnewfoods',
                        element: <AddNewFood></AddNewFood>
                    },
                    {
                        path: 'profile/myorders',
                        element: <Orders></Orders>
                    },  
                ]
            }
        ]
        
    }
])

export default router;