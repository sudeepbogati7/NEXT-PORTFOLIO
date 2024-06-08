'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './scroll.css';
export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 700 }); // Initialize AOS with a duration of 1000ms
    }, []);
    return (
        <section className="my-20">
            <h1 data-aos="zoom-in" className='mt-8 mb-4 text-2xl font-semibold mx-auto px-2  text-center  flex items-center gap-2 w-fit  '> My Skills <Image src={'/skills.png'} width={26} height={26} alt="skills"></Image>  </h1>
            <div className='px-4 w-full flex gap-2 flex-col md:flex-row items-center justify-center  md:w-4/5 xl:w-3/5 mx-auto'>
                <span data-aos="fade-up" className="w-fit rounded-lg  mx-auto flex items-center "><Image src={'/skills-header.png'} width={250} height={60} alt="coding"></Image></span>
                <p data-aos="fade-up" className='text-gray-700 mt-6 text-base px-6 w-full sm:w-2/3'>As a versatile Full Stack Software Engineer, I excel in both client-side and server-side development. My expertise includes building responsive user interfaces, developing robust server-side applications, managing databases, and implementing CI/CD pipelines. Additionally, I have experience with cloud services and DevOps practices, ensuring efficient deployment and scalable solutions. My comprehensive skill set allows me to deliver seamless, scalable, and efficient software solutions that meet and exceed client expectations.</p>
            </div>

            <div data-aos="fade-up" className="my-4 text-2xl font-semibold mx-auto px-4 w-fit text-center border-b-4 border-gray-300">Hard Skills </div>

            {/* [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] */}


            <div  className="scroll imgBox md:w-[700px] w-full px-4 h-14 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div>
                    <span className=""><Image src={'/html.png'} width={34} height={34} alt="html" /></span>
                    <span className=""><Image src={'/css.png'} width={34} height={34} alt="css" /></span>
                    <span className=""><Image src={'/js.png'} width={34} height={34} alt="js" /></span>
                    <span className=""><Image src={'/ts.png'} width={34} height={34} alt="ts" /></span>
                    <span className=""><Image src={'/python.png'} width={34} height={34} alt="python" /></span>
                    <span className=""><Image src={'/c.png'} width={34} height={34} alt="c" /></span>
                    <span className=""><Image src={'/nodejs.png'} width={34} height={34} alt="nodejs" /></span>
                    <span className=""><Image src={'/django.svg'} width={36} height={36} alt="django" /></span>
                    <span className=""><Image src={'/aws.svg'} width={36} height={36} alt="aws" /></span>
                    <span className=""><Image src={'/docker.png'} width={36} height={36} alt="docker" /></span>
                    <span className=""><Image src={'/react.png'} width={36} height={36} alt="docker" /></span>
                    <span className=""><Image src={'/nextjs.svg'} width={33} height={33} alt="nextjs" /></span>
                    <span className=""><Image src={'/tailwind.svg'} width={36} height={36} alt="tailwind" /></span>
                    <span className=""><Image src={'/numpy.svg'} width={36} height={36} alt="numpy" /></span>
                    <span className=""><Image src={'/pandas.svg'} width={32} height={32} alt="pandas" /></span>
                    <span className=""><Image src={'/seaborn-1.svg'} width={36} height={32} alt="seaborn" /></span>
                    <span className=""><Image src={'/nginx.svg'} width={36} height={32} alt="nginx" /></span>
                </div>
                <div>
                    <span className=""><Image src={'/html.png'} width={34} height={34} alt="html" /></span>
                    <span className=""><Image src={'/css.png'} width={34} height={34} alt="css" /></span>
                    <span className=""><Image src={'/js.png'} width={34} height={34} alt="js" /></span>
                    <span className=""><Image src={'/ts.png'} width={34} height={34} alt="ts" /></span>
                    <span className=""><Image src={'/python.png'} width={34} height={34} alt="python" /></span>
                    <span className=""><Image src={'/c.png'} width={34} height={34} alt="c" /></span>
                    <span className=""><Image src={'/react.png'} width={34} height={34} alt="c" /></span>
                    <span className=""><Image src={'/nodejs.png'} width={34} height={34} alt="nodejs" /></span>
                    <span className=""><Image src={'/django.svg'} width={36} height={36} alt="django" /></span>
                    <span className=""><Image src={'/aws.svg'} width={36} height={36} alt="aws" /></span>
                    <span className=""><Image src={'/docker.png'} width={36} height={36} alt="docker" /></span>
                    <span className=""><Image src={'/nextjs.svg'} width={33} height={33} alt="nextjs" /></span>
                    <span className=""><Image src={'/tailwind.svg'} width={36} height={36} alt="tailwind" /></span>
                    <span className=""><Image src={'/numpy.svg'} width={36} height={36} alt="numpy" /></span>
                    <span className=""><Image src={'/pandas.svg'} width={32} height={32} alt="pandas" /></span>
                    <span className=""><Image src={'/seaborn-1.svg'} width={36} height={32} alt="seaborn" /></span>
                    <span className=""><Image src={'/nginx.svg'} width={36} height={32} alt="nginx" /></span>
                </div>
            </div>

            <div className="flex items-center justify-center flex-col my-4  md:w-4/5 xl:w-3/5 mx-auto">
                <h1 data-aos="fade-up" className="font-semibold text-center mx-auto text-xl py-4 flex items-center gap-2"> Programming Languagues <Image src={'/lang.png'} width={20} height={20} alt="lang"></Image> </h1>
                <ul className="flex flex-wrap px-4 mx-auto items-center justify-center md:flex-row gap-4">
                    <li data-aos="zoom-in" className="flex border-2 rounded-md border-yellow-500  px-2 bg-yellow-100 items-center font-medium gap-2 "> <span className=" flex rounded overflow-hidden items-center border border-gray-700 justify-center w-fit "><Image src={'/js.png'} width={16} height={24} alt="js" /></span> JavaScript </li>
                    <li data-aos="zoom-in" className="flex border-2 rounded-md border-blue-500  px-2 bg-blue-100 items-center font-medium gap-2 "> <span className="flex items-center justify-center w-fit "><Image src={'/ts.png'} width={16} height={24} alt="js" /></span> TypeScript </li>
                    <li data-aos="zoom-in" className="flex border-2 rounded-md border-yellow-500  px-2 bg-blue-100 items-center font-medium gap-2 "> <span className="flex items-center justify-center w-fit "><Image src={'/python.png'} width={16} height={24} alt="js" /></span> Python </li>
                    <li data-aos="zoom-in" className="flex border-2 rounded-md border-gray-500  px-2 bg-gray-200 items-center font-medium gap-2 "> <span className="flex items-center justify-center w-fit "><Image src={'/c.png'} width={16} height={24} alt="js" /></span> C , C++  </li>
                </ul>
            </div>
            <h1 data-aos="fade-up" className="font-semibold text-center mx-auto text-xl gap-2 flex items-center w-fit px-4 mt-8 mb-6"><Image src={'/web-app.png'} width={30} height={30} alt="web-applications"></Image>Web Application Development </h1>
            <div  className="flex flex-col gap-4 md:flex-row justify-center mx-auto w-full xl:w-3/4 ">
                <div className="flex flex-col  w-full">
                    <h2 data-aos="fade-up" className="font-semibold flex mx-auto text-center items-center gap-2 py-4 text-lg"><Image src={'/frontend.png'} width={22} height={20} alt="frontend"></Image> Client Side (Fronted)</h2>
                    <div className="flex flex-col my-4 md:w-4/5 w-5/6  mx-auto justify-center gap-3">
                        <div data-aos="fade-up" >
                            <h2 className="border-2 text-sm border-orange-400 w-fit rounded-md px-1 bg-orange-100 flex items-center gap-1 font-semibold text-gray-700"> <span className=""><Image src={'/html.png'} width={16} height={16} alt="html" /></span>HTML5</h2>
                            <p className="text-sm  text-gray-500">HTML is the language used to create web pages, allowing developers to structure content and design interactive online experiences.</p>
                        </div>
                        <div data-aos="fade-up" >
                            <h2 className="border-2 text-sm border-blue-500 w-fit rounded-md px-1 bg-blue-100 flex items-center gap-1 font-semibold text-gray-700"> <span className=""><Image src={'/css.png'} width={16} height={16} alt="html" /></span>CSS3</h2>
                            <p className="text-sm text-gray-500">CSS, or Cascading Style Sheets, is used to style and layout web pages, controlling the design, colors, and fonts to enhance the appearance and user experience.</p>
                        </div>
                        <div data-aos="fade-up" >
                            <h2 className=" border-2 text-sm border-[#61DBFB] w-fit rounded-md px-1 bg-[#cff5ff] flex items-center gap-1 font-semibold text-gray-700"> <span className=""><Image src={'/react.png'} width={18} height={18} alt="html" /></span>React JS</h2>
                            <p className="text-sm text-gray-500"> ReactJS is a JavaScript library for building user interfaces, particularly single-page applications, by enabling developers to create reusable UI components.</p>
                        </div>
                        <div data-aos="fade-up" >
                            <h2 className="border-2 text-sm border-gray-500 w-fit rounded-md px-1 bg-gray-100 flex items-center gap-1 font-semibold text-gray-700"> <span className=""><Image src={'/nextjs.svg'} width={16} height={16} alt="html" /></span>NEXT.js</h2>
                            <p className="text-sm text-gray-500">Next.js is a React framework that enables server-side rendering and static site generation, providing an optimized and scalable way to build web applications.</p>
                        </div>
                        <div data-aos="fade-up">
                            <h2 className="border-2 text-sm border-[#06b6d4] w-fit rounded-md px-1 bg-blue-100 flex items-center gap-1 font-semibold text-gray-700"> <span className=""><Image src={'/tailwind.svg'} width={16} height={16} alt="html" /></span>TailwindCSS</h2>
                            <p className="text-sm text-gray-500">Tailwind CSS is a utility-first CSS framework that allows developers to style web pages quickly by applying predefined classes directly to HTML elements.</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center  flex-col  w-full">
                    <h2 className="font-semibold mx-auto text-center gap-2 flex items-center py-4 text-lg">  <Image src={'/backend.png'} width={28} height={20} alt="frontend"></Image> Server Side (Backend) </h2>
                    <div className="flex my-4 flex-col md:w-4/5 w-5/6 justify-start gap-3">
                        <div data-aos="fade-up" >
                            <h3 className="border-2 text-sm border-green-500 w-fit rounded-md px-1 bg-green-50  flex items-center gap-1 font-semibold text-gray-700"> <span className=""><Image src={'/nodejs.png'} width={24} height={16} alt="nodejs" /></span>NODE.js</h3>
                            <p className="text-sm text-gray-500">Node.js is a runtime environment that allows developers to run JavaScript on the server side, enabling the creation of scalable and high-performance network applications.</p>
                        </div>
                        <div data-aos="fade-up">
                            <h2 className="border-2 text-sm border-gray-500 w-fit rounded-md px-1 bg-gray-100  flex items-center gap-1 font-semibold text-gray-700"> <span className="flex items-center "><Image src={'/expressjs.png'} width={20} height={16} alt="expressjs" /></span>Express.js</h2>
                            <p className="text-sm text-gray-500">Express.js is a web application framework for Node.js, designed to simplify the development of web servers and APIs by providing robust features and middleware capabilities.</p>
                        </div>
                        <div data-aos="fade-up">
                            <h2 className="border-2 text-sm border-green-600 w-fit rounded-md px-1 bg-gray-100  flex items-center gap-1 font-semibold text-gray-700"> <span className=" py-1 px-2 rounded-xl"><Image src={'/django.svg'} width={32} height={25} alt="html" /></span>Django REST Framework</h2>
                            <p className="text-sm text-gray-500">Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design, offering built-in features like authentication, ORM, and an admin interface.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}