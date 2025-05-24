import React from 'react';
import Error from './Error';
import Home from './Home';
import { Link } from 'react-router';

const Contact = () => {
    return (
        <div>
           <Error></Error>
           <div className=' text-center'>
            
                <Link to={`/`}>
                                       <button  className='my-5   text-white bg-green-600 text-center p-2 rounded'>  Back to home page</button>

                </Link>
           </div>
        </div>
    );
};

export default Contact;