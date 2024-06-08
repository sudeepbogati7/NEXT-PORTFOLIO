'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './scroll.css';
export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 700 }); // Initialize AOS with a duration of 1000ms
    }, []);
    return (
        <>
            <section className="my-24">
                <h1 data-aos="zoom-in" className='mt-8 mb-4 text-2xl font-semibold mx-auto px-2  text-center  flex items-center gap-2 w-fit  '> My Skills <Image src={'/skills.png'} width={26} height={26} alt="skills"></Image>  </h1>
                <div className='px-4 w-full flex gap-2 flex-col md:flex-row items-center justify-center  md:w-4/5 xl:w-3/5 mx-auto'>
                    <span data-aos="fade-up" className="w-fit rounded-lg  mx-auto flex items-center "><Image src={'/skills-header.png'} width={250} height={60} alt="coding"></Image></span>
                    <p data-aos="fade-up" className='text-gray-700 mt-6 text-base px-6 w-full sm:w-2/3'>As a versatile Full Stack Software Engineer, I excel in both client-side and server-side development. My expertise includes building responsive user interfaces, developing robust server-side applications, managing databases, and implementing CI/CD pipelines. Additionally, I have experience with cloud services and DevOps practices, ensuring efficient deployment and scalable solutions. My comprehensive skill set allows me to deliver seamless, scalable, and efficient software solutions that meet and exceed client expectations.</p>
                </div>

                <div className="my-4 flex gap-2 items-center text-2xl font-semibold mx-auto px-4 w-fit text-center border-b-4 border-gray-300"> <Image src={'/hard-skills.png'} width={25} height={25} alt="hard-skills"></Image> Hard Skills </div>

                {/* [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] */}


                <div className="scroll imgBox md:w-[800px] w-full px-4 h-14 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <div>
                        <span className=""><Image src={'/html.png'} width={38} height={38} alt="html" /></span>
                        <span className=""><Image src={'/css.png'} width={38} height={38} alt="css" /></span>
                        <span className=""><Image src={'/js.png'} width={38} height={38} alt="js" /></span>
                        <span className=""><Image src={'/ts.png'} width={38} height={38} alt="ts" /></span>
                        <span className=""><Image src={'/python.png'} width={38} height={38} alt="python" /></span>
                        <span className=""><Image src={'/c.png'} width={38} height={38} alt="c" /></span>
                        <span className=""><Image src={'/nodejs.png'} width={38} height={38} alt="nodejs" /></span>
                        <span className=""><Image src={'/django.svg'} width={38} height={38} alt="django" /></span>
                        <span className=""><Image src={'/aws.svg'} width={38} height={38} alt="aws" /></span>
                        <span className=""><Image src={'/docker.png'} width={38} height={38} alt="docker" /></span>
                        <span className=""><Image src={'/react.png'} width={38} height={38} alt="docker" /></span>
                        <span className=""><Image src={'/nextjs.svg'} width={33} height={33} alt="nextjs" /></span>
                        <span className=""><Image src={'/tailwind.svg'} width={38} height={38} alt="tailwind" /></span>
                        <span className=""><Image src={'/numpy.svg'} width={38} height={38} alt="numpy" /></span>
                        <span className=""><Image src={'/pandas.svg'} width={38} height={38} alt="pandas" /></span>
                        <span className=""><Image src={'/seaborn-1.svg'} width={38} height={38} alt="seaborn" /></span>
                        <span className=""><Image src={'/nginx.svg'} width={38} height={38} alt="nginx" /></span>
                    </div>
                    <div>
                        <span className=""><Image src={'/html.png'} width={38} height={38} alt="html" /></span>
                        <span className=""><Image src={'/css.png'} width={38} height={38} alt="css" /></span>
                        <span className=""><Image src={'/js.png'} width={38} height={38} alt="js" /></span>
                        <span className=""><Image src={'/ts.png'} width={38} height={38} alt="ts" /></span>
                        <span className=""><Image src={'/python.png'} width={38} height={38} alt="python" /></span>
                        <span className=""><Image src={'/c.png'} width={38} height={38} alt="c" /></span>
                        <span className=""><Image src={'/nodejs.png'} width={38} height={38} alt="nodejs" /></span>
                        <span className=""><Image src={'/django.svg'} width={38} height={38} alt="django" /></span>
                        <span className=""><Image src={'/aws.svg'} width={38} height={38} alt="aws" /></span>
                        <span className=""><Image src={'/docker.png'} width={38} height={38} alt="docker" /></span>
                        <span className=""><Image src={'/react.png'} width={38} height={38} alt="docker" /></span>
                        <span className=""><Image src={'/nextjs.svg'} width={33} height={33} alt="nextjs" /></span>
                        <span className=""><Image src={'/tailwind.svg'} width={38} height={38} alt="tailwind" /></span>
                        <span className=""><Image src={'/numpy.svg'} width={38} height={38} alt="numpy" /></span>
                        <span className=""><Image src={'/pandas.svg'} width={38} height={38} alt="pandas" /></span>
                        <span className=""><Image src={'/seaborn-1.svg'} width={38} height={38} alt="seaborn" /></span>
                        <span className=""><Image src={'/nginx.svg'} width={38} height={38} alt="nginx" /></span>
                    </div>
                </div>

                <div className="flex items-center justify-center flex-col my-4  md:w-4/5 xl:w-3/5 mx-auto">
                    <h1 className="font-bold text-center mx-auto text-lg py-4 flex items-center gap-2"> Programming Languagues <Image src={'/lang.png'} width={20} height={20} alt="lang"></Image> </h1>
                    <ul className="flex flex-wrap px-4 mx-auto items-center justify-center md:flex-row gap-4">
                        <li className="flex border-2 shadow-lg shadow-yellow-500/40 rounded-md border-yellow-500  px-2 bg-yellow-100 items-center font-medium gap-2 "> <span className=" flex rounded overflow-hidden items-center border border-gray-700 justify-center w-fit "><Image src={'/js.png'} width={16} height={24} alt="js" /></span> JavaScript </li>
                        <li className="flex border-2 rounded-md shadow-lg shadow-blue-500/40 border-blue-500  px-2 bg-blue-100 items-center font-medium gap-2 "> <span className="flex items-center justify-center w-fit "><Image src={'/ts.png'} width={16} height={24} alt="js" /></span> TypeScript </li>
                        <li className="flex border-2 rounded-md shadow-lg shadow-orange-400/40 border-yellow-500  px-2 bg-blue-100 items-center font-medium gap-2 "> <span className="flex items-center justify-center w-fit "><Image src={'/python.png'} width={16} height={24} alt="js" /></span> Python </li>
                        <li className="flex border-2 rounded-md shadow-lg shadow-gray-600/40 border-gray-500  px-2 bg-gray-200 items-center font-medium gap-2 "> <span className="flex items-center justify-center w-fit "><Image src={'/c.png'} width={16} height={24} alt="js" /></span> C , C++  </li>
                    </ul>
                </div>
                <h1 className="font-bold text-center mx-auto text-lg gap-1 flex items-center w-fit mt-8 mb-4"><Image src={'/web-app.png'} width={24} height={24} alt="web-applications"></Image>Web Application Development </h1>
                <div className="flex flex-col gap-4 md:flex-row justify-center mx-auto w-full xl:w-3/4 ">
                    <div className="flex flex-col  w-full">
                        <h2 data-aos="fade-up" className="font-semibold flex mx-auto text-center items-center gap-2 py-4 text-lg"><Image src={'/frontend.png'} width={22} height={20} alt="frontend"></Image> Client Side (Frontend)</h2>
                        <div className="flex flex-col items-center my-8 w-5/6 md:w-4/5 mx-auto gap-8">
                            <div className="relative w-full">
                                <div className="flex flex-col gap-8 pl-12">
                                    <div data-aos="fade-up" className="absolute left-[18px] w-[3px] bg-gray-300 h-full"></div>
                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-orange-400 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-1 border-orange-400 text-sm rounded-md px-2 bg-orange-100 font-semibold text-gray-700 flex items-center">
                                                <Image src={'/html.png'} width={16} height={16} alt="html" />
                                                HTML5
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">HTML is the language used to structure content and design interactive online experiences.</p>
                                        </div>

                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-blue-500 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-1 border-blue-500 text-sm rounded-md px-2 bg-blue-100 font-semibold text-gray-700 flex items-center">
                                                <Image src={'/css.png'} width={16} height={16} alt="css" />
                                                CSS3
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">Cascading Style Sheets is used to style and layout web pages, controlling the design, colors, and fonts to enhance the appearance and user experience.</p>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-[#61DBFB] rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 border-[#61DBFB] text-sm rounded-md px-2 bg-[#cff5ff] font-semibold text-gray-700 flex items-center">
                                                <Image src={'/react.png'} width={18} height={18} alt="react" />
                                                React JS
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">ReactJS is a JavaScript library for building user interfaces, particularly single-page applications, by enabling developers to create reusable UI components.</p>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-gray-500 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-1 border-gray-500 text-sm rounded-md px-2 bg-gray-200 font-semibold text-gray-700 flex items-center">
                                                <Image src={'/nextjs.svg'} width={16} height={16} alt="next.js" />
                                                NEXT.js
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">Next.js is a React framework that enables server-side rendering and static site generation, providing an optimized and scalable way to build web applications.</p>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-[#06b6d4] rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-1 border-[#06b6d4] text-sm rounded-md px-2 bg-blue-100 font-semibold text-gray-700 flex items-center">
                                                <Image src={'/tailwind.svg'} width={16} height={16} alt="tailwind" />
                                                TailwindCSS
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">Tailwind CSS is a utility-first CSS framework that allows to style web pages quickly by applying predefined classes directly to HTML elements.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                    <div className="flex items-center  flex-col  w-full">
                        <h2 data-aos="fade-up" className="font-semibold mx-auto text-center gap-2 flex items-center py-4 text-lg">  <Image src={'/backend.png'} width={28} height={20} alt="frontend"></Image> Server Side (Backend) </h2>

                        <div className="flex flex-col items-center my-8 w-5/6 md:w-4/5 mx-auto gap-8">
                            <div className="relative w-full">
                                <div className="flex flex-col gap-12 pl-12">
                                    <div data-aos="fade-up" className="absolute left-[18px] w-[3px] bg-gray-300 h-full"></div>
                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-green-600 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 border-green-500 gap-2 text-sm rounded-md px-2 bg-green-200 font-semibold text-gray-700 flex items-center">
                                                <Image src={'/nodejs.png'} width={22} height={16} alt="html" />
                                                NODE.js
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">Node.js is a runtime environment that allows developers to run JavaScript on the server side, enabling the creation of scalable and high-performance network applications.</p>
                                        </div>

                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-gray-500 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-2 border-green-500 text-sm rounded-md px-2 bg-gray-200 font-semibold text-gray-700 flex items-center">
                                                <Image src={'/expressjs.png'} width={16} height={16} alt="css" />
                                                Express.js
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Express.js is a web application framework for Node.js, designed to simplify the development of web servers and APIs by providing robust features and middleware capabilities.
                                            </p>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-green-700 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-2 border-green-700 text-sm rounded-md px-2 bg-gray-200 font-semibold text-gray-700 flex items-center">
                                                <Image src={'/django.svg'} width={32} height={18} alt="react" />
                                                Django REST Framework
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design, offering built-in features like authentication, ORM, and an admin interface.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 data-aos="fade-up" className="flex items-center gap-2 font-bold text-xl mx-auto w-fit my-4"> <Image src={'/tools.png'} height={16} width={20} alt="tools"></Image> Tools </h1>
                    <div data-aos="fade-up" className="flex gap-4 flex-wrap px-2 mx-auto items-center justify-center">
                        <span className="border-2 shadow-lg shadow-orange-400/50 cursor-pointer py-1 text-sm text-gray-700 border-orange-400 w-fit px-2 rounded bg-orange-100 flex items-center gap-2 font-medim"><Image src={'/git.png'} width={22} height={24} alt="git"></Image>Git </span>
                        <span className="border-2 shadow-lg shadow-gray-800/50 cursor-pointer py-1 text-sm text-gray-700 border-gray-500 w-fit px-2 rounded bg-gray-200 flex items-center gap-2 font-medim"><Image src={'/github.png'} width={22} height={24} alt="git"></Image>Github </span>
                        <span className="border-2 shadow-lg shadow-blue-600/50 cursor-pointer py-1 text-sm text-gray-700 border-blue-600 w-fit px-2 rounded bg-blue-100 flex items-center gap-2 font-medim"><Image src={'/docker.png'} width={22} height={24} alt="git"></Image>Docker </span>
                        <span className="border-2 shadow-lg shadow-orange-800/50 cursor-pointer py-1 text-sm text-gray-700 border-orange-500 w-fit px-2 rounded bg-gray-200 flex items-center gap-2 font-medim"><Image src={'/aws.svg'} width={22} height={24} alt="git"></Image> AWS Cloud  </span>
                    </div>
                </div>

                <div className="my-8">
                    <h1 data-aos="fade-up" className="flex items-center gap-2 font-bold text-xl mx-auto w-fit my-6"> <Image src={'/certificates.png'} height={16} width={24} alt="tools"></Image> License and Certifications </h1>
                    <div className="flex flex-col w-full xl:w-2/3 mx-auto px-4 items-center justify-center md:flex-row gap-6">
                        <div className="flex flex-col gap-4 w-full items-center justify-center ">
                            <div data-aos="fade-up" className="w-full bg-gray-50 shadow-lg flex justify-start p-4 rounded-lg mx-auto gap-4 border-2 border-gray-400">
                                <div className="p-4 w-fit">
                                    <Image src={'/aws.svg'} width={60} height={40} alt="aws-certification" ></Image>
                                </div>
                                <div className="w-fit flex flex-col ">
                                    <h2 className="font-semibold"> AWS Cloud Technical Essentials </h2>
                                    <h3>Amazon Web Services </h3>
                                    <time className="text-gray-500">Issued March 2024</time>
                                    <Link className="py-2" target="_blank" href={'https://www.coursera.org/account/accomplishments/certificate/Y4NPZGC92EKD'}> <span className="flex text-sm items-center gap-2 bg-gray-200 px-2 border-2 border-gray-500 rounded-lg w-fit text-gray-700 " >Show credential <Image src={'/redirect.png'} width={14} height={20} alt="show-credentials"></Image></span> </Link>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="w-full bg-gray-50 shadow-lg flex justify-start p-4 rounded-lg mx-auto gap-4 border-2 border-gray-400">
                                <div className="p-4 w-fit">
                                    <Image src={'/meta.png'} width={60} height={40} alt="aws-certification" ></Image>
                                </div>
                                <div className="w-fit flex flex-col ">
                                    <h2 className="font-semibold"> React </h2>
                                    <h3>Meta  </h3>
                                    <time className="text-gray-500">Issued Feb 2024</time>
                                    <Link className="py-2" href={'#'}> <span className="flex text-sm items-center gap-2 bg-gray-200 px-2 border-2 border-gray-500 rounded-lg w-fit text-gray-700 " >Show credential <Image src={'/redirect.png'} width={14} height={20} alt="show-credentials"></Image></span> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full  flex-col gap-4 items-center justify-center ">
                            <div data-aos="fade-up" className="w-full bg-gray-50 shadow-lg flex justify-start p-4 rounded-lg mx-auto gap-4 border-2 border-gray-400">
                                <div className="p-4 w-fit">
                                    <Image src={'/meta.png'} width={60} height={40} alt="aws-certification" ></Image>
                                </div>
                                <div className="w-fit flex flex-col ">
                                    <h2 className="font-semibold"> Programming with JavaScript </h2>
                                    <h3> Meta  </h3>
                                    <time className="text-gray-500">Issued Sept 2023</time>
                                    <Link className="py-2" href={'#'}> <span className="flex text-sm items-center gap-2 bg-gray-200 px-2 border-2 border-gray-500 rounded-lg w-fit text-gray-700 " >Show credential <Image src={'/redirect.png'} width={14} height={20} alt="show-credentials"></Image></span> </Link>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="w-full bg-gray-50 shadow-lg flex justify-start p-4 rounded-lg mx-auto gap-4 border-2 border-gray-400">
                                <div className="p-4 w-fit">
                                    <Image src={'/dl.png'} width={60} height={40} alt="aws-certification" ></Image>
                                </div>
                                <div className="w-fit flex flex-col ">
                                    <h2 className="font-semibold"> Deep Learning and Neural Networks </h2>
                                    <h3> DeepLearning.AI  </h3>
                                    <time className="text-gray-500">Issued Sept 2023</time>
                                    <Link className="py-2" href={'#'}> <span className="flex text-sm items-center gap-2 bg-gray-200 px-2 border-2 border-gray-500 rounded-lg w-fit text-gray-700 " >Show credential <Image src={'/redirect.png'} width={14} height={20} alt="show-credentials"></Image></span> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <footer className="bg-gray-300 h-14 flex items-center justify-center">
                <div className="w-fit font-semibold text-sm text-gray-600 flex flex-wrap">&copy; 2024 Sudeep Bogati .All rights reserved.</div>
            </footer>
        </>
    )
}