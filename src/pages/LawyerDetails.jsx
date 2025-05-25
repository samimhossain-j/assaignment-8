import React from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router';
import { addAppointment } from '../utilis';



const LawyerDetails = () => {
    

    const data = useLoaderData()
    const { id } = useParams()
    // console.log(id)



    const singleLawyer = data.find(lawyer => lawyer.id === parseInt(id))
    // console.log(singleLawyer)
    // console.log(data)
    console.log(singleLawyer)
    const { name, image, speciality, experience, licenseNumber, availability, consultation } = singleLawyer || {}
     
    const handleFavorite = () =>{
   

    
           addAppointment(singleLawyer)
          
        
    }
    return (



    <div>
        <div className="card bg-[#0F0F0F15]  text-center py-12 px-6  shadow-sm">
            <h2 className='font-extrabold text-2xl pb-1 text-[#141414]'>Lawyer’s Profile Details</h2>
            <p className='font-medium px-2 text-base text-[#14141470]'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>

        </div>
            <div className="card bg-base-100 my-12 shadow-sm">


            <div className='flex p-6 gap-6'>
                <figure className='basis-1/3 '>
                    <img className='w-55 h-55  rounded-xl'
                        src={image}
                        alt="Shoes" />
                </figure>

                <div className="basis-2/3  pt-8">

                    <p className='text-center w-1/3 p-2 text-[#176AE5] rounded-3xl bg-[#176AE510] font-medium text-xs'>{experience}</p>

                    <h2 className="font-extrabold text-2xl text-[#0F0F0F]">{name}</h2>
                    <div className='flex gap-5'>
                        <p className='font-medium text-base text-[#0F0F0F70]'>{speciality}</p>
                        <p className='font-medium text-base text-[#0F0F0F70]'>{licenseNumber}</p>
         
                    </div>
                    <p className=' text-base pt-2 text-[#14141470]'>Availability:
                                      {availability.length >= 3
  ? availability.slice(0, 3).map((s, i) => (
      <button key={i} className="bg-[#FFA00020]  border text-[#FFA000] border-[#FFA00010] text-center p-1 gap-1 rounded-2xl ">{s}</button>
    ))
  : null}
                    </p>
                    <p className='font-bold text-base pt-2 text-[#14141470]'>Consultation Fee: <span className='text-[#0EA106] text-base pl-2'>{consultation}</span></p> 
      

                    <div className="card-actions justify-end mt-3">




                    </div>

                </div>
            </div>

        </div>
          <div className="card bg-base-100 py-5 px-2  shadow-sm">
             <h4 className='text-center py-2 font-bold text-xl  '>Book an Appointment</h4>
             <div className='border-1 border-dashed border-gray-200 w-full mx-auto'>
        </div>
        <div className='flex justify-between py-3'>
            <h5 className='font-bold text-[#141414]'>Availability</h5>
            <p className='text-center p-2 font-medium rounded-3xl text-[#09982F] border border-b-emerald-500'>Lawyer Availability Today</p>
        </div>
       

           <div className='border-1 border-solid border-gray-200 w-full mx-auto'>
        </div>
         
            <div className='flex w-10/12 text-center gap-1 py-1 px-3 my-3  rounded-2xl bg-[#FFA00010]'>  
                     <span className='text-[#FFA000]     text-center' >!</span>
                <p className='text-[#FFA000]  text-base'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                </div>

                 <Link className='w-full' to={`/Bookings`}>
                 <button onClick={handleFavorite} className='bg-[#0EA106] m-7 text-white rounded-3xl p-2 text-center'>Book Appointment Now</button>
                 </Link>
        </div>

           



    </div>

    )
};

export default LawyerDetails;