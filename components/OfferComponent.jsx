import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OfferComponent({name, img}) {
  return (
    <>
    <div className='w-full items-center'>
    <hr className="w-1/2 mx-auto h-0.5 bg-white md:hidden"></hr>
        <h1 className='p-3 mb-2 text-2xl font-medium md:text-3xl xl:text-4xl text-slate-500'>{name}</h1>
        <Image src={img} className='object-cover h-60 w-5/6 md:w-4/6 md:h-60 xl:h-72 mx-auto' alt=''/>
        <Link href='/Price'><button className='mt-8 inline-block py-3 px-6 text-xl xl:text-3xl font-bold text-gray-800 border-2 bg-purple-600 border-purple-600 rounded-lg hover:scale-110 duration-200 mb-4'>Check the price list</button>
        </Link>
    </div>
    </>
  );
};
