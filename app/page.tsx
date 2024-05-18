'use client';
import 'tailwindcss/tailwind.css';
import Image from "next/image";
import '@/app/theme.css';
import Link from 'next/link';
import Nav from '@/components/nav';

export default function Home() {
  return (
    <>
      <header className=''>
        <Nav />
      </header>
      <main className="mt-24">
        <div className='flex flex-col  items-center justify-center '>
          <div className=''>
            <Image objectFit='cover' src={'/profile.jpg'} width={200} height={200} alt='profile-photo' className='rounded-full' />
          </div>
          <div className='flex flex-col py-4'>
            <h1 className='font-semibold tracking-wide text-2xl  '> Sudeep Bogati</h1>
            <div className='flex items-center text-base justify-center gap-1 '>
            <span className='flex w-4 h-4'><Image src={'/location.png'} width={30} height={12} alt='location'></Image></span>
            <span className='tracking-wide'>Chitwan, Nepal 🇳🇵</span>
            </div>
          </div>
          <span>  </span>
          <span> <Link target='_blank' href={'https://cct.tu.edu.np/courses/188'} className='hover:border-b-2 cursor-pointer border-gray-400 font-medium'> BIT </Link> Student at <span className='font-medium  '>Tribhuvan University </span></span>
          <span>Associate Software Engineer at <Link target='_blank' href={'https://www.gtn.com.np'} className='font-semibold hover:border-b-2 border-gray-400 '>Greentick Nepal</Link></span>

        </div>
      </main>
    </>
  );
}
