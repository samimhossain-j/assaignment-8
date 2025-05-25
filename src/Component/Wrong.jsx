import React from 'react';
import { useParams } from 'react-router';

const Wrong = () => {
    
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            not founds
        </div>
    );
};

export default Wrong;