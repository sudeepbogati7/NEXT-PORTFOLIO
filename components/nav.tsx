'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import '@/components/nav.css';
import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
interface NavProps {
    bgColor: string;
  }
export default function Nav( {bgColor = "bg-gray-100" }: { bgColor?: string }) {
    console.log("color:", bgColor)
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href ? "border-b-2 border-gray-600  transition-all duration-500 ease-in-out" : 'border-b-2 border-transparent hover:border-gray-300 transition-all text-slate-600 hover:text-black duration-500 ease-in-out';
    };


    const [sidebarVisible, setSidebarVisible] = useState(false);
    function toggleSidebar() {
        setSidebarVisible(!sidebarVisible);
    }
    return (
        <>
            <nav className={`fixed  ${bgColor} w-full z-50 font-medium h-16 top-0  px-4 md:px-14 items-center  mx-auto flex gap-16 justify-between`}>
                <Link href={'/'} className="p-2">
                    <Image className="h-auto w-auto" src={'/logo.png'} width={80} height={80} alt="logo" />
                    {/* <Image src={'/cat-theme-logo.png'} width={100} height={40} alt="logo" /> */}
                </Link>
                <div className="flex gap-6 py-2 transition-all duration-200 ease-in-out">
                    <div className="relative  transition-all duration-600 ease-in-out p-1 block md:hidden rounded-full">
                        <div className="absolute inset-0 animate-outer-ping rounded-xl"></div>
                        <button
                            onClick={() => setSidebarVisible(true)}
                            className="relative usm:block md:hidden border rounded-full bg-gray-200 border-slate-400 shadow-lg px-2 z-50"
                        >
                            <Image src={'/menu.svg'} width={30} height={30} alt="menu" />
                        </button>
                    </div>

                    <span className={`${isActive('/about')} usm:hidden md:block`}>
                        <Link href={'/about'} className="font-medium relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"> About me </Link>
                    </span>
                    <span className={`${isActive('/skills')} usm:hidden md:block`}>
                        <Link href={'/skills'} className="font-medium relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"> Skills </Link>
                    </span>
                    <span className={`${isActive('/projects')} usm:hidden md:block`}>
                        <Link href={'/projects'} className="font-medium relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"> Projects </Link>
                    </span>
                    <span className={`${isActive('/blogs')} usm:hidden md:block`}>
                        <Link target="_blank" href={'https://blogs.sudipbogati.com.np'} className=" relative  w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-centerfont-medium"> Blogs </Link>
                    </span>
                    {/* <span className={`${isActive('/contact')} usm:hidden bg-green-500 rounded-lg px-2 text-white border-none hover:text-white hover:bg-green-800 flex items-center justify-center md:block`}>
                        <Link href={'/contact'} className="font-medium"> Contact me ! </Link>
                    </span> */}
                </div>
                <div className="usm:hidden bg-green-500 rounded py-1 px-2 text-white border-none hover:text-white hover:bg-green-700 flex items-center justify-center md:block"> 
                    <Link href={'/contact'} className="font-medium"> Get in touch </Link>
                </div>
            </nav>
            <SideBar open={sidebarVisible} setOpen={setSidebarVisible} />
        </>
    );
}


function SideBar({ open, setOpen }: any) {
    // const [open, setOpen] = useState(false) changed 
    const pathname = usePathname();
    const isActive = (href: string) => {
        return pathname === href ? "border-l-4 px-2 rounded  w-fit border-gray-500  transition-all duration-500 ease-in-out" : ' text-gray-500 border-transparent hover:border-l-4 hover:text-black hover:px-2 hover:border-gray-300 transition-all duration-300 ease-in-out';
    };

    return (
        <Transition show={open}>
            <Dialog className="relative z-50" onClose={setOpen}>
                <TransitionChild
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <TransitionChild
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <DialogPanel className="pointer-events-auto relative w-screen max-w-56">
                                    <TransitionChild
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-0 top-2 -ml-10 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </TransitionChild>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-6 sm:px-6">
                                            <DialogTitle className="text-base font-semibold leading-6 flex items-center justify-center text-gray-900"><Image src={'/hello.webp'} height={90} alt="hello" width={90}></Image> </DialogTitle>
                                            <div className="flex mt-14 flex-col gap-8">
                                                <span onClick={() => setOpen(false)} className={`${isActive('/about')} `}>
                                                    <Link href={'/about'} className="font-semibold flex items-center gap-2 border-2 px-2 rounded-lg w-fit  transition-all duration-300 ease-linear boder-gray-300 hover:border-gray-400 "> <Image className="text-white" src={'/about_me.svg'} width={18} height={20} alt="about-me"></Image> About me </Link>
                                                </span>
                                                <span onClick={() => setOpen(false)} className={`${isActive('/skills')} `}>
                                                    <Link href={'/skills'} className="font-semibold flex items-center gap-2 border-2 px-2 rounded-lg w-fit  transition-all duration-300 ease-linear boder-gray-300 hover:border-gray-400 ">  <Image src={'/skills.svg'} width={16} height={20} alt="skills"></Image>  Skills </Link>
                                                </span>
                                                <span onClick={() => setOpen(false)} className={`${isActive('/projects')} `}>
                                                    <Link href={'/projects'} className=" font-semibold flex items-center gap-2 border-2 px-2 rounded-lg w-fit  transition-all duration-300 ease-linear boder-gray-300 hover:border-gray-400  "> <Image src={'/projects.svg'} width={16} height={20} alt="about-me"></Image> Projects </Link>
                                                </span>
                                                <span onClick={() => setOpen(false)} className={`${isActive('/blogs')}`}>
                                                    <Link href={'https://blogs.sudipbogati.com.np'} className="font-semibold flex items-center gap-1 border-2 px-2 rounded-lg w-fit  transition-all duration-300 ease-linear boder-gray-300 hover:border-gray-400  "> <Image src={'/blogs.svg'} width={18} height={20} alt="about-me"></Image> Blogs<Image src={'/redirect.png'} width={8} height={12} alt="redirect"></Image> </Link>
                                                </span>
                                                <span onClick={() => setOpen(false)} className={`${isActive('/contact')} `}>
                                                    <Link href={'/contact'} className="font-semibold flex items-center gap-2 border-2 px-2 rounded-lg w-fit  transition-all duration-300 ease-linear boder-gray-300 hover:border-gray-400  "> <Image src={'/contact.svg'} width={16} height={20} alt="about-me"></Image> Contact </Link>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="absolute mx-auto flex flex-col text-center items-center justify-center text-gray-500 bottom-0 py-2 tracking-wide  font-medium  text-xs ">
                                            <div className="w-fit px-8 ">&copy; 2024 Sudeep Bogati .</div>
                                            <div className="px-8">All rights reserved.</div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6"></div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}