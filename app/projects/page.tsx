'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from "next/link";

export default function Projects() {

    const [showHydroProjectMore, setShowHydroProjectMore] = useState(false);


    const [showExpenseProjectMore, setShowExpenseProjectMore] = useState(false);



    return (

        <main className="my-20">
            <h1 className="text-xl font-bold w-fit mx-auto my-2 text-gray-800"> Projects that I Have Built </h1>
            <p className="text-gray-500 font-medium mt-2 mb-4 w-full px-2 md:w-2/4 text-center mx-auto">Here are some of the projects I have worked on. Each one reflects my skills and dedication in full stack software development. Take a look to see what I have created and the problems I have solved.</p>
            <div className="flex flex-col gap-8 mx-auto md:w-5/6 w-full">
                <div className="border flex flex-col lg:flex-row gap-4 justify-center bg-indigo-50 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                    <div className="flex flex-col mx-auto gap-4 py-6 px-2">
                        <div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/hydromap1.png'} height={100} width={500} alt="hydromap-project-preview"></Image> </div>
                        <div className={` ${showHydroProjectMore ? "block" : "hidden"} transition-all duration-400   border-2 block shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden`}> <Image src={'/hydromap-1.png'} height={100} width={500} alt="hydromap-project-preview"></Image> </div>
                    </div>
                    <div className="w-full xl:w-2/4 2xl:w-3/5 lg:w-fit">
                        <h2 className="font-bold w-fit mx-auto text-lg text-gray-700 py-2">Hydropower Mapping Nepal </h2>
                        <p className="text-gray-600 text-center text-sm">Hydropowers Mapping Nepal is a user-friendly app for exploring hydropower in Nepal.  An interactive map with detailed markers lets you visualize hydropower locations and data. Filters help refine searches, and a dashboard offers graphical analysis through charts and diagrams. This app is a valuable tool for anyone interested in Nepals hydropower development.</p>
                        <div className="flex gap-2 items-center py-4 justify-center flex-wrap">
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
                </div>



                {/* second project */}

                <div className="border flex flex-col lg:flex-row gap-4 justify-center bg-yellow-20 rounded-lg shadow-md border-gray-400  mx-4 p-2">
                    <div className="flex mx-auto gap-4 py-6 px-2">
                        <div className="flex flex-col gap-4">
                            <div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/expense-tracker.png'} height={100} width={200} alt="hydromap-project-preview"></Image> </div>
                            <div className={` ${showExpenseProjectMore ? "block" : "hidden"} transition-all duration-400   border-2 block shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden`}> <Image src={'/expense-tracker1.png'} height={100} width={200} alt="hydromap-project-preview"></Image> </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/expense-tracker2.png'} height={100} width={200} alt="hydromap-project-preview"></Image> </div>
                            <div className={` ${showExpenseProjectMore ? "block" : "hidden"} transition-all duration-400   border-2 block shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden`}> <Image src={'/expense-tracker4.png'} height={100} width={200} alt="hydromap-project-preview"></Image> </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-2/4 2xl:w-3/5 lg:w-fit">
                        <h2 className="font-bold w-fit mx-auto text-lg text-gray-700 py-2">Expense Tracking System </h2>
                        <p className="text-gray-600 text-center text-sm"> Developed a comprehensive expense tracking system with user authentication for secure login and logout functionality. The system allows users to add, edit, and delete daily expenses, categorizing them for better organization. Users can filter expenses based on categories for detailed insights. Additionally, the system features an intuitive dashboard that enables users to view and analyze their expenses graphically, aiding in effective financial management. This project demonstrates proficiency in full-stack development, user experience design, and data visualization techniques.</p>
                        <div className="flex items-center justify-around pb-4 pt-8 px-8">
                            <Link href={'https://expense-tracking-system-7rdm0bjty-sudeepbogati7s-projects.vercel.app/'} className="flex items-center gap-2 bg-gray-200 px-2 shadow-xl rounded-md border-2 border-gray-400">Visit site <span> <Image src={'/redirect.png'} width={12} height={20} alt="redirect-png"></Image></span> </Link>
                            <Link href={'https://github.com/sudeepbogati7/Expense-tracking-System'} className="flex items-center gap-2 bg-gray-200 px-2 shadow-xl rounded-md border-2 border-gray-400"> <span><Image src={'/github.png'} width={20} height={20} alt="github"></Image></span> Github </Link>
                        </div>
                        <div className="flex gap-2 items-center py-2 justify-center flex-wrap">
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
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-indigo-50 to-transparent pointer-events-none"></div>
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
            </div>
        </main>
    )
}
