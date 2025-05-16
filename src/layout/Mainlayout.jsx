import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';

import Footer from '../Component/Footer';
 

const Mainlayout = () => {
    return (
        <>
        <Navbar ></Navbar>
       
       <div className='w-10/12 mx-auto bg-white min-h-[calc(100vh-285px)]'>
         <Outlet></Outlet>
       </div>
        <Footer></Footer>
            
        </>
    );
};

export default Mainlayout;