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
        <section className="mt-20">
            <h1 data-aos="zoom-in" className='mt-8 mb-4 text-2xl font-semibold mx-auto px-2  text-center  flex items-center gap-2 w-fit  '> My Skills <Image src={'/skills.png'} width={26} height={26} alt="skills"></Image>  </h1>
            <div className='px-4 w-full flex gap-2 flex-col md:flex-row items-center justify-center  md:w-4/5 xl:w-3/5 mx-auto'>
                <span data-aos="fade-up" className="w-fit rounded-lg  mx-auto flex items-center "><Image src={'/skills-header.png'} width={250} height={60} alt="coding"></Image></span>
                <p data-aos="fade-up" className='text-gray-700 mt-6 text-base px-6 w-full sm:w-2/3'>As a versatile Full Stack Software Engineer, I excel in both client-side and server-side development. My expertise includes building responsive user interfaces, developing robust server-side applications, managing databases, and implementing CI/CD pipelines. Additionally, I have experience with cloud services and DevOps practices, ensuring efficient deployment and scalable solutions. My comprehensive skill set allows me to deliver seamless, scalable, and efficient software solutions that meet and exceed client expectations.</p>
            </div>

            <div data-aos="fade-up" className="my-4 text-2xl font-semibold mx-auto px-2 text-center ">Hard Skills </div>

            {/* [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] */}


            <div data-aos="zoom-in" className="scroll imgBox md:w-[700px] w-full px-4 h-14 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
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


            <div>
                <div className="flex items-center justify-center flex-col my-4">
                    <h1 className="font-semibold text-center mx-auto text-lg py-4"> Programming Languagues </h1>
                    <ul className="flex flex-wrap px-4 mx-auto items-center justify-center md:flex-row gap-4">
                        <li className="flex border-2 rounded-md border-yellow-500  px-2 bg-yellow-100 items-center font-medium gap-2 "> <span className=" flex rounded overflow-hidden items-center border border-gray-700 justify-center w-fit "><Image src={'/js.png'} width={16} height={24} alt="js" /></span> JavaScript </li>
                        <li className="flex border-2 rounded-md border-blue-500  px-2 bg-blue-100 items-center font-medium gap-2 "> <span className="flex items-center justify-center w-fit "><Image src={'/ts.png'} width={16} height={24} alt="js" /></span> TypeScript </li>
                        <li className="flex border-2 rounded-md border-yellow-500  px-2 bg-blue-100 items-center font-medium gap-2 "> <span className="flex items-center justify-center w-fit "><Image src={'/python.png'} width={16} height={24} alt="js" /></span> Python </li>
                        <li className="flex border-2 rounded-md border-gray-500  px-2 bg-gray-200 items-center font-medium gap-2 "> <span className="flex items-center justify-center w-fit "><Image src={'/c.png'} width={16} height={24} alt="js" /></span> C , C++  </li>
                    </ul>
                </div>
                <h1 className="font-semibold text-center mx-auto text-lg w-full ">Web Application Development </h1>
                <div className="flex  justify-around w-full md:w-2/3 mx-auto">
                    <div>
                        <h2> Client Side (Fronted) </h2>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>REACT.js</li>
                            <li>NEXT.js</li>
                            <li>TailwindCSS</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Server Side (Backend) </h2>
                        <ul>
                            <li>NODE.js</li>
                            <li>Express.js</li>
                            <li>Django REST Framework </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}