import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HomeDetails = ({ service }) => {
    const { title, picture, _id,  price, description } = service
    return (
        <div>
            <div className="card w-96  bg-base-100 shadow-xl mt-20">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={picture}>
                            <img className=' h-72 w-full' src={picture} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <div className=" card-actions justify-end">
                        <p>
                            {
                                description.length > 100 ?
                                    <>
                                        <p>{description.slice(0, 100) + '...'} </p>
                                        <Link to={`/services/${_id}`}>
                                            <button className='btn btn-sm btn-outline btn-info mt-2'> View Details</button>
                                        </Link>
                                    </>
                                    :
                                    <p>{description}</p>
                            }
                        </p>
                        <Link to={`/reviews/${_id}`}>
                            <button className="btn btn-outline btn-warning">Add Review</button>
                        </Link>
                    </div>
                    <div className="card-actions justify-end">

                        <p><span className='font-bold text-blue-600 '>Price:</span> {price}</p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;