'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Nav() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href ? "border-b-2 border-gray-500 transition-all duration-500 ease-in-out" : 'border-b-2 border-transparent hover:border-gray-300 transition-all duration-500 ease-in-out';
    };
    return (
        <>
            <nav className='fixed bg-white z-50 border-b-2 border-gray-300 h-16 top-0 px-4  w-full items-center mx-auto  flex gap-4 justify-between '>
                <Link href={'/'} className="p-2 "><Image objectFit="cover" src={'/logo-colored.png'} width={100} height={40} alt="logo"></Image></Link>
                <div className="flex gap-6  py-2 transition-all duration-200 ease-in-out">
                    <span className={` ${isActive('/')}  `}> <Link href={'/'}>Home  </Link></span>
                    <span className={` ${isActive('/skills')}  `}> <Link href={'/skills'}> Skills </Link> </span>
                    <span className={` ${isActive('/projects')}  `}> <Link href={'/'}> Projects </Link></span>
                    <span className={` ${isActive('/blogs')}  `}> <Link href={'/'}>Blogs </Link> </span>
                    <span className={` ${isActive('/contact')}  `}> <Link href={'/'}> Contact </Link></span>
                </div>

            </nav>

        </>
    )
}