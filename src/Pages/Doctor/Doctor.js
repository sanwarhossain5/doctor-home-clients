import React from 'react';


const Doctor = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Public%20Opinion%20Research%201200x666.jpg?itok=Z9g0DOPe")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Doctor Hero</h1>
      <p className="mb-5">A doctor is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury. There are many specific areas in the field of medicine that students can study.</p>
      
    </div>
  </div>
</div>
  );
};

export default Doctor;