import React from 'react';
import { Link } from 'react-router-dom';

const AllCard = ({service}) => {
  const {picture , _id, price, title, description} = service
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl mt-6">
  <figure><img className='h-96' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h4 className='text-lg'>Price: {price}</h4>
    <p>{description}</p>
    {/* <Link>View Details</Link> */}
    <Link to={`/service/${_id}`}>View Details</Link>
  </div>
</div>
  );
};

export default AllCard;