import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Category from "../../pages/Category/Category/Category";
import News from "../../pages/News/News/News";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import PrivateRoutes from './../PrivateRoutes/PrivateRoutes';
import TermAndCondition from "../../pages/Login/TermAndCondition/TermAndCondition";
import Profile from "../../pages/Others/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://dragon-news-server-g7ghdkt5k-mainul-islams-projects-5918684d.vercel.app/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://dragon-news-server-g7ghdkt5k-mainul-islams-projects-5918684d.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://dragon-news-server-g7ghdkt5k-mainul-islams-projects-5918684d.vercel.app/news/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <TermAndCondition></TermAndCondition>
            },
            {
                path: 'profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]
    }

]);