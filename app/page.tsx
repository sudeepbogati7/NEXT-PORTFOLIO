'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import Image from "next/image";
import '@/app/theme.css';
import Link from 'next/link';
import Nav from '@/components/nav';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import { BackgroundLines } from '@/components/ui/background-lines';
import 'aos/dist/aos.css';
import SocialLinks from '@/components/SocialLinks';
import MyServices from '@/components/MyServices';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import DevelopmentSteps from '@/components/DevSteps';
export default function Home() {

  return (
    <>
      <main className=" md:min-h-screen">
        {/* Background Section */}
        <div
          style={{
            backgroundImage: "linear-gradient(to right, rgba(225, 238, 247, 1) 0%, rgba(180, 210, 230, 1) 100%)",
          }}
          className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-center opacity-70"
        >

          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className=" relative z-10  mt-16 flex flex-col-reverse lg:flex-row lg:w-3/4 mx-auto items-center justify-between w-full">
          {/* Left Content */}
          <div className=" px-6 md:px-2 mt-4 md:mt-0 w-full md:w-4/5 mx-auto mb-2">
            <div className=' px-3'>
              <h1 className='text-lg flex gap-1 font-medium font-handwriting text-green-700'>Namaste <Image src={'/namaste.svg'} width={18} height={20} alt='namaste'></Image> !</h1>
              <div className='text-2xl font-extrabold '>My name is <span className='bg-gradient-to-r from-green-200 to-blue-300 rounded-md px-2 text-gray-700'>Sudeep Bogati</span> </div>
              <div className='text-gray-600 text-lg font-medium'>originating from the beautiful landscapes of Nepal 🇳🇵. </div>
            </div>


            {/* ----------- terminal ----------- */}
            <div className="bg-gray-900 text-white px-4 py-6 w-full  shadow-lg rounded-md font-mono mt-4 max-w-2xl ">
              {/* Terminal Header */}
              <div className="flex items-center mb-4">
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className=" flex flex-col font-medium">
                I am a programmer who loves
                <div className="flex gap-1 w-fit text-green-800  mt-3 px-2 font-semibold rounded-xl text-xl bg-gradient-to-r from-blue-300 to-green-200">
                  <Image src="/learn.svg" width={25} height={20} alt="learning" />
                  learning
                </div>
                <div className="flex gap-1 w-fit mt-2 text-blue-800  px-3 font-semibold rounded-xl text-xl bg-gradient-to-l from-indigo-200 to-blue-300">
                  <Image src="/terminal.svg" width={25} height={20} alt="building" />
                  building new things
                </div>
                <span className="inline-flex bg-gradient-to-r from-yellow-300 to-red-300 px-3 text-xl rounded-xl mt-2 text-yellow-800 items-center w-fit  gap-1 font-semibold">
                  and turning ideas into reality.
                </span>
              </div>
            </div>
            <div className='px-3 w-full mx-auto md:w-full mt-8'>
              <div className="text-lg font-semibold text-gray-800 ">
                As a <span className="text-green-600">Software Engineer</span>,
              </div>
              <div className="text-xl font-semibold text-blue-900">
                I build complete Web Applications to solve business problems
              </div>
              <div className="text-gray-700 text-lg font-medium">
                focusing on making them user-friendly and reliable.
              </div>
              <Button className='mt-3 bg-blue-100 text-blue-900 hover:bg-blue-200'>
                <Link className="flex items-center gap-1" href={'about'} > More about me <ArrowRight  className='w-4'/></Link>
              </Button>

            </div>
          </div>
          {/* Right Content */}
          <div className=" relative overflow-hidden pb-6  flex flex-col md:w-2/5 w-full mx-auto items-center">
            <div className="shadow-lg shadow-blue-500/30 rounded-full border-4 border-sky-700 w-fit object-cover bg-black overflow-hidden">
              <Image
                src={'/blue_coat_pic_square.jpg'}
                width={200}
                height={100}
                alt="Profile image"
              />
            </div>

            <div className="flex flex-col w-full items-center">
              <div className="mt-2 font-extrabold text-2xl tracking-wide text-gray-700">
                Sudeep Bogati
              </div>
              <div className="text-gray-700 ">
                <strong className="text-green-600 ">Software Engineer</strong> at Green
                Tick Nepal
              </div>
              <div className="flex text-sm gap-1 text-gray-700">
                <Image
                  src={'/location.svg'}
                  width={16}
                  height={20}
                  alt="Location-svg"
                />
                Kathmandu, Nepal 🇳🇵
              </div>
            </div>
            <SocialLinks />
          </div>
        </div>
      </main>
      <div className='relative left-0 black lg:px-16 lg:bottom-24 -bottom-2 bg-gray-100 z-40 flex flex-col   mx-auto w-full lg:flex-row'>
        <MyServices />
      </div>
    </>
  );
}
