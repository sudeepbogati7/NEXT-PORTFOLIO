'use client';
import 'tailwindcss/tailwind.css';
import Image from "next/image";
import '@/app/theme.css';

import Nav from '@/components/nav';

export default function Home() {
  return (
    <>
      <header className='flex items-center w-3/4  mx-auto justify-center'>
        <Nav />
      </header>
      <main className="mt-24">
        
      </main>
    </>
  );
}
