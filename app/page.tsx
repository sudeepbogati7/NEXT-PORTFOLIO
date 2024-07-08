'use client';
import './globals.css';
import { useEffect } from 'react';
import Image from "next/image";
import '@/app/theme.css';
import Link from 'next/link';
import Nav from '@/components/nav';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 700 }); 
  }, []);


  return (
    <>
      <main className="mt-24">
        <div className='flex flex-col  items-center justify-center '>
          {/* <div className='bg-red-300 px-4 rounded-xl text-gray-600 mb-8 '>Under construction ..........</div> */}
          {/* profile photo */}
          <div data-aos="zoom-in" className=''>
            <Image src={'/profile.jpg'} width={200} height={200} alt='profile-photo' placeholder="blur"    blurDataURL="/profile.jpg" priority className='shadow-2xl shadow-gray-800/60 rounded-full border-gray-500 border-4 ' />
          </div>
          {/* name and addres */}
          <div className='flex flex-col my-4'>
            <h1 data-aos="zoom-in" className='font-extrabold tracking-wide text-2xl  '> Sudeep Bogati</h1>
            <div data-aos="zoom-in" className='flex items-center text-base justify-center gap-1 '>
              <span data-aos="zoom-in" className='flex w-4 h-4'><Image src={'/location.png'} width={20} height={20} alt='location'></Image></span>
              <span data-aos="zoom-in" className='tracking-wide text-sm font-mono'>Chitwan, Nepal 🇳🇵</span>
            </div>
          </div>



          {/* Position and status */}
          <div className='flex flex-col items-center justify-center '>
            <span className='text-sm  text-gray-600  font-sans' data-aos="zoom-in"> <Link target='_blank' href={'https://cct.tu.edu.np/courses/188'} className='hover:font-extrabold hover:tracking-widest transition-all duration-300 ease-in-out font-semibold tracking-wide  px-1  cursor-pointer underline font-medium'> BIT</Link> Student at <span className='font-semibold  '>Tribhuvan University </span></span>
            <span data-aos="zoom-in" className=' text-sm font-semibold text-gray-600 font-sans'>Software Engineer at <Link target='_blank' href={'https://www.gtn.com.np'} className='font-semibold underline hover:text-[#92a91a]  transition-all duration-200 ease-in-out border-gray-300 '>Greentick Nepal</Link></span>
          </div>

          {/* links  */}
          <div className='flex gap-4 mt-4 '>
            <Link className='border-b-2 py-1 rounded transition-all duration-400  border-transparent hover:border-gray-500' target='_blank' href={'https://github.com/sudeepbogati7/'}><span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 496 512">
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </span>
            </Link>
            <Link className=' border-b-2 py-1 rounded transition-all duration-400  border-transparent hover:border-blue-500' target='_blank' href={'https://facebook.com/sudeep.bogati07'}><span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer transition-all duration-400 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512">
                <path
                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span></Link>
            <Link className='border-b-2 py-1 rounded transition-all duration-400  border-transparent hover:border-orange-500' target='_blank' href={'https://instagram.com/the.sudeep_'}>
              <span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer hover:text-[#c13584]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span></Link>
            <Link className='border-b-2 py-1 rounded transition-all duration-400  border-transparent hover:border-blue-600' target='_blank' href={'https://linkedin.com/in/sudeep-bogati'}>
              <span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span></Link>

            <Link className='border-b-2 py-1 rounded transition-all duration-400  border-transparent hover:border-orange-500' href={'https://stackoverflow.com/users/24161634/sudeepbogati'} target='_blank'>
              <span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer hover:text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 384 512">
                  <path
                    d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
                </svg>
              </span></Link>


            <Link className='border-b-2 py-1 rounded transition-all duration-400  border-transparent hover:border-gray-700' target='_blank' href={'https://x.com/soodeep77'}>
              <span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span></Link>
            <Link className='border-b-2 py-1 rounded transition-all duration-400  border-transparent hover:border-green-500' href={'/'}>
              <span className="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer hover:text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </span></Link>
          </div>
        </div>
      </main>
    </>
  );
}
