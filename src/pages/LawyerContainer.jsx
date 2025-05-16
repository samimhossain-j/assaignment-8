import React, { useState } from 'react';
import LawyerCard from '../Component/LawyerCard';
import { useEffect } from 'react';

const LawyerContainer = ({lawyer}) => {
    const [displayLawyers, setDisplayLawyers] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect( () => {
       if(showAll){
        setDisplayLawyers(lawyer)
       }
       else{
         setDisplayLawyers(lawyer.slice(0, 6))
       }
    }, [lawyer, showAll]

    )
    return (
        <div className='py-12'>
             <div className='text-center p-3 mb-3'>
            <h2 className='font-extrabold text-3xl text-[#0F0F0F] mb-3'>Our Best Lawyers</h2>
            <p className='text-base text-[#0F0F0F70]'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-6'>

                {displayLawyers.map(law=> (<LawyerCard key={law.id}  law={law}/>))
                }
              <div className='text-center'>
                <button onClick={() =>setShowAll(prv=>!prv)} className='font-medium text-center text-xl text-white rounded-4xl bg-[#0EA106] p-4'>Show All Lawyers</button>
              </div>

            </div>
           
            
        </div>
    );
};

export default LawyerContainer;