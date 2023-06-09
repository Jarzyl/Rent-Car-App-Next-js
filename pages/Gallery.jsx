import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Call from '@/components/Call';
import hc from '../public/Gallery/Hc/hc.jpg';
import hc1 from '../public/Gallery/Hc/hc1.jpg';
import hc2 from '../public/Gallery/Hc/hc2.jpg';
import hc3 from '../public/Gallery/Hc/hc3.jpg';
import hc4 from '../public/Gallery/Hc/hc4.jpg';
import gt from '../public/Gallery/Gt/gt.jpg';
import gt1 from '../public/Gallery/Gt/gt1.png';
import gt2 from '../public/Gallery/Gt/gt2.jpg';
import gt3 from '../public/Gallery/Gt/gt3.jpg';
import gt4 from '../public/Gallery/Gt/gt4.png';
import r from '../public/Gallery/Roush/r.png';
import r1 from '../public/Gallery/Roush/r1.png';
import r2 from '../public/Gallery/Roush/r2.jpg';
import r3 from '../public/Gallery/Roush/r3.png';
import r4 from '../public/Gallery/Roush/r4.jpg';
import a from '../public/Gallery/Merc/a.png';
import a1 from '../public/Gallery/Merc/a1.jpg';
import a2 from '../public/Gallery/Merc/a2.jpg';
import a3 from '../public/Gallery/Merc/a3.jpg';
import a4 from '../public/Gallery/Merc/a4.jpg';
import l from '../public/Gallery/Lambo/l.png';
import l1 from '../public/Gallery/Lambo/l1.jpg';
import l2 from '../public/Gallery/Lambo/l2.jpg';
import l3 from '../public/Gallery/Lambo/l3.jpg';
import l4 from '../public/Gallery/Lambo/l4.jpg';
import s from '../public/Gallery/Supra/s.jpg';
import s1 from '../public/Gallery/Supra/s1.jpg';
import s2 from '../public/Gallery/Supra/s2.jpg';
import s3 from '../public/Gallery/Supra/s3.jpg';
import s4 from '../public/Gallery/Supra/s4.jpg';
import p from '../public/Gallery/P/p.jpg';
import p1 from '../public/Gallery/P/p1.jpg';
import p2 from '../public/Gallery/P/p2.png';
import p3 from '../public/Gallery/P/p3.jpg';
import p4 from '../public/Gallery/P/p4.jpg';


