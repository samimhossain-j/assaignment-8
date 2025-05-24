import React from 'react';
import { Link } from 'react-router';
import { removeFavorite } from '../utilis';

const LawyerCard = ({law, }) => {
    // console.log(law)
    const { name, image, speciality, experience, licenseNumber,id } =law || {}
    return ( 
          
        

      <div className="card bg-base-100  shadow-sm">
       
  <div className='flex p-6 gap-6'>
    <figure className='basis-1/3'>
    <img className='w-40 h-40   rounded-xl'
      src={image}
      alt="Shoes" />
  </figure>

  <div className="basis-2/3 ">
    <div className='flex gap-2'>
        <p className='text-center p-2 text-[#09982F] rounded-3xl bg-[#09982F10] font-medium text-xs'>Available</p>
        <p className='text-center p-2 text-[#176AE5] rounded-3xl bg-[#176AE510] font-medium text-xs'>{experience}</p>
    </div>
    <h2 className="font-extrabold text-2xl text-[#0F0F0F]">{name}</h2>
    <p className='font-medium text-base text-[#0F0F0F70]'>{speciality}</p>
    <div className='border-1 border-dashed border-gray-300 w-full mx-auto'>

</div>
    <p className='font-medium text-base mt-2 text-[#0F0F0F70]'>{licenseNumber}</p>
   <div className="card-actions justify-end mt-3">
     
     <Link className='w-full' to={`/lawyer-details/${id}`}>
     <button className="w-full text-[#176AE5] border border-[#176AE5] text-center p-3 rounded-3xl">View Details</button>
     </Link>
      
      
    </div>
    
  </div>
  </div>

</div>
    );
};

export default LawyerCard;