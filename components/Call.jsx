import React from 'react';
import { MdPhoneCallback} from 'react-icons/md';

export default function Call() {
  return (
    <>
    <div className='w-full items-center text-center md:mt-16'>
    <div className='w-full grid md:flex text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gray-700 text-white h-32 md:h-36'>
    <h1 className='mx-auto mt-6 md:mt-12 font-medium'>
    Book a car by getting in touch with us
    </h1>
    <h2 className='font-medium flex mx-auto mt-3 md:mt-12 text-purple-600'>
      <MdPhoneCallback size={40} className='mx-auto mb-3 mr-5'/> 999-888-444
    </h2>
    </div>
    </div>
    </>
  )
}
