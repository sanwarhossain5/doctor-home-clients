import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'


const AddReviews = () => {
    const { user } = useContext(AuthContext)
    const { _id, name } = useLoaderData()

    

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const Cname = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const text = form.text.value
        

        const review = {
            service: _id,
            serviceName: name,
            customer: Cname,
            email,
            text,
            photoURL
        }
        fetch('https://doctor-home-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.info('review placed successfully')
                    form.reset();

                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div>
            {
                user?.email ?
                    <>
                        <div className='w-1/2 mx-auto border rounded-lg p-5  bg-gray-100' >
                            <form onSubmit={handleSubmit} className="card-body  bg-slate-300 mb-3 rounded">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name='photoURL' defaultValue={user?.photoURL} placeholder="photoURL" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Text</span>
                                    </label>
                                    <input type="text-area" name='text' placeholder="Review" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" />

                                </div>
                            
                                <div className="form-control mt-6">
                                    <input className="btn bg-purple-400 border-none" type="submit" value="Add Review" />
                                </div>
                            </form>



                        </div>

                    </>
                    :
                    toast.warning(' Please login to add a review')
            }

        </div>
    );
};

export default AddReviews;