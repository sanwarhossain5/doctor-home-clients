import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
  useTitle('Home')
  return (
    <div>
        <Banner></Banner>
        <Services></Services>
        <Link className='btn-primary text-center p-4 m-10 rounded-xl' to='/service'>See All</Link>
        <About></About>
        
       
    </div>
  );
};

export default Home;