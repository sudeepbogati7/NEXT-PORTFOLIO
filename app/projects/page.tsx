'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../Loading";
import AOS from 'aos';
import 'aos/dist/aos.css';
import GitHubCalendar from "react-github-calendar";
export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 700 }); // Initialize AOS with a duration of 1000ms
    }, []);
    const [showHydroProjectMore, setShowHydroProjectMore] = useState(false);


    const [showExpenseProjectMore, setShowExpenseProjectMore] = useState(false);
    return (
        <>
            <head>
                <title>Projects || Sudeep Bogati </title>
            </head>
            <main className="my-20 font-sans">
                <h1 data-aos="zoom-in" className="text-xl font-bold w-fit mx-auto my-2 text-gray-800"> <span className="text-blue-900">Projects</span> that I Have Built </h1>
                <p data-aos="fade-up" className="text-gray-500 font-medium mt-2 mb-4 w-full px-2 md:w-2/4 text-center mx-auto">Here are some of the projects I have worked on. Each one reflects my skills and dedication in full stack software development. Take a look to see what I have created and the problems I have solved.</p>
                <div className="flex flex-col gap-8 mx-auto md:w-5/6 w-full">
                    {/* <div data-aos="fade-up" className="border flex flex-col lg:flex-row gap-4 justify-center bg-indigo-50 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                        <div className="flex flex-col mx-auto gap-4 py-6 px-2">
                            <div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/hydromap1.webp'} height={100} width={500} alt="hydromap-project-preview"></Image> </div>
                            <div className={` ${showHydroProjectMore ? "block" : "hidden"} transition-all duration-400   border-2 block shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden`}> <Image src={'/hydromap-1.webp'} height={100} width={500} alt="hydromap-project-preview"></Image> </div>
                        </div>
                        <div className="w-full xl:w-2/4 2xl:w-3/5 lg:w-fit">
                            <h2 className="font-bold w-fit mx-auto text-lg text-gray-700 ">Hydropower Mapping Nepal </h2>
                            <span className="text-gray-500 flex items-center justify-center mb-4 text-xs font-medium w-full mx-auto text-center tracking-widest"> March 14, 2024 </span>
                            <p className="text-gray-600 text-center text-sm">Hydropowers Mapping Nepal is a user-friendly app for exploring hydropower in Nepal.  An interactive map with detailed markers lets you visualize hydropower locations and data. Filters help refine searches, and a dashboard offers graphical analysis through charts and diagrams. This app is a valuable tool for anyone interested in Nepals hydropower development.</p>
                            <div className="flex gap-2 text-sm items-center py-4 justify-center flex-wrap">
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> typescript </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer ">next.js</span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> tailwindCSS </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> chart-js </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> leaflet-js </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> django </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> jwt </span>
                            </div>
                            <div className="text-gray-700 text relative">
                                <h3 className="font-semibold px-3 my-2 border-b-2 border-gray-400 w-fit">Features</h3>
                                <ul className={`list-disc px-6 flex flex-col gap-3 transition-all duration-300 ${showHydroProjectMore ? 'max-h-screen' : 'max-h-14 overflow-hidden'}`}>
                                    <li className="text-sm">
                                        <span className="font-semibold">User Authentication and Authorization : </span>
                                        Login, Register with Two Factor Authentication (2FA)
                                    </li>
                                    <li className="text-sm">
                                        <span className="font-semibold">User subscription : </span>
                                        Users have limited access with no subscription
                                    </li>
                                    <li className="text-sm">
                                        <span className="font-semibold">Interactive Map : </span>
                                        The map displays hydropower locations across Nepal. Users can zoom, pan, and interact with the map to explore specific areas.
                                    </li>
                                    <li className="text-sm">
                                        <span className="font-semibold">Detailed Information : </span>
                                        Clicking on a hydropower marker reveals a sidebar window displaying detailed information about the plant, including capacity, status (Survey, Construction, Operational), and potentially other relevant details.
                                    </li>
                                    <li className="text-sm">
                                        <span className="font-semibold">Search and Filter: </span>
                                        Users can search for specific hydropower plants by name or filter them based on various criteria like province, district, status, or capacity range.
                                    </li>
                                    <li className="text-sm">
                                        <span className="font-semibold">Data Visualization Dashboard : </span>
                                        The application provides data visualization tools, such as pie charts, to understand hydropower distribution patterns across Nepal. Users are able to customize chart types or filter visualized data based on their needs.
                                    </li>
                                </ul>
                                {!showHydroProjectMore && (
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-indigo-50 to-transparent pointer-events-none"></div>
                                )}
                            </div>
                            <button
                                className="mt-3 text-blue-500 flex items-center"
                                onClick={() => setShowHydroProjectMore(!showHydroProjectMore)}
                            >
                                {showHydroProjectMore ? 'Show Less' : 'Show More'}
                                {showHydroProjectMore ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                        </div>
                    </div> */}
                    {/* second project */}
                    <div data-aos="fade-up" className="border flex flex-col lg:flex-row gap-4 justify-center bg-orange-50 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                        <div className="flex mx-auto gap-4 py-6 px-2">
                            <div className="flex flex-col gap-4">
                                <div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/expense-tracker.webp'} height={100} width={200} alt="hydromap-project-preview"></Image> </div>
                                <div className={` ${showExpenseProjectMore ? "block" : "hidden"} transition-all duration-400   border-2 block shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden`}> <Image src={'/expense-tracker1.webp'} height={100} width={200} alt="hydromap-project-preview"></Image> </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Suspense fallback={<Loading />} ><div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/expense-tracker2.webp'} height={100} width={200} alt="hydromap-project-preview"></Image> </div></Suspense>
                                <Suspense fallback={<Loading />} ><div className={` ${showExpenseProjectMore ? "block" : "hidden"} transition-all duration-400   border-2 block shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden`}> <Image src={'/expense-tracker4.webp'} height={100} width={200} alt="hydromap-project-preview"></Image> </div></Suspense>
                            </div>
                        </div>
                        <div className="w-full xl:w-2/4 2xl:w-3/5 lg:w-fit">
                            <h2 className="font-bold w-fit mx-auto text-lg text-gray-700 ">Expense Tracking System </h2>
                            <span className="text-gray-500 flex items-center justify-center mb-4 text-xs font-medium w-full mx-auto text-center tracking-widest"> April 2, 2024 </span>

                            <p className="text-gray-600 text-center text-sm"> Developed a comprehensive expense tracking system with user authentication for secure login and logout functionality. The system allows users to add, edit, and delete daily expenses, categorizing them for better organization. Users can filter expenses based on categories for detailed insights. Additionally, the system features an intuitive dashboard that enables users to view and analyze their expenses graphically, aiding in effective financial management. This project demonstrates proficiency in full-stack development, user experience design, and data visualization techniques.</p>
                            <div className="flex items-center justify-around pb-4 pt-8 px-8">
                                <Link target="_blank" href={'https://expense-tracker-neon-one.vercel.app/'} className="flex items-center gap-2 bg-gray-200 px-2 shadow-xl rounded-md border-2 border-gray-400">Visit site <span> <Image src={'/redirect.png'} width={12} height={20} alt="redirect-png"></Image></span> </Link>
                                <Link href={'https://github.com/sudeepbogati7/Expense-tracking-System'} className="flex items-center gap-2 bg-gray-200 px-2 shadow-xl rounded-md border-2 border-gray-400"> <span><Image src={'/github.png'} width={20} height={20} alt="github"></Image></span> Github </Link>
                            </div>
                            <div className="flex gap-2 text-sm items-center py-2 justify-center flex-wrap">
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> typescript </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer ">next.js</span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> tailwindCSS </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> node.js </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> express.js </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> chart.js </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> jwt </span>
                            </div>
                            <div className="text-gray-700 text relative">
                                <h3 className="font-semibold px-3 my-2 border-b-2 border-gray-400 w-fit">Features</h3>
                                <ul className={`list-disc px-6 flex flex-col gap-3 transition-all duration-300 ${showExpenseProjectMore ? 'max-h-screen' : 'max-h-14 overflow-hidden'}`}>
                                    <li className="text-sm">
                                        <span className="font-semibold">User Authentication and Authorization : </span>
                                        Login, Register, forget password with Two Factor Authentication (2FA)
                                    </li>
                                    <li className="text-sm">
                                        <span className="font-semibold"> Responsive Design: </span>
                                        Optimized for both mobile and desktop views.
                                    </li>
                                    <li className="text-sm">
                                        <span className="font-semibold"> Add , modify and delete expenses : </span>
                                        Add your expenses on daily basis by selecting appropriate category. Also users are able to edit , delete existing expenses.
                                    </li>
                                    <li className="text-sm">
                                        <span className="font-semibold"> Filter based on category: </span>
                                        Users are alloweded to filter their daily expenses based on the categories so as to view and analyze their expenses more accurately.
                                    </li>
                                    <li className="text-sm">
                                        <span className="font-semibold">Data Visualization Dashboard : </span>
                                        The application provides a comprehensive dashboard for analyzing daily and monthly expenses graphically which might help users to control their unnecessary expenses.
                                    </li>
                                </ul>
                                {!showExpenseProjectMore && (
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-50 to-transparent pointer-events-none"></div>
                                )}
                            </div>
                            <button
                                className="mt-3 text-blue-500 flex items-center"
                                onClick={() => setShowExpenseProjectMore(!showExpenseProjectMore)}
                            >
                                {showExpenseProjectMore ? 'Show Less' : 'Show More'}
                                {showExpenseProjectMore ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                        </div>
                    </div>
                    {/* realtime chat application  */}
                    <div data-aos="fade-up" className="border flex flex-col lg:flex-row gap-4 justify-center bg-blue-100 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                        <div className="flex mx-auto gap-4 py-6 px-2">
                            <div className="flex lg:flex-col  gap-4">
                                <div className="flex flex-row-reverse gap-4">
                                    <Suspense><div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/chat-app3.jpg'} height={100} width={200} alt="chatapp-preview"></Image> </div></Suspense>
                                    <Suspense><div className={`transition-all duration-400   border-2 block shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden`}> <Image src={'/chat-app-2.webp'} height={100} width={200} alt="chat-app"></Image> </div></Suspense>
                                </div>
                                <Suspense><div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/chat-app.webp'} height={100} width={200} alt="chat-app-preview"></Image> </div></Suspense>
                            </div>
                        </div>
                        <div className="w-full xl:w-2/4 2xl:w-3/5 lg:w-fit">
                            <h2 className="font-bold w-fit mx-auto text-lg text-gray-700">ChatBook, realtime chat application </h2>
                            <span className="text-gray-500 flex items-center justify-center mb-4 text-xs font-medium w-full mx-auto text-center tracking-widest"> Sept 14, 2023 </span>

                            <p className="text-gray-600 text-center text-sm"> Developed a realtime chat application using WebSockets, React, and Node.js. Enables users to chat anonymously in real time, demonstrating my skills in full-stack development and real-time communication technologies.</p>
                            <div className="flex items-center justify-around pb-4 pt-8 px-8">
                                <Link target="_blank" href={'https://node-js-realtime-chat-app.onrender.com'} className="flex items-center gap-2 bg-blue-200 px-2 shadow-xl rounded-md border-2 border-gray-400">Visit site <span> <Image src={'/redirect.png'} width={12} height={20} alt="redirect-png"></Image></span> </Link>
                                <Link href={'https://github.com/sudeepbogati7/Node.js-Realtime-Chat-App-'} className="flex items-center gap-2 bg-blue-200 px-2 shadow-xl rounded-md border-2 border-gray-400"> <span><Image src={'/github.png'} width={20} height={20} alt="github"></Image></span> Github </Link>
                            </div>
                            <div className="flex gap-2 text-sm items-center py-2 justify-center flex-wrap">
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> typescript </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> node.js </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> express.js </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> Web Sockets</span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> socket.io </span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="border p-4 flex flex-col gap-4 justify-center bg-blue-50 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                        <div className="font-semibold flex items-center gap-2 "> <Image src={'/python.png'} width={16} height={13} alt="py"></Image> Python Script for Multimedia Gesture Automation </div>
                        <div className="p-2 flex flex-wrap gap-2 items-center">
                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer"> python </span>
                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">mediapipe</span>
                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer"> cv2 </span>
                        </div>
                        <div> A python script for automating multimedia control like play, pause, fast-forward and rewind with hand gesture in realtime </div>
                        <Link className="flex gap-2 items-center justify-center my-2 shadow-md bg-gray-100 font-medium border-2 border-gray-400 w-fit px-1 rounded" href={'https://github.com/sudeepbogati7/python-script-for-multimedia-gestures'}> <Image src={'/github.png'} width={16} height={12} alt="github"></Image> Source code </Link>
                    </div>
                    <div data-aos="fade-up" className="border-2 flex flex-col gap-4 justify-center items-center  bg-white rounded-lg shadow-md border-gray-400  mx-4 p-2">
                        <h1 className="font-bold w-fit mx-auto text-lg my-2"> Backend APIs </h1>
                        <div className="flex w-full flex-col lg:flex-row  gap-3">
                            <div className="bg-gray-100 p-4 border-2 border-gray-400 rounded-md w-full">
                                <h2 className="font-semibold "> Authentication API using Expres.js </h2>
                                <time className="text-gray-500 tracking-wider p-1 text-sm " > Jan, 2024 </time>
                                <div className="p-2 flex flex-wrap gap-2 items-center ">
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">passport.js</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">typescript</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">express.js</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">node.js</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">postgresql</span>
                                </div>
                                <div className="text-gray-700">Includes features like email verification, password reset, and social media authentication using session storage.</div>
                                <Link className="flex gap-2 items-center justify-center my-2 shadow-md bg-gray-100 font-medium border-2 border-gray-400 w-fit px-1 rounded" href={'https://github.com/sudeepbogati7/Authentication-Project-PostgreSQL'}> <Image src={'/github.png'} width={16} height={12} alt="github"></Image> Source code </Link>
                            </div>
                            <div className="bg-gray-100 p-4 border-2 border-gray-400 rounded-md w-full">
                                <h2 className="font-semibold "> Event Ticket Manager Application  </h2>
                                <time className="text-gray-500 tracking-wider p-1 text-sm " > Dec, 2023 </time>
                                <div className="p-2 flex flex-wrap gap-2 items-center ">
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">JavaScript</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">expres.js</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">mysql2</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">node.js</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">bcrypt</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">jwt</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">sequelize ORM </span>
                                </div>
                                <div className="text-gray-700"> A backend API with two user roles : Organizers and Attendees , Oragnizers can create tickets for events , sell tickets and attendees can purchase. </div>
                                <Link className="flex gap-2 items-center justify-center my-2 shadow-md bg-gray-100 font-medium border-2 border-gray-400 w-fit px-1 rounded" href={'https://github.com/sudeepbogati7/Event-Ticket-Manager-App-NODE.js.-MySQL'}> <Image src={'/github.png'} width={12} height={12} alt="github"></Image> Source code </Link>
                            </div>
                        </div>
                        <div className="flex w-full flex-col lg:flex-row  gap-3">
                            <div className="bg-gray-100 p-4 border-2 border-gray-400 rounded-md w-full">
                                <h2 className="font-semibold "> Task Management System  </h2>
                                <time className="text-gray-500 tracking-wider p-1 text-sm " > Jan, 2024 </time>
                                <div className="p-2 flex flex-wrap gap-2 items-center ">
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">typescript</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">expres.js</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">postgresql</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">node.js</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">bcrypt</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">jwt</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">sequelize ORM </span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer"> nodemailer </span>
                                </div>
                                <div className="text-gray-700"> A backend with proper user authentication and authorization. Users can create , delete , modify their tasks / works when they are logged in. OTP based authentication for password reset through email . </div>
                                <Link className="flex gap-2 items-center justify-center my-2 shadow-md bg-gray-100 font-medium border-2 border-gray-400 w-fit px-1 rounded" href={'https://github.com/sudeepbogati7/tasks-maganagement-system-PostgreSQL'}> <Image src={'/github.png'} width={12} height={12} alt="github"></Image> Source code </Link>
                            </div>
                            <div className="bg-gray-100 p-4 border-2 border-gray-400 rounded-md w-full">
                                <h2 className="font-semibold "> URL Shortner API  </h2>
                                <time className="text-gray-500 tracking-wider p-1 text-sm " > Jan, 2024 </time>
                                <div className="p-2 flex flex-wrap gap-2 items-center ">
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">typescript</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">expres.js</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">mongoDB</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">node.js</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">nanoid</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">jest</span>
                                    <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">supertest </span>
                                </div>
                                <div className="text-gray-700">A Test Driven Development (TDD) project for shortening lengthy URLs. </div>
                                <Link className="flex gap-2 items-center justify-center my-2 shadow-md bg-gray-100 font-medium border-2 border-gray-400 w-fit px-1 rounded" href={'https://github.com/sudeepbogati7/URL-Shortner-API-MongoDB'}> <Image src={'/github.png'} width={12} height={12} alt="github"></Image> Source code </Link>
                            </div>
                        </div>
                    </div>


                    <div data-aos="fade-up" className="border flex flex-col  justify-center bg-gray-100 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                        <h1 className="font-semibold text-lg"> Human Resource Management System API </h1>
                        <time className="text-sm text-gray-500 p-1"  > Feb, 2024 </time>
                        <div className="text-gray-800 my-2">The backend application API which allows you to fetch the information of HR , Jobs, and candidates for the respective job</div>
                        <div className="p-2 flex flex-wrap gap-2 items-center ">
                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">JavaScript</span>
                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">expres.js</span>
                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">node.js</span>
                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">jwt</span>
                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">nodemailer</span>
                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">multer</span>
                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer">mongoDB</span>
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-800 p-2 "> Features </h2>
                            <ul className="list-disc px-6 text-gray-700">
                                <li>Only HR/Admin can register to the system and has the most authorities.</li>
                                <li>HR can post , update and delete jobs.</li>
                                <li>An automated email is sent to the HRs email-address when the new Job is posted.</li>
                                <li>Candidates are allowed to see all the jobs and can apply any job.</li>
                                <li>Candidates will receive an email to confirm their application is submitted successfully.</li>
                                <li>Only HR has the permission to see the job applications.</li>
                            </ul>
                        </div>
                        <Link className="flex gap-2 m-4 my-6 items-center justify-center my-2 shadow-md bg-gray-100 font-medium border-2 border-gray-400 w-fit px-1 rounded" href={'https://github.com/sudeepbogati7/HRM-System'}> <Image src={'/github.png'} width={12} height={12} alt="github"></Image> Source code </Link>
                    </div>

                    {/* create blog application  */}
                    <div data-aos="fade-up" className="border flex flex-col lg:flex-row gap-4 justify-center bg-purple-50 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                        <div className="flex mx-auto gap-4 py-6 px-2">
                            <div className="flex  gap-4">
                                <div className="flex flex-col md gap-4">
                                    <Suspense fallback={<Loading />} ><div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/create-blog1.png'} height={100} width={200} alt="hydromap-project-preview"></Image> </div></Suspense>
                                    <Suspense fallback={<Loading />} ><div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/create-blog3.png'} height={100} width={200} alt="hydromap-project-preview"></Image> </div></Suspense>
                                </div>
                                <Suspense fallback={<Loading />} ><div className={`transition-all duration-400   border-2 block shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden`}> <Image src={'/create-blog2.png'} height={100} width={200} alt="hydromap-project-preview"></Image> </div></Suspense>
                            </div>
                        </div>
                        <div className="w-full xl:w-2/4 2xl:w-3/5 lg:w-fit">
                            <h2 className="font-bold w-fit mx-auto text-lg text-gray-700"> Create Blogs Application  </h2>
                            <span className="text-gray-500 flex items-center justify-center mb-4 text-xs font-medium w-full mx-auto text-center tracking-widest"> Sept 26, 2023 </span>

                            <p className="text-gray-600 text-center text-sm"> Built a blog application using Node.js and Express with server-side rendering. Implemented user login and logout, and features for adding, deleting, and editing blogs. Utilized JWT for secure authentication, showcasing my skills in backend development and user authentication.</p>
                            <div className="flex items-center justify-around pb-4 pt-8 px-8">
                                <Link target="_blank" href={'https://createyourownblogs.onrender.com/'} className="flex items-center gap-2 bg-blue-200 px-2 shadow-xl rounded-md border-2 border-gray-400">Visit site <span> <Image src={'/redirect.png'} width={12} height={20} alt="redirect-png"></Image></span> </Link>
                                <Link href={'https://github.com/sudeepbogati7/CreateBlog_NODE.js?tab=readme-ov-file'} className="flex items-center gap-2 bg-blue-200 px-2 shadow-xl rounded-md border-2 border-gray-400"> <span><Image src={'/github.png'} width={20} height={20} alt="github"></Image></span> Github </Link>
                            </div>
                            <div className="flex gap-2 text-sm items-center py-2 justify-center flex-wrap">
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> typescript </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> node.js </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> express.js </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> jwt </span>
                                <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> joi </span>
                            </div>
                        </div>
                    </div>

                    {/* shell scripts for debian linux */}
                    <div data-aos="fade-up" className="border flex flex-col gap-4 justify-center bg-red-50 rounded-lg shadow-md border-gray-400  mx-4 p-6">
                        <div className=" font-semibold flex  text-lg items-center gap-2 "> <Image src={'/debian.svg'} width={16} height={14} alt="debian"></Image> Shell Scripts For Debian  </div>
                        <div className="text-gray-700"> Custom shell scripts for automating repeatative tasks and so on. </div>
                        <Link className="flex gap-2 items-center justify-center my-2 shadow-md bg-gray-100 font-medium border-2 border-gray-400 w-fit px-1 rounded" href={'https://github.com/sudeepbogati7/Shell-Scripts-for-Debian-'}> <Image src={'/github.png'} width={12} height={12} alt="github"></Image> Explore </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center w-full justify-center ">
                        <div data-aos="fade-up" className="border flex flex-col gap-4 justify-center bg-gray-100 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                            <div className="flex flex-col items-center justify-center mx-auto w-fit p-4">
                                <div className="flex flex-col lg:flex-row w-full">
                                    <div className="w-fit h-fit rounded-lg overflow-hidden border-2 border-purple-400"> <Image src={'/chatbot.png'} width={400} height={100} alt="chatbot"></Image> </div>
                                    <div className="flex flex-col items-center justify-center mx-auto w-fit">
                                        <h1 className="font-semibold text-lg py-4"> My AI Charbot  </h1>
                                        <div className="text-gray-600 p-3"> Developed a fully responsive charbot to integrate on websites as a chat assistant. Used OpenAI API for response text. </div>
                                        <div className="flex gap-2 text-sm items-center py-2 justify-center flex-wrap">
                                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> JavaScript </span>
                                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> HTML5 </span>
                                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> CSS3 </span>
                                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> OpenAI API </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-around gap-6 my-4 px-8 w-fit ">
                                    <Link target="_blank" href={'https://github.com/sudeepbogati7/My-Chat-Bot'} className="flex items-center gap-2 bg-blue-200 px-2 shadow-xl rounded-md border-2 border-gray-400">Visit site <span> <Image src={'/redirect.png'} width={12} height={20} alt="redirect-png"></Image></span> </Link>
                                    <Link href={'https://github.com/sudeepbogati7/CreateBlog_NODE.js?tab=readme-ov-file'} className="flex items-center gap-2 bg-blue-200 px-2 shadow-xl rounded-md border-2 border-gray-400"> <span><Image src={'/github.png'} width={20} height={20} alt="github"></Image></span> Github </Link>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="border flex flex-col gap-4 justify-center bg-green-50 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                            <div className="flex flex-col items-center justify-center mx-auto p-4 w-fit">
                                <div className="flex flex-col lg:flex-row w-full">
                                    <div className="w-fit h-fit  rounded-lg overflow-hidden border-2 border-green-400"> <Image src={'/img-search.png'} width={700} height={100} alt="chatbot"></Image> </div>
                                    <div className="flex flex-col items-center justify-center mx-auto w-fit">
                                        <h1 className="font-semibold text-lg py-4"> Image Search App </h1>
                                        <div className="text-gray-600 p-3"> A fully functional image search application where anyone can search images based on keywords(eg.dog, cat, coding ....).  </div>
                                        <div className="flex gap-2 text-sm items-center py-2 justify-center flex-wrap">
                                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> JavaScript </span>
                                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> HTML5 </span>
                                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> CSS3 </span>
                                            <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> unsplash.com API </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-around gap-6 my-4 px-8 w-fit ">
                                    <Link target="_blank" href={'https://github.com/sudeepbogati7/Image-Search-App'} className="flex items-center gap-2 bg-blue-200 px-2 shadow-xl rounded-md border-2 border-gray-400">Visit site <span> <Image src={'/redirect.png'} width={12} height={20} alt="redirect-png"></Image></span> </Link>
                                    <Link href={'https://sudeepbogati7.github.io/Image-Search-App/'} className="flex items-center gap-2 bg-blue-200 px-2 shadow-xl rounded-md border-2 border-gray-400"> <span><Image src={'/github.png'} width={20} height={20} alt="github"></Image></span> Github </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="border flex flex-col gap-4 justify-center bg-blue-50 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                        <div className="flex flex-col items-center justify-center mx-auto p-4 w-fit">
                            <div className="flex flex-col lg:flex-row w-full lg:w-2/3">
                                <div className="w-fit h-fit rounded-lg overflow-hidden border-2 border-blue-400 object-cover"> <Image src={'/password-gen.png'} width={800} height={100} alt="chatbot"></Image> </div>
                                <div className="flex flex-col items-center justify-center mx-auto w-fit">
                                    <h1 className="font-semibold text-lg py-4"> Password Generator </h1>
                                    <div className="text-gray-600 p-3"> An application that helps you to generate a strong password made up of numbers, symbols and aplbhates.  </div>
                                    <div className="flex gap-2 text-sm items-center py-2 justify-center flex-wrap">
                                        <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> JavaScript </span>
                                        <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> HTML5 </span>
                                        <span className="bg-gray-600 text-white shadow-xl px-2 rounded-lg cursor-pointer "> CSS3 </span>
                                    </div>
                                    <div className="flex items-center justify-around gap-6 my-4 px-8 w-fit ">
                                        <Link target="_blank" href={'https://github.com/sudeepbogati7/Password-Generator'} className="flex items-center gap-2 bg-blue-200 px-2 shadow-xl rounded-md border-2 border-gray-400">Visit site <span> <Image src={'/redirect.png'} width={12} height={20} alt="redirect-png"></Image></span> </Link>
                                        <Link href={'https://sudeepbogati7.github.io/Password-Generator/'} className="flex items-center gap-2 bg-blue-200 px-2 shadow-xl rounded-md border-2 border-gray-400"> <span><Image src={'/github.png'} width={20} height={20} alt="github"></Image></span> Github </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div data-aos="fade-up" className="mt-14  mb-4 font-bold md:text-xl text-base flex items-center gap-2 w-fit mx-auto  text-green-800">My Github Activity Calender <Link href={'https://github.com/sudeepbogati7/'}><span className=" border-b border-gray-300 flex items-center gap-2 text-gray-600 "> <Image src={'/github.png'} height={20} width={20} alt="github"></Image> /sudeepbogati7</span> </Link></div>
                <div data-aos="fade-up" className=" flex my-2 flex-col max-w-full overflow-auto justify-center items-center  mx-auto">
                    <div className=""> <GitHubCalendar username="sudeepbogati7" /></div>
                </div>
            </main>
            <footer className="bg-gray-300 h-14 flex items-center justify-center">
                <div className="w-fit font-semibold text-sm text-gray-600 flex flex-wrap">&copy; 2024 Sudeep Bogati .All rights reserved.</div>
            </footer>
        </>
    )
}
