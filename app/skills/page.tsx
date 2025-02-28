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
import { MessageSquare, Users, Brain, Trophy, Shuffle, GraduationCap, Sparkles } from "lucide-react"
export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 900 }); // Initialize AOS with a duration of 1000ms
    }, []);

    const languages = [
        {
            name: "JavaScript",
            image: "/js.png",
            borderColor: "border-yellow-500",
            shadowColor: "shadow-yellow-500/40",
            bgColor: "bg-yellow-100",
        },
        {
            name: "TypeScript",
            image: "/ts.png",
            borderColor: "border-blue-500",
            shadowColor: "shadow-blue-500/40",
            bgColor: "bg-blue-100",
        },
        {
            name: "Python",
            image: "/python.png",
            borderColor: "border-yellow-500",
            shadowColor: "shadow-orange-400/40",
            bgColor: "bg-blue-100",
        },
        {
            name: "C/C++",
            image: "/c.png",
            borderColor: "border-gray-500",
            shadowColor: "shadow-gray-600/40",
            bgColor: "bg-gray-200",
        },
        {
            name: "C#",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
            borderColor: "border-purple-500",
            shadowColor: "shadow-purple-500/40",
            bgColor: "bg-purple-100",
        },
        {
            name: "SQL",
            image: "/sql.svg",
            borderColor: "border-teal-500",
            shadowColor: "shadow-teal-500/40",
            bgColor: "bg-teal-100",
        },
    ]
    const tools = [
        {
            name: "Git",
            icon: "/git.png",
            borderColor: "border-orange-400",
            shadowColor: "shadow-orange-400/50",
            bgColor: "bg-orange-100",
        },
        {
            name: "Github",
            icon: "/github.png",
            borderColor: "border-gray-500",
            shadowColor: "shadow-gray-800/50",
            bgColor: "bg-gray-200",
        },
        {
            name: "Docker",
            icon: "/docker.png",
            borderColor: "border-blue-600",
            shadowColor: "shadow-blue-600/50",
            bgColor: "bg-blue-100",
        },
        {
            name: "AWS Cloud",
            icon: "/aws.svg",
            borderColor: "border-orange-500",
            shadowColor: "shadow-orange-800/50",
            bgColor: "bg-gray-200",
        },
        {
            name: "Nginx",
            icon: "/nginx.svg",
            borderColor: "border-green-600",
            shadowColor: "shadow-green-600/50",
            bgColor: "bg-green-100",
        },
        {
            name: "RabbitMQ",
            icon: "/rabbitmq.svg",
            borderColor: "border-orange-500",
            shadowColor: "shadow-orange-500/50",
            bgColor: "bg-orange-50",
        },
    ]


    const databases = [
        {
            name: "MySQL",
            icon: "/mysql.png",
            borderColor: "border-blue-900",
            shadowColor: "shadow-indigo-500/50",
            bgColor: "bg-blue-100",
        },
        {
            name: "PostgreSQL",
            icon: "/postgresql.svg",
            borderColor: "border-blue-700",
            shadowColor: "shadow-blue-500/50",
            bgColor: "bg-blue-100",
        },
        {
            name: "MongoDB",
            icon: "/mongodb.svg",
            borderColor: "border-green-400",
            shadowColor: "shadow-green-500/30",
            bgColor: "bg-green-100",
        },
        {
            name: "Elasticsearch",
            icon: "/elastic.svg",
            borderColor: "border-yellow-500",
            shadowColor: "shadow-yellow-500/40",
            bgColor: "bg-yellow-50",
        },
        {
            name: "Redis",
            icon: "/redis.svg",
            borderColor: "border-red-500",
            shadowColor: "shadow-red-500/40",
            bgColor: "bg-red-50",
        },
    ]



    const softSkills = [
        {
            name: "Communication Skills",
            icon: MessageSquare,
        },
        {
            name: "Teamwork and Collaboration",
            icon: Users,
        },
        {
            name: "Problem-Solving and Critical Thinking",
            icon: Brain,
        },
        {
            name: "Leadership and Management",
            icon: Trophy,
        },
        {
            name: "Adaptability and Flexibility",
            icon: Shuffle,
        },
        {
            name: "Personal Development",
            icon: GraduationCap,
        },
    ]

    const certifications = [
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg",
            title: "Fortinet Certified Fundamentals in Cybersecurity",
            issuer: "Fortinet",
            date: "Feb 2025",
            credentialLink: "https://training.fortinet.com/pluginfile.php/1/tool_certificate/issues/1740675772/8926231707SB.pdf",
        },
        {
            logo: "/freecodecamp.svg",
            title: "Foundational C# with Microsoft",
            issuer: "FreeCodeCamp",
            date: "Feb 2025",
            credentialLink: "https://www.freecodecamp.org/certification/sudeepbogati1/foundational-c-sharp-with-microsoft",
        },
        {
            logo: "/aws.svg",
            title: "AWS Cloud Technical Essentials",
            issuer: "Amazon Web Services",
            date: "March 2024",
            credentialLink: "https://www.coursera.org/account/accomplishments/certificate/Y4NPZGC92EKD",
        },
        {
            logo: "/meta.png",
            title: "React",
            issuer: "Meta",
            date: "Feb 2024",
            credentialLink: "https://www.coursera.org/account/accomplishments/certificate/6WQVDPNQP299",
        },
        {
            logo: "/meta.png",
            title: "Programming with JavaScript",
            issuer: "Meta",
            date: "Sept 2023",
            credentialLink: "https://www.coursera.org/account/accomplishments/certificate/3SK63CHTPMZE",
        },
        {
            logo: "/dl.png",
            title: "Deep Learning and Neural Networks",
            issuer: "DeepLearning.AI",
            date: "Sept 2023",
            credentialLink: "https://www.coursera.org/account/accomplishments/certificate/AXVXYG72PSD8",
        },

    ]
    return (
        <>
            <section className="my-24">
                <div className="flex   mx-auto p-4 md:w-4/6 w-full flex-col lg:flex-row items-center gap-8 mb-16">
                    {/* Left Column - Illustration */}
                    <div data-aos="fade-right" className="w-4/6  lg:w-2/6 flex justify-center">
                        <div className="relative w-full rounded-2xl overflow-hidden  p-6">
                            <Image
                                src="/skills_illustration.svg"
                                width={400}
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
                        <h3 className="text-xl text-center md:text-left font-bold mb-4 text-indigo-900">Full Stack Development Expertise</h3>
                        <p className="text-gray-600 mb-6 text-justify leading-relaxed">
                            As a Full Stack Software Engineer, I have experience in designing, developing, and deploying secure and scalable applications. I follow DevSecOps practices, ensuring security is integrated throughout the development process. From writing secure code to automating security checks in CI/CD pipelines, I focus on building reliable and well-protected software solutions.
                        </p>
                        <p className="text-gray-600 mb-8 text-justify leading-relaxed">
                            I have a deep understanding of the entire development lifecycle, from designing user-friendly interfaces to building efficient backend systems and managing databases. I ensure smooth deployment by optimizing server configurations, automating infrastructure management, and maintaining system reliability. By focusing on performance, security, and scalability, I deliver solutions that meet both technical and business needs.
                        </p>


                        <div className="flex flex-wrap gap-3">
                            {["NEXTjs", "Node.js", "Django", "AWS", "FastAPI", "Docker"].map((skill) => (
                                <span key={skill} className="px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                            <span className="px-4 py-2 bg-sky-600 text-white rounded-full text-sm font-medium">+ more</span>
                        </div>
                    </div>
                </div>


                {/* [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] */}
                <div className="scroll imgBox md:w-4/6 w-full px-8 h-14 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
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

                <div className="flex items-start bg-sky-100 rounded-lg p-4 flex-col my-8 md:w-4/5 xl:w-4/6 mx-auto">
                    <h1 className="font-bold px-2 text-xl text-gray-600 py-4 flex items-center gap-2">
                        Programming Languages
                        <Image src={"/lang.png"} width={24} height={24} alt="Programming languages icon" />
                    </h1>

                    <div className="w-full  text-sm max-w-3xl">
                        <ul className="flex flex-wrap gap-4 justify-start">
                            {languages.map((lang, index) => (
                                <li
                                    key={index}
                                    className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-transform hover:scale-105 
                ${lang.borderColor} border-2 ${lang.shadowColor} shadow-lg ${lang.bgColor}`}
                                >
                                    <span className="flex items-center justify-center w-6 h-4 rounded overflow-hidden">
                                        <Image
                                            src={lang.image || "/placeholder.svg"}
                                            width={16}
                                            height={24}
                                            alt={`${lang.name} logo`}
                                            className="object-contain"
                                        />
                                    </span>
                                    <span className="font-medium">{lang.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        <p>Explore our projects built with these technologies</p>
                    </div>
                </div>


                <div className="font-bold font-sans text-gray-700 text-center mx-auto text-lg gap-1 flex items-center w-fit mt-8 mb-4">
                    <Braces className="mr-2" /> Web Application Development
                </div>
                <div className="flex font-mono flex-col gap-4 md:flex-row justify-center mx-auto w-full xl:w-4/5 p-6 rounded-lg">
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

                <div className="py-12 mx-auto md:w-4/6 font-mono rounded-2xl shadow  w-full bg-sky-100 ">
                    <div className="flex items-center gap-2 font-bold text-xl mx-auto w-fit mb-8">
                        <Image src={"/tools.png"} height={20} width={24} alt="Development and DevOps tools icon" />
                        Dev Tools
                    </div>

                    <div className="flex gap-8 flex-wrap px-2 mx-auto items-center justify-center">
                        {tools.map((tool, index) => (
                            <span
                                key={index}
                                className={`
                                    border shadow ${tool.shadowColor} 
                                    cursor-pointer py-1.5 text-sm text-gray-700 
                                    ${tool.borderColor} w-fit px-3 rounded-md 
                                    ${tool.bgColor} flex items-center gap-2 
                                    font-medium hover:scale-105 transition-transform
                                    `}
                            >
                                <Image
                                    src={tool.icon || "/placeholder.svg"}
                                    width={22}
                                    height={24}
                                    alt={`${tool.name} icon`}
                                    className="object-contain"
                                />
                                {tool.name}
                            </span>
                        ))}
                    </div>
                </div>


                <div className="font-mono bg-indigo-100 shadow w-full mx-auto py-12 my-16 rounded-2xl md:w-4/6">
                    <div className=" mb-8 flex items-center gap-2 w-fit mx-auto text-xl font-bold">
                        <Image src={"/db.png"} width={20} height={20} alt="Database technologies icon" />
                        Databases & Caching
                    </div>

                    <div className="flex text-gray-700 flex-wrap gap-6 px-2 items-center justify-center mx-auto w-fit">
                        {databases.map((db, index) => (
                            <span
                                key={index}
                                className={`
                                    ${db.borderColor} border
                                    shadow ${db.shadowColor} 
                                    ${db.bgColor} 
                                    flex items-center px-3 py-1.5 
                                    rounded-md w-fit text-sm gap-2
                                    hover:scale-105 transition-transform
                                    cursor-pointer
                                    `}
                            >
                                <Image
                                    src={db.icon || "/placeholder.svg"}
                                    width={20}
                                    height={20}
                                    alt={`${db.name} icon`}
                                    className="object-contain"
                                />
                                {db.name}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Soft skills section */}
                <div className="relative mt-6 w-full     mx-auto">
                    {/* Top Wave */}
                    <div className="custom-shape-divider-top-1718303048 ">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="shape-fill"
                            ></path>
                        </svg>
                    </div>

                    <div className="relative z-10 py-24 ">
                        <div className="flex gap-2 items-center font-bold text-2xl w-fit mx-auto">
                            <Sparkles className="w-6 h-6 text-primary" />
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
                                    src={"/soft-skills-demo.webp"}
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
                    </div>

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
                <div className="my-4 font-sans">
                    <h1 className="flex items-center gap-2 font-bold text-xl mx-auto w-fit mb-6 mt-14">
                        <Medal className="h-6 w-6 text-primary" />
                        License and Certifications
                    </h1>

                    <div className="flex flex-col w-full xl:w-2/3 mx-auto px-4 items-center justify-center md:flex-row gap-6">
                        <div className="flex flex-col gap-4 w-full  justify-center">
                            {certifications.slice(0, 3).map((cert, index) => (
                                <div
                                    key={index}
                                    className="w-full bg-gray-50 hover:bg-gray-100/80 transition-colors shadow-lg flex justify-start p-4 rounded-lg mx-auto gap-4 border border-gray-400"
                                >
                                    <div className="p-4 w-fit">
                                        <Image
                                            src={cert.logo || "/placeholder.svg"}
                                            width={60}
                                            height={40}
                                            alt={`${cert.issuer} certification logo`}
                                        />
                                    </div>
                                    <div className="w-fit flex flex-col">
                                        <h2 className="font-semibold">{cert.title}</h2>
                                        <h3>{cert.issuer}</h3>
                                        <time className="text-gray-500">Issued {cert.date}</time>
                                        <Link className="py-2" target="_blank" href={cert.credentialLink}>
                                            <span className="flex text-sm items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-colors px-2 border border-gray-500 rounded-lg w-fit text-gray-700">
                                                Show credential
                                                <ExternalLink className="h-4 w-4" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex w-full flex-col gap-4  justify-center">
                            {certifications.slice(3).map((cert, index) => (
                                <div
                                    key={index}
                                    className="w-full bg-gray-50 hover:bg-gray-100/80 transition-colors shadow-lg flex justify-start p-4 rounded-lg mx-auto gap-4 border border-gray-400"
                                >
                                    <div className="p-4 w-fit">
                                        <Image
                                            src={cert.logo || "/logo.png"}
                                            width={60}
                                            height={40}
                                            alt={`${cert.issuer} certification logo`}
                                        />
                                    </div>
                                    <div className="w-fit flex flex-col">
                                        <h2 className="font-semibold">{cert.title}</h2>
                                        <h3>{cert.issuer}</h3>
                                        <time className="text-gray-500">Issued {cert.date}</time>
                                        <Link className="py-2" target="_blank" href={cert.credentialLink}>
                                            <span className="flex text-sm items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-colors px-2 border border-gray-500 rounded-lg w-fit text-gray-700">
                                                Show credential
                                                <ExternalLink className="h-4 w-4" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-300 font-sans h-14 flex items-center justify-center">
                <div className="w-fit font-semibold text-sm text-gray-600 flex flex-wrap">&copy; 2024 Sudeep Bogati .All rights reserved.</div>
            </footer>
        </>
    )
}