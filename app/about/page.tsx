'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Nav from "@/components/nav";
import { BackgroundLines } from "@/components/ui/background-lines";
export default function About() {
    const [showMore, setShowMore] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll)

        AOS.init({ duration: 700 });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    let navBgColor = ''
    if (isScrolled === false) {
        navBgColor = "bg-transparent"
    } else {
        navBgColor = "md:bg-gradient-to-br bg-white from-white to-white via-blue-100  bg-opacity-60 border border-indigo-100 shadow md:shadow-lg  bg-opacity-70 backdrop-blur-sm md:top-4 duration-700 ease-in-out transition-all"
    }
    return (
        <>
            <head>
                <title>About || Sudeep Bogati </title>
            </head>
            <Nav bgColor={navBgColor} />
            <main className="font-sans">
                {/* <div data-aos="fade-up" className=' pt-2 text-2xl font-semibold mx-auto px-2  text-center  my-4 flex items-center gap-2 w-fit  '> About <span className="text-blue-900">me</span> <Image className='h-6 w-6' src={'/about-me.png'} height={30} width={30} alt='about-me'></Image> </div> */}
                <div className="min-h-fit w-full bg-gradient-to-b from-transparent via-indigo-200 to-transparent md:pt-12  p-4">


                    {/* 
                    to do
                    Design a profile type profile view with cover photo and profile picture...
                    */}
                    <div className="group w-full mx-auto  px-4 py-8 md:w-4/5 grid grid-cols-1 lg:grid-cols-2 md:gap-0 gap-4 items-center">
                        <div className="relative rounded-2xl shadow-xl  overflow-hidden aspect-square w-3/5  mx-auto lg:max-w-none">
                            <Image
                                src="/profile.jpg"
                                alt="Sudeep Bogati"
                                layout="fill"
                                objectFit="cover"
                                priority
                                className="transform group-hover:scale-110 transition-all duration-300 ease-in-out shadow-2xl"
                            />
                        </div>
                        <div className="text-justify w-full lg:text-left">
                            <h1 className="text-3xl font-bold text-blue-900 text-center md:text-justify">Sudeep Bogati</h1>
                            <h2 className=" text-gray-700 font-semibold mb-6 text-center md:text-justify"> Professional Software Engineer</h2>
                            <p className="text-gray-700 mb-3 leading-relaxed">
                               Hello, I am <strong>Sudeep Bogati</strong>, a <strong>Full-Stack Software Engineer</strong> passionate about solving business problems through innovative and effective software solutions. I possess a strong foundation in software development principles and a drive to create high-quality, user-centric applications.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Throughout my career, I am currently working at <strong>Green Tick Nepal Pvt. Ltd</strong> as a Software Engineer. At greentick, I am involved in building <strong>Cybersecurity Products</strong> and implementing other cybersecurity measures, while also enforcing <strong>DevSecOps</strong> principles.
                            </p>
                            <div className="flex flex-wrap text-base justify-center lg:justify-start gap-6 text-gray-700">
                                <a href="mailto:your.email@example.com" className="flex items-center hover:text-indigo-600 transition-colors">
                                    <Mail className="w-5 h-6 mr-2" />
                                    <span>hello@sudipbogati.com.np</span>
                                </a>
                                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-indigo-600 transition-colors">
                                    <Linkedin className="w-5 h-6 mr-2" />
                                    <span>/in/sudeep-bogati</span>
                                </a>
                                <a href="https://github.com/sudeepbogati7" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-indigo-600 transition-colors">
                                    <Github className="w-5 h-6 mr-2" />
                                    <span>/sudeepbogati7</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-gradient-to-b from-transparent via-purple-300 to-transparent px-2 p-6  my-8 w-fit">
                    <div className="absolute inset-0 bg-gray-100  opacity-85"></div>
                    <div data-aos="zoom-in" className="relative py-4  text-2xl font-semibold flex text-center mx-auto w-fit  items-center gap-2">
                        My Education
                    </div>
                    <div className="px-6 w-full md:w-4/5 xl:w-3/5 mx-auto">
                        <ol data-aos="fade-up" className="relative border-s-2 border-gray-400">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-orange-400">
                                    <Image src="/tu.png" width={100} height={100} alt="gtn" />
                                </span>
                                <h3 className="flex items-center font-bold text-gray-900">Bachelors in Information Technology (BIT)</h3>
                                <Link href="https://www.tuiost.edu.np/" className="underline flex tracking-wide text-base items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600">
                                    Tribhuvan University, Kathmandu
                                </Link>
                                <time className="block italic mb-2 text-sm font-normal leading-none text-gray-500">2021 - 2025</time>
                                <div className="relative">
                                    <div style={{ maxHeight: showMore ? '1000px' : '100px' }} className={`${showMore ? 'max-h-fit' : 'max-h-0'} overflow-hidden transition-all duration-800 relative`}>
                                        <p className="mb-4 text-base font-normal text-gray-700">
                                            Studied Bachelor of Information Technology (BIT) from Tribhuvan University. My studies covered programming, databases, Web Development, Networking. I gained hands-on experience through projects and internships, developing strong IT and problem-solving skills.
                                        </p>
                                        <ol className="list-disc px-4 text-sm flex flex-col gap-2 overflow-hidden transition-all duration-500">
                                            <li><span className="font-semibold">Programming</span>: Learned Java, C and C++.</li>
                                            <li><span className="font-semibold">Databases</span>: Managed and created databases using SQL as well as NoSQL.</li>
                                            <li><span className="font-semibold">Web Development</span>: Built websites using HTML, CSS, PHP and JavaScript.</li>
                                            <li><span className="font-semibold">Software Engineering</span>: Studied how to plan and build software projects.</li>
                                            <li><span className="font-semibold">Networking:</span> Learned about computer networks and security.</li>
                                            <li><span className="font-semibold">Information Systems:</span> Studied how to create systems to solve business problems.</li>
                                            <li><span className="font-semibold">Data Structures:</span> Learned about organizing and using data efficiently.</li>
                                            <li><span className="font-semibold">Hands-On Projects:</span> Gained real-world experience through projects and internships.</li>
                                        </ol>
                                    </div>
                                    {!showMore && <div className="absolute bottom-0 left-0 w-full pointer-events-none"></div>}
                                </div>
                                <button onClick={() => setShowMore(!showMore)} className="flex gap-2 items-center mt-1 text-blue-500">
                                    {showMore ? 'Read Less' : 'Read More'} {showMore ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                            </li>
                            <li className="mb-10 ms-6">
                                <span data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]">
                                    <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </span>
                                <h3 data-aos="fade-up" className="flex items-center text-base font-bold text-gray-900">+2, Computer Science</h3>
                                <Link data-aos="fade-up" href="https://sungavacollege.edu.np/" className="underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600">
                                    Sungava College, Chitwan
                                </Link>
                                <time data-aos="fade-up" className="block italic mb-2 text-sm font-normal leading-none text-gray-500">2019 - 2021</time>
                                <div data-aos="fade-up" className="text-sm text-gray-600 tracking-wide">
                                    <div>Grade XI CGPA: <span className="font-semibold">3.79</span></div>
                                    <div>Grade XII CGPA: <span className="font-semibold">3.59</span></div>
                                    <div><span className="font-semibold">Major Subjects:</span> Physics, Chemistry, Mathematics, Computer</div>
                                </div>
                                <Link data-aos="fade-up" target="_blank" className="flex text-gray-600 items-center gap-1 border-b-2 border-gray-300 hover:border-black transition-all duration-200 ease hover:text-black w-fit my-4" href="https://drive.google.com/file/d/1HQmnNRXbOQFOO1TB0UoquRGiYusXoyur/view?usp=sharing">
                                    See more <Image src="/redirect.png" width={12} height={12} alt="see-more" />
                                </Link>
                            </li>
                        </ol>
                    </div>

                </div>
                <div data-aos="zoom-in" className="text-2xl flex font-semibold mx-auto px-2 justify-center text-center my-8 flex items-center gap-2 w-fit "> Work Experiences  <Image src={'/career.png'} width={34} height={34} alt="education"></Image> </div>
                <div className="px-6 mb-8 w-full md:w-4/5 xl:w-3/5 mx-auto">
                    <ol data-aos="fade-up" className="relative border-s-2 border-gray-400 ">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                                <Image src={'https://i0.wp.com/gtn.com.np/storage/2022/09/greentick-nepal-pvt-lt.png?fit=2294%2C755&ssl=1'} width={100} height={100} alt="gtn"></Image>
                            </span>
                            <h3 className="flex items-center text-lg font-semibold text-gray-900 "> Associate Software Engineer  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Currently</span></h3>
                            <Link href={'https://www.gtn.com.np'} className="underline text-sm flex tracking-wide items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Greentick Nepal - Gyaneshwor, Kathmandu </Link>
                            <time className="block mb-2 italic  text-sm font-normal leading-none text-gray-500 "> June 1, 2024 - Present </time>
                            <div className={`relative flex flex-col transition-all duration-800 ease-in-out ${isExpanded ? 'max-h-fit' : 'max-h-24 overflow-hidden'}`}>
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
                                {!isExpanded && (
                                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
                                )}
                            </div>
                            <button data-aos="fade-up"
                                className={`mt-4 flex transition-all duration-500 items-center gap-2 text-blue-500 font-medium`}
                                onClick={toggleReadMore}>
                                {isExpanded ? 'Read Less' : 'Read More'} {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                        </li>
                        <li className="mb-10 ms-6">
                            <span data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]  ">
                                <Image src={'https://i0.wp.com/gtn.com.np/storage/2022/09/greentick-nepal-pvt-lt.png?fit=2294%2C755&ssl=1'} width={100} height={100} alt="gtn"></Image>
                            </span>
                            <h3 data-aos="fade-up" className="flex items-center text-lg font-semibold text-gray-900 "> Software Engineer Intern </h3>
                            <Link data-aos="fade-up" href={'https://www.gtn.com.np'} className="underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Greentick Nepal- Gyaneshwor, Kathmandu </Link>
                            <time data-aos="fade-up" className="block italic mb-2 text-sm font-normal leading-none text-gray-500 "> 3 March , 2024 - 29 May, 2024 </time>
                            <p data-aos="fade-up" className="mb-4  font-normal text-gray-600 "> Dedicated Full Stack Developer Intern with experience in building web applications using React, Next.js, Tailwind CSS, TypeScript, Django Rest Framework, and Python. Skilled in creating user-friendly interfaces, connecting frontends to backends, and collaborating effectively with teams.</p>
                        </li>
                    </ol>
                </div>
                <div className="bg-white p-2">
                    <div data-aos="zoom-in" className="text-2xl flex font-semibold mx-auto px-2 justify-center text-center my-8 flex items-center gap-2 w-fit "> Voluteering   <Image src={'/volunteer.png'} width={34} height={34} alt="education"></Image> </div>
                    <div className="px-6 w-full md:w-4/5 xl:w-3/5 mx-auto">
                        <ol className="relative border-s-2 border-gray-400 ">
                            <li className="mb-10 ms-6">
                                <span data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -start-4 border border-gray-500  ">
                                    <Image src={'/osac.png'} width={100} height={100} alt="gtn"></Image>
                                </span>
                                <h3 data-aos="fade-up" className="flex items-center  font-bold text-gray-900 "> Executive </h3>
                                <Link data-aos="fade-up" href={'https://osac.org.np/'} className="underline flex tracking-wide text-base items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Open-Source ASCOL Circle , OSAC </Link>
                                <time data-aos="fade-up" className="block italic mb-2 text-sm font-normal leading-none text-gray-500 "> 2023 - present </time>
                                <p data-aos="fade-up" className="mb-4 text-sm font-normal text-gray-700">OSAC (Open Source ASCOL Circle) is a group of lerners based primarily on Computer Science and Information Technologies students from Amrit Science College, Tribhuvan University, Nepal.</p>
                            </li>
                            <li className="mb-10 ms-6">
                                <span data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full -start-4 border border-[#92a91a]  ">
                                    <Image src={'/hult-prize.png'} width={100} height={100} alt="gtn"></Image>
                                </span>
                                <h3 data-aos="fade-up" className="flex items-center text-base font-bold text-gray-900 "> Judges and Expert Coordinator  </h3>
                                <Link data-aos="fade-up" href={'https://www.hultprize.org/'} className="underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600"> Hult Prize, ASCOL   </Link>
                                <time data-aos="fade-up" className="block italic mb-2 text-sm font-normal leading-none text-gray-500 "> Sept 2023 - Feb 2024 </time>
                                <p data-aos="fade-up" className="mb-4 text-base font-normal text-gray-600 ">The Hult Prize is the worlds largest student social entrepreneurship competition. Run in partnership with the United Nations, student teams from universities from across the world compete to solve a pressing social issue by developing a scalable, sustainable social enterprise.</p>
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