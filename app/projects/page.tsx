'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function Projects() {

     const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };
    return (
        
        <main className="mt-20">
            <h1 className="text-xl font-bold w-fit mx-auto my-4 text-gray-800"> Projects that I Have Built </h1>
            <div className="flex flex-col gap-6 mx-auto md:w-5/6 w-full">
                <div className="border flex flex-col lg:flex-row gap-4  justify-center bg-indigo-50 rounded-lg shadow-2xl border-gray-400  mx-2 p-4  mx-auto">
                    <div className="flex flex-col mx-auto gap-4 py-6 px-2">
                        <div className="border-2 shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/hydromap1.png'} height={100} width={500} alt="hydromap-project-preview"></Image> </div>
                        <div className="border-2 block shadow-xl w-fit h-fit border-gray-400 rounded-lg overflow-hidden"> <Image src={'/hydromap-1.png'} height={100} width={500} alt="hydromap-project-preview"></Image> </div>
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
                        <div className="text-gray-700 text">
                            <h3 className="font-semibold px-3 my-2 border-b-2 border-gray-400 w-fit">Features</h3>
                            <ul className="list-disc px-6 flex flex-col gap-3">
                                <li className="text-sm"> <span className="font-semibold">User Authentication and Authorization : </span> Login, Register with Two Factor Authentication (2FA) </li>
                                <li className="text-sm"> <span className="font-semibold"> User subsciption : </span> Users have limited access with no subscription</li>
                                <li className="text-sm"> <span className="font-semibold"> Interactive Map : </span> The map displays hydropower locations across Nepal. Users can zoom, pan, and interact with the map to explore specific areas.</li>
                                <li className="text-sm"> <span className="font-semibold"> Detailed Information : </span> Clicking on a hydropower marker reveals a sidebar window displaying detailed information about the plant, including capacity, status (Survey, Construction, Operational), and potentially other relevant details. </li>
                                <li className="text-sm"> <span className="font-semibold"> Search and Filter: </span> Users can search for specific hydropower plants by name or filter them based on various criteria like province, district, status, or capacity range.  </li>
                                <li className="text-sm"> <span className="font-semibold"> Data Visualization Dashboard : </span> The application provides data visualization tools, such as pie charts, to understand hydropower distribution patterns across Nepal. Users are able to customize chart types or filter visualized data based on their needs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
