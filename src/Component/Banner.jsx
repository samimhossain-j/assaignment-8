import React from 'react';

const Banner = () => {
    return (
       
            <div className="hero w-full   mx-auto rounded-2xl p-8 "
  style={{
    backgroundImage:
      "url(https://i.ibb.co/HTKBzBsj/banner-img-1.png)",
    
  }}
>
  <div className="hero-overlay rounded-2xl "></div>
  <div className="hero-content text-neutral-content text-center max-w-2/3 ">
    <div className="">
      <h1 className="mb-5 text-3xl font-extrabold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
      <p className="mb-5 text-gray-500">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
     
    </div>
  </div>
</div>

    );
};

export default Banner;