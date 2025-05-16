import { createBrowserRouter } from "react-router";

import Favorite from "../assets/Favorite";
import Home from "../pages/Home";
import Mainlayout from "../layout/mainlayout";

import Bookings from "../pages/Bookings";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import LawyerDetails from "../pages/LawyerDetails";



export const router = createBrowserRouter([
  {
    path:'/',
    Component:Mainlayout,
    errorElement:<Error></Error>,
    children:[
        {
             path:'/',
            element:<Home/>,
            loader:() =>fetch('lawyers.json'),
        },
      {
        path:'/favorite',
        
        Component:Favorite,

        
      },
       {
    path:'/Bookings',
    element:<Bookings></Bookings>,
  },
      
  {
    path:'/Blogs',
    element:<Blogs></Blogs>,

  },
  
      
  {
    path:'/Contact',
    element:<Contact></Contact>,

  },
  {
    path:'/lawyer-details',
    element:<LawyerDetails></LawyerDetails>
  }
 

    ]
    
  }
 
])

 