
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blogs/Blogs"
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import AddReviews from "../Pages/Reviews/AddReviews";
import Reviews from "../Pages/Reviews/Reviews";
import Services from "../Pages/Services/Services";
import SingleService from "../Pages/Services/SingleService";

import SignUp from "../Pages/SignUp/SignUp";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute> ,


            },

            {
                path: '/services',
                element: <Services></Services>

            },
            {
                path: '/review',
                element: <Reviews></Reviews>,


            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddService></AddService></PrivateRoute> ,


            },

            {
                path: '/reviews/:id',
                element: <AddReviews></AddReviews>,
                loader: ({ params }) => fetch(`https://doctor-home-server.vercel.app/services/${params.id}`)

            },
            {
                path: '/services/:id',
                loader: async ({ params }) => {
                    return fetch(`https://doctor-home-server.vercel.app/services/${params.id}`)
                },
                element: <SingleService></SingleService>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])