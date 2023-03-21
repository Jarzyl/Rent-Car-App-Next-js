import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import logo from '../public/img/car.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full shadow-md shadow-purple-600 bg-gray-900 fixed top-0 z-10 h-16 lg:h-20 xl:h-22">
      <div className="justify-between md:justify-start flex px-4 mr-5 mt-4 xl:max-w-full md:items-center md:px-8 h-10">
      <Image src={logo} width={60} alt='logo' className="justify-start hover:scale-110 duration-200 lg:mt-5 xl:mb-5 2xl:mt-10 mr-3"/>
      <p className='text-purple-600 font-bold uppercase mt-1 text-xl md:text-2xl xl:text-3xl hover:scale-105 duration-200 md:mt-0 xl:mt-3'>Rent Car</p>
          <ul className='hidden md:mt-0 text-base xl:text-xl font-bold uppercase md:flex xl:flex text-purple-600 xl:mt-2 xl:mr-5'>      
            <li className=' md:ml-14 hover:scale-105 duration-200'>
            <Link href='/HomePage'>Home</Link>
            </li>
            <li className=' md:ml-14 hover:scale-105 duration-200'>
            <Link href='/Offer'>Offer</Link>
            </li>
            <li className=' md:ml-14 hover:scale-105 duration-200'>
            <Link href='/About'>About</Link>
            </li>
            <li className=' md:ml-14 hover:scale-105 duration-200'>
            <Link href='/Gallery'>Gallery</Link>
            </li>
            <li className=' md:ml-14 hover:scale-105 duration-200'>
            <Link href='/Rent'>Rental Conditions</Link>
            </li>
            <li className=' md:ml-14 hover:scale-105 duration-200'>
            <Link href='/Contact'>Contact</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className='md:hidden ml-auto hover:scale-105 duration-200 text-purple-600' onClick={handleNav}><AiOutlineMenu size={35}/>
          </div>

        </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>

        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <div onClick={handleNav} className='rounded-full bg-gray-500 text-purple-600 p-3 cursor-pointer'><AiOutlineClose/>
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase font-bold text-purple-600 text-lg'>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/HomePage'>Home</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/Offer'>Offer</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/About'>About</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/Gallery'>Gallery</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/Rent'>Rental Conditions</Link>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <Link href='/Contact'>Contact</Link>
              </li>
            </ul>
            <div className='pt-10'>
              <p className='text-xl font-bold uppercase tracking-widest text-purple-600'>
                Stay in Touch</p>
              <div className='text-purple-600 mt-6 flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a href='https://twitter.com/?lang=en'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full bg-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsTwitter />
                  </div>
                </a>
                <a href='https://www.facebook.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full bg-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFacebook/>
                  </div>
                </a>
                <a href='https://www.instagram.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full bg-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsInstagram/>
                  </div>
                </a>
                <Link href='mailto:rentcarcompany@gmail.com'>
                  <div onClick={() => setNav(!nav)}
                    className='rounded-full bg-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;