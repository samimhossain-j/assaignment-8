import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
       <div className="w-10/12 mx-auto navbar bg-base-100 pt-3">
  <div className="navbar-start flex gap-2">
    <img className='w-10 h-10' src="/src/assets/C002-assets/logo.png" alt="" />
        <h3 className='font-extrabold text-2xl'>Law.BD</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='font-medium text-lg'>
        <NavLink to='/' className={({isActive})=>isActive?'text-indigo-700 ':''} >Home</NavLink>
        </li>
      <li className='font-medium text-lg'>
        <NavLink to='/Bookings' className={({isActive})=>isActive?'text-indigo-700':'text-black'}>My-Bookings</NavLink>
        </li>
      <li className='font-medium text-lg'>
        <NavLink to='/Blogs' className={({isActive})=>isActive?'text-indigo-700':'text-black'}> Blogs</NavLink>
        </li>
      <li className='font-medium text-lg'>
        <NavLink to='/Contact' className={({isActive})=>isActive?'text-indigo-700':'text-black'}>Contact Us</NavLink>
        </li>
   
    
    </ul>
  </div>
  <div className="navbar-end">
    <a className="bg-[#0EA106] text-center rounded-3xl text-white p-2">Contact Now</a>
  </div>
</div>
    );
};

export default Navbar;