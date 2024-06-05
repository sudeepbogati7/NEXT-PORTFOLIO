'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import '@/components/nav.css';
import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Nav() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        return pathname === href ? "border-b-2 border-gray-500  transition-all duration-500 ease-in-out" : 'border-b-2 border-transparent hover:border-gray-300 transition-all duration-500 ease-in-out';
    };

    return (
        <>
        <SideBar />
            <nav className='fixed bg-white z-50 border-b-2 border-gray-300 font-medium h-14 top-0 px-4 w-full items-center mx-auto flex gap-4 justify-between'>
                <Link href={'/'} className="p-2">
                    <Image objectFit="cover" src={'/logo-colored.png'} width={100} height={40} alt="logo" />
                </Link>
                <div className="flex gap-6 py-2 transition-all duration-200 ease-in-out">
                    <div className="usm:block md:hidden px-4">
                        <input id="checkbox" type="checkbox" />
                        <label className="toggle" htmlFor="checkbox">
                            <div id="bar1" className="bars"></div>
                            <div id="bar2" className="bars"></div>
                            <div id="bar3" className="bars"></div>
                        </label>
                    </div>

                    <span className={`${isActive('/about')} usm:hidden md:block`}>
                        <Link href={'/about'} className="font-semibold"> About me </Link>
                    </span>
                    <span className={`${isActive('/skills')} usm:hidden md:block`}>
                        <Link href={'/skills'} className="font-semibold"> Skills </Link>
                    </span>
                    <span className={`${isActive('/projects')} usm:hidden md:block`}>
                        <Link href={'/projects'} className="font-semibold"> Projects </Link>
                    </span>
                    <span className={`${isActive('/blogs')} usm:hidden md:block`}>
                        <Link href={'/blogs'} className="font-semibold"> Blogs </Link>
                    </span>
                    <span className={`${isActive('/contact')} usm:hidden md:block`}>
                        <Link href={'/contact'} className="font-semibold"> Contact </Link>
                    </span>
                </div>
            </nav>
        </>
    );
}


function SideBar() {
    const [open, setOpen] = useState(true)

    return (
        <Transition show={open}>
            <Dialog className="relative z-10" onClose={setOpen}>
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
                                <DialogPanel className="pointer-events-auto relative w-screen max-w-md">
                                    <TransitionChild
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </TransitionChild>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <DialogTitle className="text-base font-semibold leading-6 text-gray-900">Panel title</DialogTitle>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
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