import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const UseCounterUp = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
      <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <div style={{
            width:'100%',
            background:'black',
            marginTop:'300px',
            color:'white',
            padding:'40px'
        }

        }>
           <h1>
                {counterOn &&  <CountUp start={0} end={100} duration={5} delay={0}></CountUp>}    
                +            
           </h1>
           <p>counter page</p>
        </div>
      </ScrollTrigger>
    );
};

export default UseCounterUp;