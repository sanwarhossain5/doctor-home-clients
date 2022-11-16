import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import Doctor from '../Doctor/Doctor';
import HomeDetails from './HomeDetails';

const Home = () => {
    useTitle('Home')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=' max-w-screen-xl mx-auto'>
            <Bannar></Bannar>
            <About></About>
            
              
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <HomeDetails
                        key={service._id}
                        service={service}
                    ></HomeDetails>

                    )
                }
            </div>
            <div className='text-center mt-20'>
                <Link to='/services'>  <button className='btn btn-primary mb-8'>See All</button></Link>
            </div>
            <Doctor></Doctor>
            
        </div>
    );
};

export default Home;