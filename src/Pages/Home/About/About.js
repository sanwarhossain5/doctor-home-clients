import React from 'react';
import doctor from '../../../assets/image/doctor.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mt-10">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2'>
          <img  src={doctor} alt= ' ' className=" rounded-lg shadow-2xl" />
    </div>
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="py-6">The first person to document a surgery was the 6th century BC Indian physician-surgeon, Sushruta. He specialized in cosmetic plastic surgery and even documented an open rhinoplasty procedure.[3] His magnum opus Suśruta-saṃhitā is one of the most important surviving ancient treatises on medicine and is considered a foundational text of both Ayurveda and surgery. The treatise addresses all aspects of general medicine, but the translator G. D. Singhal dubbed Sushruta "the father of surgical intervention" on account of the extraordinarily accurate and detailed accounts of surgery to be found in the work.[4]

After the eventual decline of the Sushruta School of Medicine in India, surgery was largely ignored until the Islamic Golden Age surgeon Al-Zahrawi (936-1013) re-established surgery as an effective medical practice. He is considered the greatest medieval surgeon to have appeared from the Islamic World, and has also been described as the father of surgery.[5] His greatest contribution to medicine is the Kitab al-Tasrif, a thirty-volume encyclopedia of medical practices.[6] He was the first physician to describe an ectopic pregnancy, and the first physician to identify the hereditary nature of haemophilia.
      </p>
      
    </div>
  </div>
</div>
  );
};

export default About;