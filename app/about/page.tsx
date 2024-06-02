'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Link from "next/link";
export default function About() {
    const [showMore, setShowMore] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 700 }); // Initialize AOS with a duration of 1000ms
      }, []);
    return (
        <main className="mt-16">
            <div className='px-4'>
                <div data-aos="fade-up" className='text-2xl font-semibold mx-auto px-2  text-center  my-4 flex items-center gap-2 w-fit  '> About me <Image className='h-6 w-6' src={'/about-me.png'} height={30} width={30} alt='about-me'></Image> </div>
                <p  data-aos="fade-up" className='text-gray-800 text-base'>I am Sudeep Bogati, a skilled <strong> Full Stack Software Engineer </strong>with a passion for crafting dynamic web applications. Whether its building sleek user interfaces with NEXT.js, managing server-side logic with Node.js,Django or handling data storage with MongoDB,PostgreSQL. I thrive on creating seamless, end-to-end solutions.</p>
                {/* <Link href={'/skills'}> <div className='mt-2 font-medium text-gray-500 tracking-wide border-b-2 transition-all duration-300  border-gray-400 w-fit hover:text-gray-900 hover:border-gray-700 text-xs '>  Know more about my skills and what I do  </div></Link> */}
            </div>



            <div data-aos="fade-up" className="text-2xl font-semibold mx-auto px-2  text-center  my-8 flex items-center gap-2 w-fit "> My Education </div>
            <div className="px-6">
                <ol className="relative border-s-2 border-gray-200 ">
                    <li className="mb-10 ms-6">
                        <span  data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                            {/* <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg> */}
                            <Image src={'/tu.png'} width={100} height={100} alt="gtn"></Image>
                        </span>
                        <h3  data-aos="fade-up" className="flex items-center text-lg font-bold text-gray-900 "> Bachelors in Information Technology ( BIT ) </h3>
                        <Link  data-aos="fade-up" href={'https://www.tuiost.edu.np/'} className="hover:underline flex tracking-wide text-base items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Tribhuvan University, Kathmandu </Link>
                        <time data-aos="fade-up" className="block mb-2 text-sm font-normal leading-none text-gray-500 "> 2021 - 2025 </time>
                        <div  data-aos="fade-up">
                            <p className="mb-4 text-base font-normal text-gray-700">
                                Studied Bachelor of Information Technology (BIT) from Tribhuvan University. My studies covered programming, databases, Web Development, Networking. I gained hands-on experience through projects and internships, developing strong IT and problem-solving skills.
                            </p>
                            <ol
                                className={`list-disc px-4 text-sm flex flex-col gap-2 overflow-hidden transition-all duration-400 ${showMore ? 'max-h-96' : 'max-h-0'}`}
                                style={{ maxHeight: showMore ? '1000px' : '0' }}
                            >
                                <li><span className="font-semibold">Programming</span>: Learned Java, C and C++.</li>
                                <li><span className="font-semibold">Databases</span>: Managed and created databases using SQL as well as NoSQL.</li>
                                <li><span className="font-semibold">Web Development</span>: Built websites using HTML, CSS, PHP and JavaScript.</li>
                                <li><span className="font-semibold">Software Engineering</span>: Studied how to plan and build software projects.</li>
                                <li><span className="font-semibold">Networking:</span> Learned about computer networks and security.</li>
                                <li><span className="font-semibold">Information Systems:</span> Studied how to create systems to solve business problems.</li>
                                <li><span className="font-semibold">Data Structures:</span> Learned about organizing and using data efficiently.</li>
                                <li><span className="font-semibold">Hands-On Projects:</span> Gained real-world experience through projects and internships.</li>
                            </ol>
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="flex items-center mt-1 text-blue-500"
                            >
                                {showMore ? 'Read Less' : 'Read More'} {showMore ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                        </div>
                        {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a> */}
                    </li>
                    <li  className="mb-10 ms-6">
                        <span  data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                            <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                            {/* <Image src={'https://i0.wp.com/gtn.com.np/storage/2022/09/greentick-nepal-pvt-lt.png?fit=2294%2C755&ssl=1'} width={100} height={100} alt="gtn"></Image> */}
                        </span>
                        <h3 data-aos="fade-up" className="flex items-center text-base font-bold text-gray-900 "> +2 , Computer Science </h3>
                        <Link data-aos="fade-up" href={'https://sungavacollege.edu.np/'} className="hover:underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Sungava College , Chitwan   </Link>
                        <time data-aos="fade-up" className="block mb-2 text-sm font-normal leading-none text-gray-500 "> 2019 - 2021 </time>
                        <div data-aos="fade-up" className="text-sm text-gray-500 tracking-wide">
                            <div> Grade XI CGPA : <span className="font-semibold">3.79</span> </div>
                            <div> Grade XII CGPA : <span className="font-semibold">3.59</span> </div>
                            <div>
                                <span className="font-semibold">Major Subjects : </span> <span> Physics, Chemistry, Mathematics , Computer </span>
                            </div>
                        </div>
                        <Link data-aos="fade-up" target="_blank" className="border border-blue-300 text-blue-600 hover:border-black transition-all duration-300 ease hover:text-black  px-2 rounded-md flex items-center w-fit my-4 " href={'https://drive.google.com/file/d/1HQmnNRXbOQFOO1TB0UoquRGiYusXoyur/view?usp=sharing'}> See more.... </Link>
                        <p data-aos="fade-up" className="mb-4 text-sm font-normal text-gray-500 "></p>
                        {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a> */}
                    </li>

                </ol>
            </div>

            <div  data-aos="fade-up" className="text-2xl font-semibold mx-auto px-2  text-center  my-8 flex items-center gap-2 w-fit "> My Experiences </div>
            <div className="px-6 mb-8">
                <ol  className="relative border-s-2 border-gray-200 ">
                    <li  className="mb-10 ms-6">
                        <span data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                            {/* <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg> */}
                            <Image src={'https://i0.wp.com/gtn.com.np/storage/2022/09/greentick-nepal-pvt-lt.png?fit=2294%2C755&ssl=1'} width={100} height={100} alt="gtn"></Image>
                        </span>
                        <h3 data-aos="fade-up" className="flex items-center text-base font-semibold text-gray-900 "> Associate Software Engineer  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Currently</span></h3>
                        <Link data-aos="fade-up" href={'https://www.gtn.com.np'} className="hover:underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Greentick Nepal  </Link>
                        <time data-aos="fade-up" className="block mb-2 text-sm font-normal leading-none text-gray-500 "> June 1, 2024 - Present </time>
                        <p data-aos="fade-up" className="mb-4 text-sm font-normal text-gray-500 ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                        {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a> */}
                    </li>
                    <li className="mb-10 ms-6">
                        <span data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                            {/* <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg> */}
                            <Image src={'https://i0.wp.com/gtn.com.np/storage/2022/09/greentick-nepal-pvt-lt.png?fit=2294%2C755&ssl=1'} width={100} height={100} alt="gtn"></Image>
                        </span>
                        <h3 data-aos="fade-up" className="flex items-center text-base font-semibold text-gray-900 "> Software Engineer Intern </h3>
                        <Link data-aos="fade-up" href={'https://www.gtn.com.np'} className="hover:underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Greentick Nepal  </Link>
                        <time data-aos="fade-up" className="block mb-2 text-sm font-normal leading-none text-gray-500 "> 3 March , 2024 - 29 June 2024 </time>
                        <p data-aos="fade-up" className="mb-4 text-sm font-normal text-gray-500 ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                        {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a> */}
                    </li>
                </ol>
            </div>
        </main>
    )
}