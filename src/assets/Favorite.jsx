import React from 'react';
import { Outlet } from 'react-router';

const Favorite = () => {
    return (
        <>
        <div>
            <h1>More nested page</h1>
            <Outlet/>
        </div>
        </>
    )
}

export default Favorite;