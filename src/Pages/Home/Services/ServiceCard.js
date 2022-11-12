import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
  const {picture , _id, price, title, description} = service
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl mt-4 mb-10">

<PhotoProvider>
      <PhotoView src={picture}>
        <img className='h-96 ' src={picture} alt="" />
      </PhotoView>
    </PhotoProvider>

  {/* <figure><img className='h-96' src={picture} alt="Shoes" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h4 className='text-lg'>Price: {price}</h4>
    <p>{description.slice(0 , 100) }...</p>
    <Link to={`/service/${_id}`}>View Details</Link>
  </div>
</div>
  );
};

export default ServiceCard;