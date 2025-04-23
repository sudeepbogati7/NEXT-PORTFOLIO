'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import '@/components/nav.css';
import { Phone, Hand, User, Code, BookOpen, Mail, ExternalLink, ChartNoAxesCombined } from "lucide-react";

import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import LoginPopup from "./authentication/login-popup";
interface NavProps {
    bgColor: string;
}
export default function Nav({ bgColor = "bg-gray-100" }: { bgColor?: string }) {
    const pathname = usePathname();
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const isActive = (href: string) =>
        pathname === href
            ? "border-gray-800 transition-all duration-500 ease-in-out"
            : "border-transparent transition-all text-slate-500 hover:text-black duration-300 ease-in-out";

    function toggleSidebar() {
        setSidebarVisible(!sidebarVisible);
    }

    return (
        <>
            <nav className={`fixed w-full px-3 z-50 shadow h-20 flex items-center bg-white`}>
                <div className="w-full md:w-4/6 mx-auto flex md:justify-none justify-between items-center font-medium">

                    {/* Left side: Profile & Menu */}
                    <div className=" flex items-center  justify-between md:w-fit w-full gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/profile.jpg" className="rounded-full" width={40} height={40} alt="logo" />
                            <div className="flex flex-col gap-1">
                                <span>Sudeep Bogati</span>
                                <span className="text-xs text-gray-500 relative flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 absolute" />
                                    <span className="pl-3">available for gigs</span>
                                </span>
                            </div>
                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="block md:hidden relative">
                            <div className="absolute inset-0 animate-outer-ping rounded-xl" />
                            <button
                                onClick={toggleSidebar}
                                className="relative border rounded-full bg-gray-200 border-slate-400 shadow-lg px-2 z-50"
                            >
                                <Image src="/menu.svg" width={30} height={30} alt="menu" />
                            </button>
                        </div>
                    </div>

                    {/* Right side: Nav Links and Actions */}
                    <div className="flex border border-black items-center gap-4">
                        {/* Desktop Links */}
                        <div className="hidden md:flex gap-6 items-center">
                            <span className={`${isActive('/about')} border-b-2`}>
                                <Link href="/about" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
                                    About me
                                </Link>
                            </span>
                            <span className={`${isActive('/skills')} border-b-2`}>
                                <Link href="/skills" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
                                    Skills
                                </Link>
                            </span>
                            <span className={`${isActive('/projects')} border-b-2`}>
                                <Link href="/projects" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
                                    Projects
                                </Link>
                            </span>
                            <div className={`${isActive('/blogs')} border-b-2 flex items-center gap-1`}>
                                <Link href="https://blogs.sudipbogati.com.np" target="_blank" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
                                    Blogs
                                </Link>
                                <ExternalLink size={14} />
                            </div>
                            <div className={`${isActive('/analytics')} border-b-2 flex items-center gap-1`}>
                                <Link href="https://analytics.sudipbogati.com.np/share/PzlltMCGz9DUl4l3/sudipbogati.com.np" target="_blank" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
                                    Analytics
                                </Link>
                                <ExternalLink size={14} />
                            </div>
                        </div>

                        {/* Get in Touch Button */}
                        <div className="hidden md:block">
                            <Link href="/contact" className="bg-green-100 hover:bg-green-700 text-green-800 hover:text-white rounded px-4 py-1 flex items-center gap-1">
                                <Phone size={18} />
                                Get in touch
                            </Link>
                        </div>

                        {/* Auth / Login Popup */}
                        <div className="hidden md:block">
                            <LoginPopup />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar Component */}
            <SideBar open={sidebarVisible} setOpen={setSidebarVisible} />
        </>
    );
}


const menuItems = [
    { href: "/about", label: "About me", icon: <User size={20} className="" /> },
    { href: "/skills", label: "Skills", icon: <Code size={20} /> },
    { href: "/projects", label: "Projects", icon: <BookOpen size={20} /> },
    {
        href: "https://blogs.sudipbogati.com.np",
        label: "Blogs",
        icon: <BookOpen size={20} />,
        external: true,
    },
    {
        href: "https://analytics.sudipbogati.com.np/share/PzlltMCGz9DUl4l3/sudipbogati.com.np",
        label: "Analytics",
        icon: <ChartNoAxesCombined size={20} />,
        external: true,
    },
    { href: "/contact", label: "Contact", icon: <Mail size={20} /> },
];

function SideBar({ open, setOpen }: any) {
    const pathname = usePathname();
    const isActive = (href: string) =>
        pathname === href
            ? "border-l-4 px-2 rounded text-sky-600 w-fit border-sky-500 transition-all duration-500 ease-in-out"
            : "text-gray-700 border-transparent hover:border-l-4 hover:px-2 hover:border-sky-300 transition-all duration-300 ease-in-out";

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
                                            <DialogTitle className="text-base font-semibold leading-6 flex flex-col text-center items-center justify-center gap-2">
                                                <Image src={'/hi.svg'} width={60} height={40} alt="hi"></Image>
                                                <span className="text-lg font-bold text-gray-800">Lets Explore My Story 📖</span>
                                            </DialogTitle>
                                            <div className="flex mt-14 flex-col gap-8">
                                                {menuItems.map((item) => (
                                                    <span key={item.href} onClick={() => setOpen(false)} className={isActive(item.href)}>
                                                        <Link
                                                            href={item.href}
                                                            className="font-semibold flex items-center gap-2 px-3 py-2 rounded-lg w-full transition-all duration-300 ease-linear hover:text-sky-700"
                                                            target={item.external ? "_blank" : "_self"}
                                                            rel={item.external ? "noopener noreferrer" : ""}
                                                        >
                                                            {item.icon}
                                                            {item.label}
                                                            {item.external && <ExternalLink size={14} />}
                                                        </Link>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute mx-auto flex flex-col text-center items-center justify-center text-gray-500 bottom-0 py-2 tracking-wide font-medium text-xs">
                                        <div className="w-fit px-8">&copy; 2024 Sudeep Bogati.</div>
                                        <div className="px-8">All rights reserved.</div>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6"></div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

