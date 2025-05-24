import React, { useEffect, useState } from 'react';

import LawyerCard from '../Component/LawyerCard';
import { getFavorite, removeFavorite } from '../utilis';
import Bookings from '../pages/Bookings';



const Favorite = () => {
     const [displayLawyers, setDisplayLawyers] = useState([])
     useEffect(()=>{
        const saveLawyer = getFavorite()
        setDisplayLawyers(saveLawyer)
     },[])
     const handleDelete = id =>{
      console.log(id)
      removeFavorite(id)
      setDisplayLawyers(getFavorite())
     }
    
    return (
           <div className='py-12'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-6'>

                {displayLawyers.map(law=> (<Bookings key={law.id}  law={law} handleDelete={handleDelete}></Bookings>) )
                }
             

            </div>

           </div>
    )
}

export default Favorite;