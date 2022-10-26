import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Blogs from "../../Pages/Shared/Blogs/Blogs";
import Category from "../../Pages/Shared/Category/Category";
import Courses from "../../Pages/Shared/Courses/Courses";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
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
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            }
        ]
    }
]);