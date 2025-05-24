import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Count = () => {
     const [counterOn, setCounterOn] = useState(false);
    
    return (
    //   <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={() =>setCounterOn(false)}>
          <div>
          
                   {/* counter div */}
           <div className='m-20  w-10/12'>
            <div className='text-center'>
              <h2 className='font-ExtraBold text-3xl '>We Provide Best Law Services</h2>
              <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-4 w-full mt-8 gap-3'>
              <div className='p-10 rounded-2xl bg-slate-200'>
                  <img src="https://i.ibb.co/wZ52nyFW/success-doctor.png" alt="" />
                  <h1 className='font-extrabold text-4xl'> 
                     <CountUp start={0} end={199} duration={5} delay={0}></CountUp>+
                  </h1>
                  <p>Total Lawyer</p>
              </div>
              <div className='p-10 rounded-2xl bg-slate-200'>
                  <img src="https://i.ibb.co/BVZS73TB/success-review.png" alt="" />
                     <h1 className='font-extrabold text-4xl'> 
                     <CountUp start={0} end={467} duration={5} delay={0}></CountUp>+
                  </h1>
                  <p>Total Reviews</p>
              </div>
              <div className='p-10 rounded-2xl bg-slate-200'>
                  <img src="https://i.ibb.co/VWRCZ1wX/success-patients.png" alt="" />
                   <h1 className='font-extrabold text-4xl'> 
                    <CountUp start={0} end={1900} duration={5} delay={0}></CountUp>+
                  </h1>
                  <p>Cases Initiated</p>
              </div>
              <div className='p-10 rounded-2xl bg-slate-200'>
                  <img src="https://i.ibb.co/DHMnKNdT/success-staffs.png" alt="" />

                     <h1 className='font-extrabold text-4xl'> 
                                            <CountUp start={0} end={300} duration={5} delay={0}></CountUp>+

                  </h1>

                  <p>Total Stuffs</p>
              </div>

            </div>
           </div>
        </div>
    //   </ScrollTrigger>
    );
};

export default Count;