import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Shared/Category/Category";
import Courses from "../../Pages/Shared/Courses/Courses";
import PrivateRoute from "../PrivateRouter/PrivateRoute";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import UndefinedRoute from "../../Pages/UndefinedRoute/UndefinedRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('https://tutor-me-server.vercel.app/courses-categories')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://tutor-me-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/course-details/:id',
                element: <PrivateRoute> <CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tutor-me-server.vercel.app/course-details/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <UndefinedRoute></UndefinedRoute>
    }

]);