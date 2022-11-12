import Main from "../../Layout/Main"
import AddService from "../../Pages/AddService/AddService"
import Blogs from "../../Pages/Blogs/Blogs"
import Home from "../../Pages/Home/Home/Home"
import Service from "../../Pages/Home/Service/Service"
import Login from "../../Pages/Login/Login"
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails"
import SignUp from "../../Pages/SignUp/SignUp"

const { createBrowserRouter } = require("react-router-dom")

const router = createBrowserRouter([
     {
           path: '/',
           element: <Main></Main>,
           children: [
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path: '/service',
              element: <Service></Service>
            },
            {
              path: '/service/:id',
              element: <ServiceDetails></ServiceDetails>,
              loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`)

            },
            {
               path: '/addService',
               element: <AddService></AddService>
            },
            
            {
              path: '/blog',
              element: <Blogs></Blogs>
            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/signup',
              element: <SignUp></SignUp>
            },
           ]
     }
])

export default router