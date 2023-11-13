import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Category from "../../pages/Category/Category/Category";
import News from "../../pages/News/News/News";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Category></Category>
            },
            {
                path:'/news/:id',
                element:<News></News>
            },
            {
                path:'*',
                element:<h1>Page Not Found.........</h1>
            }
        ]
    }

])