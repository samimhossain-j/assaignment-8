import React from 'react';
import Banner from '../Component/Banner';
import LawyerContainer from './LawyerContainer';
import { useLoaderData } from 'react-router';



const Home = () => {
   const data = useLoaderData()
   console.log(data)
    return (
        <div>
            
                     <Banner></Banner>
                  
                    <LawyerContainer lawyer={data}/>
                   
        </div>
    );
};

export default Home;