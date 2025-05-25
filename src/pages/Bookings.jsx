
import React, { useEffect, useState } from 'react';

import LawyerCard from '../Component/LawyerCard';
import {  getFavorite, removeFavorite } from '../utilis';
import BookingChart from './BookingChart';
import { Slide, toast } from 'react-toastify';
import Wrong from '../Component/Wrong';


const Bookings = () => {
      
     const [displayLawyers, setDisplayLawyers] = useState([])
     useEffect(()=>{
        const saveLawyer = getFavorite()
        setDisplayLawyers(saveLawyer)
        
     },[])
     console.log(displayLawyers)
   
        const handleDelete = id =>{
           console.log(id)
           removeFavorite(id)
           setDisplayLawyers(getFavorite())
             
           toast.success('Appointment Cancel', {
          position: "top-right",
          autoClose: 4000,
          theme: "light",
          transition: Slide,
        });
          }
  
    return (
           <div className='py-12'>
            <Wrong></Wrong>
              <BookingChart displayLawyers={displayLawyers}/>
             
              <div className='flex flex-col gap-15'>
                <div className='text-center my-4 pb-4'>
               <h1 className='font-extrabold text-4xl text-[#0F0F0F]'>My Today Appointments</h1>
            <p className='text-base mt-2'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
             </div>

            {displayLawyers.map(lawyer=>(
                

                <div>


         <div className='p-5 border border-gray-200 rounded-2xl shadow-l'>
                <h3 className='font-bold text-xl pb-2'>{lawyer.name}</h3>
                <div className='flex justify-between pb-3'>
                  <p className='font-medium text-lg text-[#14141460]'>{lawyer.speciality}</p>
                  <p  className='font-medium text-lg text-[#14141460]'>{lawyer.consultation}</p>
                </div>
                     <div className='border-1 border-dashed mb-4 border-gray-200 w-full mx-auto'>
        </div>
                <button onClick={() => handleDelete(lawyer.id)} className=' rounded-2xl text-lg font-semibold p-1 w-full border border-[#FF0000] text-center text-[#ff0000] '>Cancel Appointment</button>
                

         </div>



                  </div>


               
                 
            ))}
             

            </div>

           </div>
    )
}

export default Bookings;









