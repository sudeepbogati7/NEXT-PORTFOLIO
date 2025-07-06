"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import "@/components/nav.css"
import { Phone, User, Code, BookOpen, Mail, ExternalLink, BarChartIcon as ChartNoAxesCombined, Menu } from "lucide-react"

import { useState } from "react"
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import LoginPopup from "./authentication/login-popup"
interface NavProps {
  bgColor: string
}
export default function Nav({ bgColor = "bg-gray-100" }: { bgColor?: string }) {
  console.log("color:", bgColor)
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
      ? "text-sky-600 transition-all duration-500 ease-in-out"
      : "transition-all text-slate-500 k duration-300 ease-in-out"
  }

  const [sidebarVisible, setSidebarVisible] = useState(false)
  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible)
  }

  // Navigation items with descriptions
  const navDescriptions = {
    "/about": "Learn about my background and journey",
    "/skills": "Explore my technical expertise",
    "/projects": "View my portfolio of work",
    "https://blogs.sudipbogati.com.np": "Read my thoughts and tutorials",
    "https://analytics.sudipbogati.com.np/share/PzlltMCGz9DUl4l3/sudipbogati.com.np": "See website performance metrics",
    "/contact": "Get in touch with me"
  }

  // Skills sub-links
  return (
    <>
      <nav
        className={`fixed w-full px-3 z-50 font-russo-one  transition-all duration-300 h-20 flex items-center justify-center bg-white `}
      >
        <div className="w-full  rounded px-3 max-w-6xl flex justify-between mx-auto z-50 font-medium items-center">
          <Link href={"/"} className="p-2  flex flex-row-reverse  items-center gap-2 justify-center">
            <div className="flex flex-col gap-2">
              <div>Sudeep Bogati</div>
              <div className="text-xs relative flex items-center text-gray-500">
                <span className="w-2 h-2 rounded-full absolute bg-green-500"></span>
                <span className="absolute left-3 font-normal font- w-full">available for gigs</span>
              </div>
            </div>
            <Image src={"/profile.jpg"} className="rounded-full" width={40} height={40} alt="logo" />
          </Link>
          <div className="md:flex items-end   md:items-center gap-6  rounded py-2 transition-all duration-200 w-fit absolute lg:static right-5 ease-in-out">
            <button
              onClick={() => setSidebarVisible(true)}
              className=" usm:block lg:hidden   px-2 z-50"
            >
             <Menu />
            </button>

            {/* About me - with tooltip */}
            <span className={`${isActive("/about")} usm:hidden lg:block relative group`}>
              <Link
                href={"/about"}
                className="transition-colors hover-underline-animation left w-fit hover:text-sky-500"
              >
                Who am I?
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navDescriptions["/about"]}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            </span>

            {/* Skills - with dropdown */}
            <span className={`${isActive("/skills")} usm:hidden lg:block relative group`}>
              <Link
                href={"/skills"}
                className="transition-colors hover-underline-animation left w-fit hover:text-sky-500 flex items-center gap-1"
              >
                <div className="flex gap-1 items-center">Skills
                </div>
              </Link>

              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navDescriptions["/skills"]}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>

              {/* Skills dropdown */}

            </span>

            {/* Projects - with tooltip */}
            <span className={`${isActive("/projects")} usm:hidden lg:block relative group`}>
              <Link
                href={"/projects"}
                className="transition-colors hover-underline-animation left w-fit hover:text-sky-500"
              >
                Stuff I’ve Built
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navDescriptions["/projects"]}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            </span>

            {/* Blogs - with tooltip */}
            <div className={`${isActive("/blogs")} usm:hidden lg:flex items-center gap-1 relative group`}>
              <Link
                target="_blank"
                href={"https://blogs.sudipbogati.com.np"}
                className="transition-colors hover-underline-animation left w-fit hover:text-sky-500"
              >
                What I’m Exploring
              </Link>
              <ExternalLink size={14} />
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navDescriptions["https://blogs.sudipbogati.com.np"]}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            </div>

            {/* Analytics - with tooltip */}
            <div className={`${isActive("/analytics")} usm:hidden lg:flex items-center gap-1 relative group`}>
              <Link
                target="_blank"
                href={"https://analytics.sudipbogati.com.np/share/PzlltMCGz9DUl4l3/sudipbogati.com.np"}
                className="transition-colors hover-underline-animation left w-fit hover:text-sky-500"
              >
                Analytics
              </Link>
              <ExternalLink size={14} />
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navDescriptions["https://analytics.sudipbogati.com.np/share/PzlltMCGz9DUl4l3/sudipbogati.com.np"]}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <div className="usm:hidden bg-green-100 rounded py-1 px-4 text-green-800 border-none hover:text-white hover:bg-green-700 flex items-center justify-center lg:block relative group">
              <Link href={"/contact"} className="flex items-center gap-1">
                <Phone className="hover:text-white" size={18} /> Get in touch
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navDescriptions["/contact"]}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            </div>
            <div className="hidden lg:block">
              <LoginPopup />
            </div>
          </div>
        </div>
      </nav>
      <SideBar open={sidebarVisible} setOpen={setSidebarVisible} />
    </>
  )
}

const menuItems = [
  { href: "/about", label: "Who am I? ", icon: <User size={20} className="" /> },
  { href: "/skills", label: "Skills", icon: <Code size={20} /> },
  { href: "/projects", label: "Stuff I’ve Built", icon: <BookOpen size={20} /> },
  {
    href: "https://blogs.sudipbogati.com.np",
    label: "What I’m Exploring",
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
]

function SideBar({ open, setOpen }: any) {
  const pathname = usePathname()
  const isActive = (href: string) =>
    pathname === href
      ? "border-l-4 px-2 rounded text-sky-600 w-fit border-sky-500 transition-all duration-500 ease-in-out"
      : "text-gray-700 border-transparent hover:border-l-4 hover:px-2 hover:border-sky-300 transition-all duration-300 ease-in-out"

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
                        <Image src={"/hi.svg"} width={60} height={40} alt="hi"></Image>
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
  )
}
