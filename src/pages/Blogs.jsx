import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const data = useLoaderData()
    
    console.log(data)
    return (
        <div>
         
         <div className='text-center my-8 py-4'>
            <h1 className='font-bold py-2 text-4xl'>Blogs</h1>
            <p>Let's explore some basic concept that will make you a good developer</p>
         </div>
         
               <div className='flex flex-col  gap-15'>

            {data.map(lawyer=>(
                

                <div>


         <div className='p-5 bg-gray-200 border border-gray-300 rounded-2xl shadow-l'>
                <h3 className='font-bold text-xl pb-2'>{lawyer.question}</h3>
                              <div className='border-1 border-dashed mb-4 border-gray-300 w-full mx-auto'>
        </div>
                <p className='text-[#176AE5]'>Answer:</p>
               <h4>{lawyer.answer}</h4>
                     <div className='border-1 border-dashed mb-4 mt-3 border-gray-300 w-full mx-auto'>
        </div>
        <p className='text-gray-400'>Added at 2023-11-12</p>

         </div>



                  </div>


               
                 
            ))}
             

            </div>
        </div>
    );
};

export default Blogs;