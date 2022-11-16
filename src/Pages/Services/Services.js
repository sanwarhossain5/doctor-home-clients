import React, { useEffect, useState } from 'react';

import About from '../About/About';
import Bannar from '../Bannar/Bannar';

import ServiceCard from './ServiceCard';

const Services = () => {
    
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://doctor-home-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=' max-w-screen-xl mx-auto'>
            <Bannar></Bannar>
            <About></About>
            
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>

                    )
                }
            </div>
            
        </div>
    );
};

export default Services;