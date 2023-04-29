import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import { FaNewspaper } from "react-icons/fa";
import NewsCard from "../Pages/Home/NewsCard/NewsCard";
import NewsLayout from "../Layout/NewsLayout";
import LoginLayout from "../Layout/LoginLayout";
import News from "../Pages/Home/Home/News/News";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Login/Register";


const router = createBrowserRouter(
    [{
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
    ]
)

export default router