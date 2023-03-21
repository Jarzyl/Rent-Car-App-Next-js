import React from 'react';
import Link from 'next/link';

export default function Interested() {
  return (
    <>
    <div className='w-full items-center text-center'>
    <div className='w-full grid text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase bg-gray-700 text-white h-48 md:h-60'>
    <h1 className='mt-3 md:mt-6'>Interested?</h1><h2> Contact Us!</h2>
    <Link href='/Contact'>
        <button className='text-gray-800 text-base md:text-2xl xl:text-3xl font-bold bg-purple-600 rounded-lg border-purple-600 border-4 uppercase md:mt-3 h-12 md:h-14 md:w-40 lg:h-16 lg:w-52 xl:h-20 xl:w-60 hover:scale-110 duration-200'>Contact form</button></Link>
    </div>
    </div>
    </>
  );
};