export default function Gallery() {

  return (
    <div className='bg-gray-900'>
    <Head>
    <title>Gallery | Rent a Car</title>
    <meta name="description" content="Generated by create next app"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" type='png' href='/img/car.png'/>
    </Head>
  <section id='gallery' className='w-full pt-20 flex h-screen items-center justify-center opacity-90' >
      <div className='text-center text-white'>
        <p className='text-3xl md:text-4xl xl:text-6xl font-bold'>Our Gallery</p>
        <Link href='/Contact' className='mt-8 inline-block py-3 px-6 text-xl xl:text-3xl font-bold text-gray-800 border-2 bg-purple-600 border-purple-600 rounded-lg hover:scale-110 duration-200'>Rent a Car!</Link>
      </div>
    </section>
    <section className='w-full h-full items-center md:mt-20 text-center'>
      <p className='text-3xl md:text-5xl lg:text-6xl xl:text-6xl text-center text-purple-600 mb-6 mt-6 md:mt-16 md:mb-16 font-bold'>Gallery</p>

    {/* Dodge */}
    <div className='w-full items-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 font-medium text-slate-500'>Dodge Challenger SRT Hellcat</h1>
        <hr className="w-1/2 mx-auto h-0.5 bg-white mb-6"></hr>
    <div className='grid md:grid-cols-3 xl:grid-cols-3 gap-5 md:mr-52 md:ml-52'> 
    <Image src={hc} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='dodge'/>
    <Image src={hc1} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='dodge'/>
    <Image src={hc2} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='dodge'/>
    <Image src={hc3} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='dodge'/>
    <Image src={hc4} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='dodge'/>
    </div>
    </div>

    {/* Mustang GT */}
    <div className='w-full items-center mt-16'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 font-medium text-slate-500'>Ford Mustang GT</h1>
        <hr className="w-1/2 mx-auto h-0.5 bg-white mb-6"></hr>
    <div className='grid md:grid-cols-3 xl:grid-cols-3 gap-5 md:mr-52 md:ml-52'> 
    <Image src={gt} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='mustang-gt'/>
    <Image src={gt1} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='mustang-gt'/>
    <Image src={gt2} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='mustang-gt'/>
    <Image src={gt3} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='mustang-gt'/>
    <Image src={gt4} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='mustang-gt'/>
    </div>
    </div>

    {/* Mustang Roush */}
    <div className='w-full items-center mt-16'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 font-medium text-slate-500'>Ford Mustang GT Roush</h1>
        <hr className="w-1/2 mx-auto h-0.5 bg-white mb-6"></hr>
    <div className='grid md:grid-cols-3 xl:grid-cols-3 gap-5 md:mr-52 md:ml-52'> 
    <Image src={r} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='mustang-roush'/>
    <Image src={r1} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='mustang-roush'/>
    <Image src={r2} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='mustang-roush'/>
    <Image src={r3} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='mustang-roush'/>
    <Image src={r4} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='mustang-roush'/>
    </div>
    </div>

    {/* Mercedes a45 */}
    <div className='w-full items-center mt-16'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 font-medium text-slate-500'>Mercedes-Benz A45 AMG</h1>
        <hr className="w-1/2 mx-auto h-0.5 bg-white mb-6"></hr>
    <div className='grid md:grid-cols-3 xl:grid-cols-3 gap-5 md:mr-52 md:ml-52'> 
    <Image src={a} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='amg'/>
    <Image src={a1} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='amg'/>
    <Image src={a2} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='amg'/>
    <Image src={a3} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='amg'/>
    <Image src={a4} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='amg'/>
    </div>
    </div>

    {/* Lambo*/}
    <div className='w-full items-center mt-16'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 font-medium text-slate-500'>Lamborghini Aventador SVJ</h1>
        <hr className="w-1/2 mx-auto h-0.5 bg-white mb-6"></hr>
    <div className='grid md:grid-cols-3 xl:grid-cols-3 gap-5 md:mr-52 md:ml-52'> 
    <Image src={l} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='lambo'/>
    <Image src={l1} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='lambo'/>
    <Image src={l2} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='lambo'/>
    <Image src={l3} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='lambo'/>
    <Image src={l4} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='lambo'/>
    </div>
    </div>

    {/* Supra */}
    <div className='w-full items-center mt-16'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 font-medium text-slate-500'>Toyota GR Supra</h1>
        <hr className="w-1/2 mx-auto h-0.5 bg-white mb-6"></hr>
    <div className='grid md:grid-cols-3 xl:grid-cols-3 gap-5 md:mr-52 md:ml-52'> 
    <Image src={s} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='supra'/>
    <Image src={s1} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='supra'/>
    <Image src={s2} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='supra'/>
    <Image src={s3} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='supra'/>
    <Image src={s4} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='supra'/>
    </div>
    </div>

    {/* Porsche */}
    <div className='w-full items-center mt-16'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 font-medium text-slate-500'>Porsche 911 Carrera 4S</h1>
        <hr className="w-1/2 mx-auto h-0.5 bg-white mb-6"></hr>
    <div className='grid md:grid-cols-3 xl:grid-cols-3 gap-5 md:mr-52 md:ml-52 mb-16'> 
    <Image src={p} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='porsche'/>
    <Image src={p1} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='porsche'/>
    <Image src={p2} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='porsche'/>
    <Image src={p3} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='porsche'/>
    <Image src={p4} className='object-cover h-40 w-80 md:h-40 xl:h-52 mx-auto' alt='porsche'/>
    </div>
    </div>
    </section>
    <hr className="w-1/2 mx-auto h-0.5 bg-white mb-6"></hr>
    <Call/>
    </div>
  );
};
