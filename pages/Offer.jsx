import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import OfferComponent from '@/components/OfferComponent';
import Interested from '@/components/Interested';
import hc from '../public/Gallery/Hc/hc.jpg';
import gt from '../public/Gallery/Gt/gt.jpg';
import r from '../public/Gallery/Roush/r.png';
import a from '../public/Gallery/Merc/a.png';
import l from '../public/Gallery/Lambo/l.png';
import s from '../public/Gallery/Supra/s.jpg';
import p from '../public/Gallery/P/p.jpg';

export default function Offer() {
  return (
    <div className='bg-gray-900'> 
    <Head>
    <title>Offer | Rent a Car</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type='png' href='/img/car.png'/>
    </Head>
    <section id='offer' className='w-full pt-20 flex h-screen items-center justify-center opacity-90' >
      <div className='text-center text-white'>
        <p className='text-3xl md:text-4xl xl:text-6xl font-bold'>Our offer</p>
        <Link href='/Contact' className='mt-8 inline-block py-3 px-6 text-xl xl:text-3xl font-bold text-gray-800 border-2  bg-purple-600 border-purple-600 rounded-lg hover:scale-110 duration-200'>Rent a Car!</Link>
      </div>
    </section>
    <div className='w-full items-center mt-8 mb-16'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-6xl text-center text-purple-600 mb-6 mt-6 md:mt-16 md:mb-16 font-bold'>Get to know our offer</h1>
        <div className='mr-10 ml-10 text-center'>
        <p className='text-xl md:text-3xl xl:text-4xl text-slate-500 font-medium mr-5 ml-5'>Test our models and let us know your impressions!</p>
        </div>
      </div>

      {/* Offer */}
      <div className='w-full mt-16 md:mb-16 items-center'>
        <div className='w-full grid md:grid-cols-2 gap-5 text-center'> 
        <OfferComponent name={'Dodge Challenger SRT Hellcat'} img={hc}/>
        <OfferComponent name={'Ford Mustang GT'} img={gt}/>
        <OfferComponent name={'Ford Mustang GT Roush'} img={r}/>
        <OfferComponent name={'Mercedes-Benz A45 AMG'} img={a}/>
        <OfferComponent name={'Lamborghini Aventador SVJ'} img={l}/>
        <OfferComponent name={'Toyota GR Supra'} img={s}/>
        <OfferComponent name={'Porsche 911 Carrera 4S'} img={p}/>
        </div>
        <hr className="w-1/2 mx-auto h-0.5 bg-white mt-6 mb-8"></hr>
      </div>
      
      <Interested/>
      </div>
  )
}
