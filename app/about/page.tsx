import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
    return (
        <main className="mt-16">
            <div className='px-4'>
                <div className='text-xl font-semibold mx-auto px-2  text-center  my-4 flex items-center gap-2 w-fit  '> About me <Image className='h-6 w-6' src={'/about-me.png'} height={30} width={30} alt='about-me'></Image> </div>
                <p className='text-gray-800'>I am Sudeep Bogati, a skilled <strong> Full Stack Software Engineer </strong>with a passion for crafting dynamic web applications. Whether its building sleek user interfaces with NEXT.js, managing server-side logic with Node.js,Django or handling data storage with MongoDB,PostgreSQL. I thrive on creating seamless, end-to-end solutions.</p>
                <Link href={'/skills'}> <div className='mt-2 font-medium text-gray-500 tracking-wide border-b-2 transition-all duration-300  border-gray-400 w-fit hover:text-gray-900 hover:border-gray-700 text-xs '>  Know more about my skills and what I do  </div></Link>
            </div>

            <div className="font-semibold mx-auto text-center border-b-2 border-gray-400 w-fit  text-lg px-2 my-6"> My Experiences </div>
            <div className="px-6">

                <ol className="relative border-s border-gray-200 ">
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                            {/* <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg> */}
                            <Image src={'https://i0.wp.com/gtn.com.np/storage/2022/09/greentick-nepal-pvt-lt.png?fit=2294%2C755&ssl=1'} width={100} height={100} alt="gtn"></Image>
                        </span>
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 "> Associate Software Engineer  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Currently</span></h3>
                        <Link href={'https://www.gtn.com.np'} className="hover:underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Greentick Nepal  </Link>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500 "> June 1, 2024 - Present </time>
                        <p className="mb-4 text-base font-normal text-gray-500 ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                            {/* <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg> */}
                            <Image src={'https://i0.wp.com/gtn.com.np/storage/2022/09/greentick-nepal-pvt-lt.png?fit=2294%2C755&ssl=1'} width={100} height={100} alt="gtn"></Image>
                        </span>
                        <h3 className="flex items-center text-lg font-semibold text-gray-900 "> Software Engineer Intern </h3>
                        <Link href={'https://www.gtn.com.np'} className="hover:underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Greentick Nepal  </Link>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500 "> 3 March , 2024 - 29 June 2024 </time>
                        <p className="mb-4 text-base font-normal text-gray-500 ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a>
                    </li>

                </ol>




            </div>
        </main>
    )
}