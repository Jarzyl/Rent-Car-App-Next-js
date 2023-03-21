import React, { useState } from 'react';
import Dodge from './Loaders/Dodge';
import LambA from './Loaders/LambA';
import MAmg from './Loaders/MAmg';
import Mgt from './Loaders/Mgt';
import MRoush from './Loaders/MRoush';
import PCarrera from './Loaders/PCarrera';
import TSupra from './Loaders/TSupra';

export default function Cars3d() {

  const cars = [
    "Dodge Challenger SRT Hellcat",
    "Ford Mustang GT",
    "Ford Mustang GT Roush",
    "Mercedes-Benz A45 AMG",
    "Lamborghini Aventador SVJ",
    "Toyota GR Supra",
    "Porsche 911 Carrera 4S",
  ];

  const [car, setCar] = useState("Dodge Challenger SRT Hellcat");

  return (
    <>
    <section className='w-full'>
        <div className='text-center w-full mt-5 md:mt-16'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-600'>Our cars in 3D</h1>
        <h2 className='text-xl md:text-2xl lg:text-2xl xl:text-3xl mt-6 font-medium text-slate-500 mb-3 pr-3 pl-3'>Choose from the available models for every occasion, from a weekend trip to a wedding!</h2>
        </div>
        <hr className="w-1/2 mx-auto h-0.5 bg-white mb-3 md:hidden"></hr>
    </section>
    <div className='w-full h-screen items-center'>
    <div className='grid md:grid-cols-2'>
      <div className='w-full'>
      <ol className='text-center h-96 mt-4 md:mt-16'>
      {cars.map((item) => (
        <li className='text-xl md:text-xl lg:text-3xl text-purple-600 font-medium  mt-2 md:mt-6 cursor-pointer' key={item} onClick={() => setCar(item)}>{item}</li>
        ))}
      </ol>
      </div>
      <div className='w-full md:mt-10'>
      {
      car === "Dodge Challenger SRT Hellcat" ? (<Dodge/>) 
      : car === "Ford Mustang GT" ? (<Mgt/>) 
      : car === "Ford Mustang GT Roush" ? (<MRoush/>) 
      : car === "Mercedes-Benz A45 AMG" ? (<MAmg/>) 
      : car === "Lamborghini Aventador SVJ" ? (<LambA/>) 
      : car === "Toyota GR Supra" ? (<TSupra/>)
      : (<PCarrera/>)
      }
      </div>
    </div>
    </div>
    <hr className="w-1/2 mx-auto h-0.5 bg-white mb-6"></hr>
    </>
  );
};
