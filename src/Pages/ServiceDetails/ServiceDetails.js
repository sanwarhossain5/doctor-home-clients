import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
 const service = useLoaderData()
  
  return (
    <div className='grid lg:grid-cols-2'>
      <div>

  <div className="card card-compact w-full bg-base-100 shadow-xl mt-4 mb-10">
  <figure><img className='h-96' src={service.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{service.title}</h2>
    <h4 className='text-lg'>Price: {service.price}</h4>
    <p>{service.description }</p>
    </div>
</div>

    </div>

    <div className='text-center'>
   <h2>hello</h2>
    </div>
    </div>
    
  );
};

export default ServiceDetails;