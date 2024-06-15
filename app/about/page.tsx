'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Link from "next/link";
export default function About() {
    const [showMore, setShowMore] = useState(false);// om education section

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    useEffect(() => {
        AOS.init({ duration: 700 }); // Initialize AOS with a duration of 1000ms
    }, []);
    return (
        <>
        <head>
            <title>About || Sudeep Bogati </title>
        </head>
            <main className="mt-24">
                <div data-aos="fade-up" className=' pt-2 text-2xl font-semibold mx-auto px-2  text-center  my-4 flex items-center gap-2 w-fit  '> About <span className="text-blue-900">me</span> <Image className='h-6 w-6' src={'/about-me.png'} height={30} width={30} alt='about-me'></Image> </div>
                <div className='px-4 w-full flex flex-col md:flex-row items-center justify-center  md:w-4/5 xl:w-3/5 mx-auto'>
                    <span data-aos="fade-up" className="w-fit  mx-auto flex items-center "><Image src={'/about-coding.png'} width={220} height={220} alt="coding"></Image></span>
                    <div data-aos="fade-up" className='text-gray-700 text-base px-2 text-center w-full md:w-2/3'>The world of software engineering keeps me buzzing! I am a <span className="font-medium ">Full Stack Software Engineer</span>, which means I can design and build the entire picture – from the user-facing website or app you see, all the way down to the engine that makes it work. I love taking complex ideas and turning them into something smooth, functional, and user-friendly. Whether its building a sleek interface or tackling the trickier back-end stuff, I am up for the challenge!</div>
                    {/* <Link href={'/skills'}> <div className='mt-2 font-medium text-gray-500 tracking-wide border-b-2 transition-all duration-300  border-gray-400 w-fit hover:text-gray-900 hover:border-gray-700 text-xs '>  Know more about my skills and what I do  </div></Link> */}
                </div>



                <div data-aos="zoom-in" className="text-2xl font-semibold mx-auto px-2  text-center  my-8 flex items-center gap-2 w-fit "> My Education <Image src={'/education.png'} width={30} height={30} alt="education"></Image></div>
                <div className="px-6 w-full md:w-4/5 xl:w-3/5 mx-auto">
                    <ol data-aos="fade-up" className="relative border-s-2 border-gray-400 ">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-orange-400  ">
                                {/* <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg> */}
                                <Image src={'/tu.png'} width={100} height={100} alt="gtn"></Image>
                            </span>
                            <h3 className="flex items-center  font-bold text-gray-900 "> Bachelors in Information Technology ( BIT ) </h3>
                            <Link href={'https://www.tuiost.edu.np/'} className="underline flex tracking-wide text-base items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Tribhuvan University, Kathmandu </Link>
                            <time className="block italic mb-2 text-sm font-normal leading-none text-gray-500 "> 2021 - 2025 </time>
                            <div className="relative">
                                <div
                                    style={{ maxHeight: showMore ? '1000px' : '100px' }}
                                    className={`${showMore ? 'max-h-fit' : 'max-h-0'
                                        } overflow-hidden transition-all duration-500 relative`}
                                >
                                    <p className="mb-4 text-base font-normal text-gray-700">
                                        Studied Bachelor of Information Technology (BIT) from Tribhuvan University. My studies covered programming, databases, Web Development, Networking. I gained hands-on experience through projects and internships, developing strong IT and problem-solving skills.
                                    </p>
                                    <ol className="list-disc px-4 text-sm flex flex-col gap-2 overflow-hidden transition-all duration-500">
                                        <li>
                                            <span className="font-semibold">Programming</span>: Learned Java, C and C++.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Databases</span>: Managed and created databases using SQL as well as NoSQL.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Web Development</span>: Built websites using HTML, CSS, PHP and JavaScript.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Software Engineering</span>: Studied how to plan and build software projects.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Networking:</span> Learned about computer networks and security.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Information Systems:</span> Studied how to create systems to solve business problems.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Data Structures:</span> Learned about organizing and using data efficiently.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Hands-On Projects:</span> Gained real-world experience through projects and internships.
                                        </li>
                                    </ol>
                                </div>
                                {/* Mask */}
                                {!showMore && (
                                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
                                )}
                            </div>
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="flex gap-2 items-center mt-1 text-blue-500"
                            >
                                {showMore ? 'Read Less' : 'Read More'} {showMore ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a> */}
                        </li>
                        <li className="mb-10 ms-6">
                            <span data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                                <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                                {/* <Image src={'https://i0.wp.com/gtn.com.np/storage/2022/09/greentick-nepal-pvt-lt.png?fit=2294%2C755&ssl=1'} width={100} height={100} alt="gtn"></Image> */}
                            </span>
                            <h3 data-aos="fade-up" className="flex items-center text-base font-bold text-gray-900 "> +2 , Computer Science </h3>
                            <Link data-aos="fade-up" href={'https://sungavacollege.edu.np/'} className="underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Sungava College , Chitwan   </Link>
                            <time data-aos="fade-up" className="block italic mb-2 text-sm font-normal leading-none text-gray-500 "> 2019 - 2021 </time>
                            <div data-aos="fade-up" className="text-sm text-gray-600 tracking-wide">
                                <div> Grade XI CGPA : <span className="font-semibold">3.79</span> </div>
                                <div> Grade XII CGPA : <span className="font-semibold">3.59</span> </div>
                                <div>
                                    <span className="font-semibold">Major Subjects : </span> <span> Physics, Chemistry, Mathematics , Computer </span>
                                </div>
                            </div>
                            <Link data-aos="fade-up" target="_blank" className="flex text-gray-600 items-center gap-1 border-b-2 border-gray-300 hover:border-black transition-all duration-200 ease hover:text-black  w-fit my-4 " href={'https://drive.google.com/file/d/1HQmnNRXbOQFOO1TB0UoquRGiYusXoyur/view?usp=sharing'}> See more <Image src={'/redirect.png'} width={12} height={12} alt="see-more"></Image> </Link>
                            <p data-aos="fade-up" className="mb-4 text-base font-normal text-gray-700 "></p>
                            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a> */}
                        </li>

                    </ol>
                </div>

                <div data-aos="zoom-in" className="text-2xl flex font-semibold mx-auto px-2 justify-center text-center my-8 flex items-center gap-2 w-fit "> Work Experiences  <Image src={'/career.png'} width={34} height={34} alt="education"></Image> </div>
                <div className="px-6 mb-8 w-full md:w-4/5 xl:w-3/5 mx-auto">
                    <ol data-aos="fade-up" className="relative border-s-2 border-gray-400 ">
                        <li className="mb-10 ms-6">
                            <span  className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                                {/* <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg> */}
                                <Image src={'https://i0.wp.com/gtn.com.np/storage/2022/09/greentick-nepal-pvt-lt.png?fit=2294%2C755&ssl=1'} width={100} height={100} alt="gtn"></Image>
                            </span>
                            <h3  className="flex items-center text-lg font-semibold text-gray-900 "> Associate Software Engineer  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Currently</span></h3>
                            <Link  href={'https://www.gtn.com.np'} className="underline text-sm flex tracking-wide items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Greentick Nepal - Gyaneshwor, Kathmandu </Link>
                            <time  className="block mb-2 italic  text-sm font-normal leading-none text-gray-500 "> June 1, 2024 - Present </time>
                            <div  className={`relative flex flex-col transition-max-height duration-500 ease-in-out ${isExpanded ? 'max-h-fit' : 'max-h-24 overflow-hidden'}`}>
                                <p className="mb-4 text-base font-normal text-gray-600">
                                    Proactive Associate Software Developer with a strong background in full stack development. Experienced in designing and implementing user-friendly web applications, optimizing client-side and server-side services, and collaborating with cross-functional teams to deliver high-quality software solutions.
                                </p>
                                <h1 className="font-semibold text-gray-700 my-2 border-b-2 border-gray-300 w-fit">
                                    Key Responsibilities
                                </h1>
                                <div >
                                    <ol className="list-disc px-4 text-gray-700">
                                        <li>Developed and maintained web applications using React, Next.js, Tailwind CSS, and TypeScript for the frontend.</li>
                                        <li>Built and optimized backend services with Django Rest Framework and Python, ensuring robust and scalable server-side logic.</li>
                                        <li>Integrated RESTful APIs to connect the frontend with backend services, enhancing data retrieval and user interactions.</li>
                                        <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                                        <li>Implemented responsive design practices to ensure seamless user experiences across different devices.</li>
                                        <li>Participated in code reviews, debugging, and refactoring to maintain high-quality code standards.</li>
                                        <li>Used version control systems like Git for collaborative development and project management.</li>
                                    </ol>
                                </div>

                                <div className="flex flex-col gap-2 mt-2">
                                    <h1 className="font-semibold text-gray-700 my-2 border-b-2 border-gray-300 w-fit">
                                        Technical Stack
                                    </h1>
                                    <div>
                                        <ol className="list-disc px-4 text-gray-700">
                                            <li><span className="font-medium">Frontend:</span> React, Next.js, Tailwind CSS, TypeScript</li>
                                            <li><span className="font-medium">Backend:</span> Python, Django REST Framework</li>
                                            <li><span className="font-medium">Database:</span> MySQL, PostgreSQL</li>
                                            <li><span className="font-medium">Tools:</span> Docker, Git, GitHub</li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Mask */}
                                {!isExpanded && (
                                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
                                )}
                            </div>
                            <button data-aos="fade-up"
                                className={`mt-4 flex transition-all duration-500 items-center gap-2 text-blue-500 font-medium`}
                                onClick={toggleReadMore}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'} {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a> */}
                        </li>
                        <li  className="mb-10 ms-6">
                            <span data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                                {/* <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg> */}
                                <Image src={'https://i0.wp.com/gtn.com.np/storage/2022/09/greentick-nepal-pvt-lt.png?fit=2294%2C755&ssl=1'} width={100} height={100} alt="gtn"></Image>
                            </span>
                            <h3  data-aos="fade-up" className="flex items-center text-lg font-semibold text-gray-900 "> Software Engineer Intern </h3>
                            <Link data-aos="fade-up" href={'https://www.gtn.com.np'} className="underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Greentick Nepal- Gyaneshwor, Kathmandu </Link>
                            <time data-aos="fade-up" className="block italic mb-2 text-sm font-normal leading-none text-gray-500 "> 3 March , 2024 - 29 May, 2024 </time>
                            <p data-aos="fade-up" className="mb-4  font-normal text-gray-600 "> Dedicated Full Stack Developer Intern with experience in building web applications using React, Next.js, Tailwind CSS, TypeScript, Django Rest Framework, and Python. Skilled in creating user-friendly interfaces, connecting frontends to backends, and collaborating effectively with teams.</p>
                            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a> */}
                        </li>
                    </ol>
                </div>


                <div>
                    <div data-aos="zoom-in" className="text-2xl flex font-semibold mx-auto px-2 justify-center text-center my-8 flex items-center gap-2 w-fit "> Voluteering   <Image src={'/volunteer.png'} width={34} height={34} alt="education"></Image> </div>


                    <div className="px-6 w-full md:w-4/5 xl:w-3/5 mx-auto">
                        <ol  className="relative border-s-2 border-gray-400 ">
                            <li className="mb-10 ms-6">
                                <span data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 border border-gray-500  ">
                                    {/* <svg className="w-2.5 h-2.5 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg> */}
                                    <Image src={'/osac.png'} width={100} height={100} alt="gtn"></Image>
                                </span>
                                <h3 data-aos="fade-up" className="flex items-center  font-bold text-gray-900 "> Executive </h3>
                                <Link data-aos="fade-up" href={'https://osac.org.np/'} className="underline flex tracking-wide text-base items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Open-Source ASCOL Circle , OSAC </Link>
                                <time data-aos="fade-up" className="block italic mb-2 text-sm font-normal leading-none text-gray-500 "> 2023 - present </time>
                                <p data-aos="fade-up" className="mb-4 text-sm font-normal text-gray-700">OSAC (Open Source ASCOL Circle) is a group of lerners based primarily on Computer Science and Information Technologies students from Amrit Science College, Tribhuvan University, Nepal.</p>
                                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a> */}
                            </li>
                            <li className="mb-10 ms-6">
                                <span  data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -start-4 border border-[#92a91a]  ">
                                    <Image src={'/hult-prize.png'} width={100} height={100} alt="gtn"></Image>
                                </span>
                                <h3 data-aos="fade-up" className="flex items-center text-base font-bold text-gray-900 "> Judges and Expert Coordinator  </h3>
                                <Link data-aos="fade-up" href={'https://www.hultprize.org/'} className="underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Hult Prize, ASCOL   </Link>
                                <time data-aos="fade-up" className="block italic mb-2 text-sm font-normal leading-none text-gray-500 "> Sept 2023 - Feb 2024 </time>
                                <p data-aos="fade-up" className="mb-4 text-base font-normal text-gray-600 ">The Hult Prize is the worlds largest student social entrepreneurship competition. Run in partnership with the United Nations, student teams from universities from across the world compete to solve a pressing social issue by developing a scalable, sustainable social enterprise.</p>
                                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg> Download ZIP</a> */}
                            </li>

                        </ol>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-300 h-14 flex items-center justify-center">
                <div className="w-fit font-semibold text-sm text-gray-600 flex flex-wrap">&copy; 2024 Sudeep Bogati .All rights reserved.</div>
            </footer>
        </>
    )
}