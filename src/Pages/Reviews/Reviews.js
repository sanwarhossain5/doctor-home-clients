import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

import ReviewDetails from '../Reviews/ReviewDetails';

const Reviews = () => {
    useTitle('Reviews')
    const [reviews, setReviews] = useState([])
    // const { _id } = useLoaderData()

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>

            <div className=' max-w-screen-xl mx-auto'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Service Id</th>
                                <th>Service Name</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>review</th>
                                

                            </tr>

                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ReviewDetails
                                    key={review._id}
                                    review={review}
                                ></ReviewDetails>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Reviews;