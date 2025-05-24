import React from 'react';

const Error = () => {
    return (
        <div>

            <div className='text-center'>
                <img className='w-1/3 h-1/3 mx-auto ' src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk=" alt="" />
                <h2 className='text-red-300 font-bold text-3xl'>404-Page Not Found</h2>
                <p>Oops! The page you are looking for doesn't exist.</p>
            </div>
            {/* <Navbar></Navbar> */}
        </div>
    );
};

export default Error;