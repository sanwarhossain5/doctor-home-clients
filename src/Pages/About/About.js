import React from 'react';
import doctor from '../../assets/image/doctor.jpg'

const About = () => {
    return (
        <div >
         
            <div className=' mt-20  flex flex-col  lg:flex-row '>
                <div className='lg:w-1/2 px-4'>
                    <img src={doctor} alt="" />
                </div>

                <div className='lg:w-1/2 flex justify-center items-center'>

                    <div>
                        <h1 className='text-center text-3xl lg:text-3xl text-orange-700 font-bold mb-10'>About Me</h1>
                        <p>The first person to document a surgery was the 6th century BC Indian physician-surgeon, Sushruta. He specialized in cosmetic plastic surgery and even documented an open rhinoplasty procedure.[3] His magnum opus Suśruta-saṃhitā is one of the most important surviving ancient treatises on medicine and is considered a foundational text of both Ayurveda and surgery. The treatise addresses all aspects of general medicine, but the translator G. D. Singhal dubbed Sushruta "the father of surgical intervention" on account of the extraordinarily accurate and detailed accounts of surgery to be found in the work.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;