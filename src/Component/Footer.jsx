import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-primary-content mt-4 p-8">

        <div>
             <div className="flex pr-2  gap-2">
    <img className='w-8 h-8 rounded bg-white ' src="/src/assets/C002-assets/logo.png" alt="" />
        <h3 className='font-extrabold text-2xl'>Law.BD</h3>
  </div>
  {/* <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='font-medium text-lg'>
        <NavLink to='/' className={({isActive})=>isActive?'text-indigo-700 ':'text-green-500'} >Home</NavLink>
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
  </div> */}
        </div>

<div className='border-1 border-dashed border-gray-800 w-full mx-auto'>

</div>
  <nav>
    <div className=" grid grid-flow-col gap-4">
     <a className='bg-blue-500 rounded-full p-1' href='https://web.facebook.com/mdsamim.hossain.526'>
        <svg 
          xmlns="https://img.icons8.com/?size=120&id=rjOvx0oPISOf&format=png"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
     <a className='w-8 h-8 bg-white rounded-full ' href='https://github.com/'>
      <img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png" alt="x" />
      </a>
     <a className='w-8 h-8 bg-white rounded-full ' href='https://www.youtube.com/'>
      <img src="https://img.icons8.com/?size=96&id=19318&format=png" alt="youtube" />
      </a>
     

     
    </div>
  </nav>
</footer>
    );
};

export default Footer;