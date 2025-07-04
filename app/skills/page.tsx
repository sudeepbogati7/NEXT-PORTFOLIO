'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './scroll.css';
import { Braces } from 'lucide-react'
import Nav from "@/components/nav";
import { ExternalLink, Medal } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Brain, Trophy, Shuffle, GraduationCap, Sparkles } from "lucide-react"
import TechTabs from "./tech-tabs-horizontal";
import InteractiveSoftSkills from "./soft-skills";


// data
import { softSkills } from "@/data/skills";
import { certifications } from "@/data/certifications";
import Certifications from "./components/certifications";
import FallingText from "./components/falling-text";


export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 900 }); // Initialize AOS with a duration of 1000ms
    }, []);
    return (
        <>
            <section className="my-24">
                <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_top,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

                <div className="flex   mx-auto p-4 max-w-6xl w-full flex-col lg:flex-row items-center gap-8 mb-16">
                    {/* Left Column - Illustration */}
                    <div data-aos="fade-right" className="w-3/6  lg:w-2/6 flex justify-center">
                        <div className="relative w-full rounded-2xl overflow-hidden  p-6">
                            <Image
                                src="/skills_illustration.svg"
                                width={250}
                                height={400}
                                alt="Developer skills illustration"
                                className="object-contain  drop-shadow-lg"
                                priority
                            />
                            <div className="absolute -bottom-10 -right-10  w-40 h-40 bg-sky-600/10 rounded-full"></div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/10 rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Column - Description */}
                    <div data-aos="fade-left" className="w-full px-4 lg:w-3/4">
                        <h3 className="text-xl lg:text-3xl text-center md:text-left font-bold mb-4 font-black-ops-one text-indigo-900">Full Stack Development Expertise</h3>
                        <p className="text-gray-600 mb-6 text-base text-justify leading-relaxed">
                            As a Full Stack Software Engineer, I have experience in designing, developing, and deploying secure and scalable applications. I follow DevSecOps practices, ensuring security is integrated throughout the development process. From writing secure code to automating security checks in CI/CD pipelines, I focus on building reliable and well-protected software solutions.
                        </p>
                        <p className="text-gray-600 mb-8 text-justify leading-relaxed">
                            I have a deep understanding of the entire development lifecycle, from designing user-friendly interfaces to building efficient backend systems and managing databases. I ensure smooth deployment by optimizing server configurations, automating infrastructure management, and maintaining system reliability. By focusing on performance, security, and scalability, I deliver solutions that meet both technical and business needs.
                        </p>


                        <div className="flex flex-wrap gap-3 max-w-6xl">
                            {["NEXTjs", "Node.js", "Django", "AWS", "FastAPI", "Docker"].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                            <span className="px-4 py-2 bg-sky-600 text-white rounded-full text-sm font-medium">+ more</span>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-6xl mx-auto font-black-ops-one h-[30vh]"> <FallingText
                    text={`I expertise in Full Stack Development with Python, Django, FastAPI, AI, Langchain, JavaScript, React, Next.js, Tailwind CSS, PostgreSQL, Docker, and Linux.`}
                    highlightWords={["React", "Django", "FastAPI", "AI", "Docker", "Linux", "Python", 'JavaScript']}
                    highlightClass="highlighted"
                    trigger="hover"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2rem"
                    mouseConstraintStiffness={0.9}
                />
                </div>

                {/* [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] */}
                <div id="tech-stack" className="scroll imgBox md:w-4/6 w-full px-8 h-14 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
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
                        <span className=""><Image src={'/fastapi.svg'} width={38} height={38} alt="fast-api" /></span>

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
                        <span className=""><Image src={'/fastapi.svg'} width={38} height={38} alt="fast-api" /></span>

                    </div>
                </div>


                <TechTabs />



                <div className="font-bold text-xl md:text-2xl font-rowdies  text-gray-700 text-center mx-auto mt-16 gap-1 flex items-center w-fit mb-4">
                    <Braces className="mr-2" /> Web Application Development
                </div>
                <div className="flex  flex-col gap-4 md:flex-row justify-center mx-auto w-full xl:w-4/5 p-6 rounded-lg">
                    <div className="flex flex-col w-full">
                        <h2 data-aos="fade-up" className="font-semibold flex mx-auto text-center items-center gap-2 py-4 text-lg">
                            <Image src={"/frontend.png"} width={22} height={20} alt="frontend" />
                            Client Side (Frontend)
                        </h2>
                        <div className="flex flex-col items-center my-8 w-full md:w-4/5 mx-auto gap-8">
                            <div className="relative w-full">
                                <div className="flex flex-col gap-8 pl-12">
                                    <div data-aos="fade-up" className="absolute left-[18px] w-[3px] bg-gray-300 h-full"></div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-orange-400 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-1 border-orange-400 text-sm rounded-md px-2 bg-orange-100 font-semibold text-gray-700 flex items-center">
                                                <Image src={"/html.png"} width={16} height={16} alt="html" />
                                                HTML5
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                HTML is the language used to structure content and design interactive online experiences.
                                            </p>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-blue-500 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-1 border-blue-500 text-sm rounded-md px-2 bg-blue-100 font-semibold text-gray-700 flex items-center">
                                                <Image src={"/css.png"} width={16} height={16} alt="css" />
                                                CSS3
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Cascading Style Sheets is used to style and layout web pages, controlling the design, colors, and
                                                fonts to enhance the appearance and user experience.
                                            </p>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-[#61DBFB] rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 border-[#61DBFB] text-sm rounded-md px-2 bg-[#cff5ff] font-semibold text-gray-700 flex items-center">
                                                <Image src={"/react.png"} width={18} height={18} alt="react" />
                                                React JS
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                ReactJS is a JavaScript library for building user interfaces, particularly single-page applications,
                                                by enabling developers to create reusable UI components.
                                            </p>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-gray-500 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-1 border-gray-500 text-sm rounded-md px-2 bg-gray-200 font-semibold text-gray-700 flex items-center">
                                                <Image src={"/nextjs.svg"} width={16} height={16} alt="next.js" />
                                                NEXT.js
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Next.js is a React framework that enables server-side rendering and static site generation,
                                                providing an optimized and scalable way to build web applications.
                                            </p>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-[#06b6d4] rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-1 border-[#06b6d4] text-sm rounded-md px-2 bg-blue-100 font-semibold text-gray-700 flex items-center">
                                                <Image src={"/tailwind.svg"} width={16} height={16} alt="tailwind" />
                                                TailwindCSS
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Tailwind CSS is a utility-first CSS framework that allows to style web pages quickly by applying
                                                predefined classes directly to HTML elements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center flex-col w-full">
                        <h2 data-aos="fade-up" className="font-semibold mx-auto text-center gap-2 flex items-center py-4 text-lg">
                            <Image src={"/backend.png"} width={28} height={20} alt="backend" />
                            Server Side (Backend)
                        </h2>

                        <div className="flex flex-col items-center my-8 w-full md:w-4/5 mx-auto gap-8">
                            <div className="relative w-full">
                                <div className="flex flex-col gap-8 pl-12">
                                    <div data-aos="fade-up" className="absolute left-[18px] w-[3px] bg-gray-300 h-full"></div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-green-600 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 border-green-500 gap-2 text-sm rounded-md px-2 bg-green-200 font-semibold text-gray-700 flex items-center">
                                                <Image src={"/nodejs.png"} width={22} height={16} alt="nodejs" />
                                                NODE.js
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Node.js is a runtime environment that allows developers to run JavaScript on the server side,
                                                enabling the creation of scalable and high-performance network applications.
                                            </p>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-gray-500 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-2 border-green-500 text-sm rounded-md px-2 bg-gray-200 font-semibold text-gray-700 flex items-center">
                                                <Image src={"/expressjs.png"} width={16} height={16} alt="expressjs" />
                                                Express.js
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Express.js is a web application framework for Node.js, designed to simplify the development of web
                                                servers and APIs by providing robust features and middleware capabilities.
                                            </p>
                                        </div>
                                    </div>

                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-green-700 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-2 border-green-700 text-sm rounded-md px-2 bg-gray-200 font-semibold text-gray-700 flex items-center">
                                                <Image src={"/django.svg"} width={32} height={18} alt="django" />
                                                Django REST Framework
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Django is a high-level Python web framework that promotes rapid development and clean, pragmatic
                                                design, offering built-in features like authentication, ORM, and an admin interface.
                                            </p>
                                        </div>
                                    </div>

                                    {/* FastAPI - New Addition */}
                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-teal-500 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-2 border-teal-500 text-sm rounded-md px-2 bg-teal-100 font-semibold text-gray-700 flex items-center">
                                                <Image src={"/fastapi.svg"} width={16} height={16} alt="fastapi" />
                                                FastAPI
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                FastAPI is a modern, high-performance Python web framework for building APIs with automatic
                                                interactive documentation, based on standard Python type hints.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Flask - New Addition */}
                                    <div data-aos="fade-up" className="relative flex items-center w-full">
                                        <div className="flex flex-col items-start">
                                            <div className="absolute -left-1 w-4 h-4 bg-gray-800 rounded-full -ml-8"></div>
                                            <h2 className="border-l-4 gap-2 border-gray-800 text-sm rounded-md px-2 bg-gray-200 font-semibold text-gray-700 flex items-center">
                                                <Image src={"/python.svg"} width={16} height={16} alt="flask" />
                                                Flask
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-2">
                                                Flask is a lightweight WSGI web application framework in Python, designed to make getting started
                                                quick and easy, with the ability to scale up to complex applications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Soft skills section */}
                <div id="soft-skills" className="relative mt-6 w-full  bg-white  mx-auto">
                    {/* Top Wave */}
                    <div className="custom-shape-divider-top-1718303048 ">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="shape-fill"
                            ></path>
                        </svg>
                    </div>

                    <InteractiveSoftSkills />

                    {/* <div className="relative z-10 py-24 ">
                        <div className="flex gap-2 items-center font-bold text-2xl w-fit mx-auto">
                            <Sparkles className="w-6 h-6 text-sky-700" />
                            Soft Skills
                        </div>

                        <div className="text-gray-600 w-full px-6 md:w-4/6 text-justify mx-auto mt-4">
                            Strong soft skills are crucial for effective communication, teamwork, and problem-solving in software
                            development. These skills complement my technical abilities, helping me work well with others and adapt to new
                            challenges. Here are some of the key soft skills I offer:
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 w-full items-center mx-auto justify-center mt-8">
                            <div className="md:relative hidden md:block ">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-2xl"></div>
                                <Image
                                    src={"/teamwork.svg"}
                                    width={300}
                                    height={300}
                                    alt="Illustration showing various soft skills in action"
                                    className="relative z-10 drop-shadow-2xl rounded-lg"
                                />
                            </div>

                            <div className="flex flex-col justify-center gap-6 p-4">
                                {softSkills.map((skill, index) => (
                                    <div
                                        key={index}

                                        data-aos-delay={index * 100}
                                        className="flex gap-3 items-center font-semibold text-gray-700 hover:text-primary transition-colors group"
                                    >
                                        <skill.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}

                    {/* Bottom Wave */}
                    <div className="custom-shape-divider-bottom-1718303150">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path
                                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                className="shape-fill"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div id="certifications" className="my-4 font-sans">
                    <Certifications />
                </div>
            </section>

        </>
    )
}