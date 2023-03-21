import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Interested from '@/components/Interested';
import l1 from '../public/Gallery/Lambo/l1.jpg';
import l2 from '../public/Gallery/Lambo/l2.jpg';
import l3 from '../public/Gallery/Lambo/l3.jpg';

export default function Price() {
  return (
    <div className='bg-gray-900'>
    <Head>
    <title> Price List | Lamborghini | Rent a Car</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type='png' href='/img/car.png' />
    </Head>
    <section id='price' className='w-full pt-20 flex h-screen items-center justify-center opacity-90'>
      <div className='text-center text-white'>
        <p className='text-3xl md:text-4xl xl:text-6xl font-bold'>Lamborghini Aventador SVJ</p>
        <Link href='/Contact' className='mt-8 inline-block py-3 px-6 text-xl xl:text-3xl font-bold text-gray-800 border-2 bg-purple-600 border-purple-600 rounded-lg hover:scale-110 duration-200'>Rent this car!</Link>
      </div>
    </section>
    <section className='w-full h-full items-center'>
        <div className='text-center'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-purple-600 mb-6 mt-6 md:mt-16 md:mb-16'>Lamborghini Aventador SVJ</h1>
        <div className='w-full grid md:flex justify-center mb-10'>
        <Image src={l1} className='object-cover h-40 w-80 md:h-40 xl:h-52 md:mr-8 mb-6' alt='lambo'/>
        <Image src={l2} className='object-cover h-40 w-80 md:h-40 xl:h-52 md:mr-8 mb-6' alt='lambo'/>
        <Image src={l3} className='object-cover h-40 w-80 md:h-40 xl:h-52 ' alt='lambo'/>
        </div>
        <div className='grid md:grid-cols-2 mr-4 ml-4 '>
            <div className=' mt-6 md:text-left text-slate-500 mx-auto md:mb-16'>
                <table className="table-auto w-full font-medium text-xl xl:text-2xl">
                <thead>
                <tr>
                <th className="border px-4 py-2 text-purple-600" colSpan="2">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border px-4 py-2">Year of manufacture:</td>
                <td className="border px-4 py-2 text-purple-600">2018</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">0-60 mph time:</td>
                <td className="border px-4 py-2 text-purple-600">2.8 seconds</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Engine type:</td>
                <td className="border px-4 py-2 text-purple-600">6.5-liter V12</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Power output:</td>
                <td className="border px-4 py-2 text-purple-600">770 horsepower</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Drive:</td>
                <td className="border px-4 py-2 text-purple-600">all-wheel-drive (AWD)</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Transmission:</td>
                <td className="border px-4 py-2 text-purple-600">7-speed automatic</td>
                </tr>
            </tbody>
        </table>
    </div>
        <div className='mt-12 mb-12 md:mt-6 md:mb-0 md:text-left'>
        <table className="table-auto font-medium text-xl xl:text-2xl">
            <thead>
                <tr className='text-purple-600'>
                <th className="border px-4 py-2">Rental Time</th>
                <th className="border px-4 py-2">Price</th>
                </tr>
            </thead>
            <tbody className='text-slate-500'>
                <tr>
                <td className="border px-4 py-2">Day (Monday-Thursday)</td>
                <td className="border px-4 py-2">2000$</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Single weekend day (Friday-Sunday)</td>
                <td className="border px-4 py-2">3000$</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Weekend (Fri 16:00 - Mon 10:00)</td>
                <td className="border px-4 py-2">7000$</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Week</td>
                <td className="border px-4 py-2">20 000$</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">Month</td>
                <td className="border px-4 py-2">100 000$</td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
        </div>
    </section>
    <Interested/>
    </div>
  );
};
