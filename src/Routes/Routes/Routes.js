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
                loader: () => fetch('http://localhost:5000/courses-categories')
            },
            // {
            //     path: '/category-details/:id',
            //     element: <></>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`)
            // },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/course-details/:id',
                element: <PrivateRoute> <CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <UndefinedRoute></UndefinedRoute>
    }

]);