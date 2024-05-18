'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    return (
        <>
            <nav className='fixed h-16 top-0 px-4  font-medium  w-full items-center mx-auto  flex gap-4 justify-between '>
                <div className="p-2 "><Image objectFit="cover" src={'/logo-colored.png'} width={100} height={40} alt="logo"></Image></div>
                <div className="flex gap-6  py-2 transition-all duration-200 ease-in-out">
                    <span className=" border-b-2 border-gray-500"> <Link href={'/'}>Home  </Link></span>
                    <span className=" hover:border-b-2 border-gray-300"> <Link href={'/skills'}> Skills </Link> </span>
                    <span className=" hover:border-b-2 border-gray-300"> <Link href={'/projects'}> Projects </Link></span>
                    <span className=" hover:border-b-2 border-gray-300"> <Link href={'/blogs'}>Blogs </Link> </span>
                    <span className=" hover:border-b-2 border-gray-300"> <Link href={'/contact'}> Contact </Link></span>
                </div>

            </nav>

        </>
    )
}