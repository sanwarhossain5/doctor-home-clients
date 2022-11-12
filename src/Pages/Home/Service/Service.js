import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import AllCard from './AllCard';

const Service = () => {
  const [card, setCard] = useState([])
     useEffect( () =>{
            fetch('http://localhost:5000/service')
            .then(res =>res.json())
            .then(data => setCard(data))
     } , [])
  return (
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             {
               card.map(service => <AllCard
               key={service._id}
               service={service}
               ></AllCard>)
             }
    </div>
  );
};

export default Service;