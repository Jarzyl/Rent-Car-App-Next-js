import React from 'react';
import { FaCar } from 'react-icons/fa';
import { GiCarKey } from 'react-icons/gi';
import { FiPhoneCall } from 'react-icons/fi';

export default function Plan() {
  return (
    <>
    <section className='w-full pt-10 md:pt-20 flex h-full mb-6'>
    <div className='w-full justify-items-center text-center'>
    <hr className="w-1/2 mx-auto h-0.5 bg-white mb-3"></hr>
      <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-purple-600'>Plan your trip with us!</h1>
      <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-3 font-medium text-purple-600'>Exclusive sports car rental</h2>
      <div className='justify-center grid md:flex mt-6 md:mt-16 m-5 gap-10'>
      <div className='w-72 h-80 bg-gray-600 rounded-3xl font-medium pr-3 pl-3'>
      <p className='items-center'>
      <FaCar size={40} className='mx-auto mt-6 text-purple-800'/>
      </p>
      <h1 className='text-xl md:text-2xl lg:text-3xl mt-4 text-purple-800'>
      Choose a Car
      </h1>
      <h2 className='text-base mt-6 text-slate-900'>Browse our selection of cars and choose the one that fits your needs and preferences. Our inventory includes a variety of models from top brands to suit any occasion or trip.
      </h2>
      </div>
      <div className='w-72 h-80 bg-gray-600 rounded-3xl font-medium pr-3 pl-3'>
      <p className='items-center'>
      <FiPhoneCall size={40} className='mx-auto mt-6 text-purple-800'/>
      </p>
      <h1 className='text-xl md:text-2xl lg:text-3xl mt-4 text-purple-800'>
      Contact with us
      </h1>
      <h2 className='text-base mt-6 text-slate-900'>Get in touch with our team to reserve your car and discuss any questions or concerns you may have. We're here to help you make the best choice for your rental needs and ensure a smooth rental experience.
      </h2>
      </div>
      <div className='w-72 h-80 bg-gray-600 rounded-3xl font-medium pr-3 pl-3'>
      <p className='items-center'>
      <GiCarKey size={40} className='mx-auto mt-6 text-purple-800'/>
      </p>
      <h1 className='text-xl md:text-2xl lg:text-3xl mt-4 text-purple-800'>
      Take a ride!
      </h1>
      <h2 className='text-base mt-6 text-slate-900'>Once you've chosen your car and confirmed your reservation, it's time to hit the road! Whether you're driving for business or pleasure, we're here to help you get where you need to go.
      </h2>
      </div>
      </div>
      <hr id='3d' className="w-1/2 mx-auto h-0.5 bg-white"></hr>

    </div>
    </section>
    </>
  );
};
