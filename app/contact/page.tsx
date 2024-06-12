import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <main className="my-20">
            <h1 className="font-bold text-xl mx-auto w-fit text-gray-700"> <span className="text-blue-900">Reach</span> Me </h1>
            <div className="mt-8 flex flex-col w-full md:w-5/6 mx-auto">
                <div className="flex mx-auto gap-3  md:flex-row">
                    <div className="mx-auto "> <Image className="w-[150px] md:w-[300px]" src={'/contact-me.svg'} height={200} width={300} alt="contact-me"></Image></div>
                    <div className="flex w-fit fle-col gap-2 flex-col mx-auto my-4">
                        <h2 className="font-semibold  text-lg text-blue-900">Sudeep Bogati </h2>
                        <span className="flex items-center gap-1 font-medium text-gray-600 text-sm"><Image src={'/email.png'} width={18} height={20} alt="email"></Image> hello@sudipbogati.com.np</span>
                        <span className="flex items-center gap-1 font-medium text-gray-600 text-sm"><Image src={'/location.png'} width={18} height={20} alt="email"></Image> Kathmandu, Nepal </span>
                    </div>
                </div>
                <div className="text-gray-600 mx-auto  font-medium my-4 text-center font-sm md:w-2/4 px-4 ">
                    Im always excited to connect with fellow developers, potential collaborators, and anyone interested in my work. Feel free to reach out through any of the following channels.
                </div>
                <div className="w-full ">
                    <div className="text-lg font-bold w-fit mx-auto my-4"> My <span className="text-blue-900">Socials</span> </div>
                    <div className='flex flex-wrap px-4 gap-6 mt-4 mx-auto items-center justify-center'>
                        <Link className='px-4 bg-gray-200 py-1 shadow-xl shadow-gray-600/40 border-2 border-gray-500 rounded transition-all duration-400  hover:border-gray-500' target='_blank' href={'https://github.com/sudeepbogati7/'}>
                            <div className="[&>svg]:h-5 [&>svg]:w-5 flex gap-2 items-center text-sm font-semibold cursor-pointer ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 496 512">
                                    <path
                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                                <span>/sudeepboagati7</span>
                            </div>
                        </Link>

                        <Link className=' border-2 py-1 px-4 shadow-xl shadow-blue-600/25 border-blue-700 bg-blue-100 rounded transition-all duration-400  ' target='_blank' href={'https://facebook.com/sudeep.bogati07'}>
                            <div className="[&>svg]:h-5 [&>svg]:w-5 flex items-center gap-2 text-sm font-semibold cursor-pointer transition-all duration-400 hover:text-blue-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 320 512">
                                    <path
                                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                                <span>/sudeep.bogati07</span>
                            </div>
                        </Link>

                        <Link className='border-2 py-1 px-4 shadow-xl shadow-orange-600/30 bg-orange-100 border-orange-500 rounded transition-all duration-400 ' target='_blank' href={'https://instagram.com/the.sudeep_'}>
                            <div className="[&>svg]:h-5 [&>svg]:w-5 font-semibold text-sm flex gap-2 cursor-pointer hover:text-[#c13584]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                                <span>/the.sudeep_</span>
                            </div>
                        </Link>

                        <Link className='border-2 px-4 bg-blue-200 shadow-xl shadow-indigo-600/30 border-blue-600 py-1 rounded transition-all duration-400  ' target='_blank' href={'https://linkedin.com/in/sudeep-bogati'}>
                            <div className="[&>svg]:h-5 [&>svg]:w-5 flex items-center font-semibold gap-2 text-sm cursor-pointer hover:text-blue-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                                <span>/sudeep-bogati</span>
                            </div>
                        </Link>

                        <Link className='border-2 px-4 shadow-xl shadow-yellow-600/30 bg-orange-200 border-orange-600 py-1 rounded transition-all duration-400 ' href={'https://stackoverflow.com/users/24161634/sudeepbogati'} target='_blank'>
                            <div className="[&>svg]:h-5 [&>svg]:w-5 flex gap-2 items-center font-semibold text-sm cursor-pointer hover:text-orange-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 384 512">
                                    <path
                                        d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
                                </svg>
                                <span>/sudeepbogati</span>
                            </div></Link>


                        <Link className='border-2 border-gray-600 px-4 shadow-xl shadow-gray-600/40 bg-gray-200 py-1 rounded transition-all duration-400 ' target='_blank' href={'https://x.com/soodeep77'}>
                            <div className="[&>svg]:h-5 [&>svg]:w-5 flex items-center font-semibold text-sm gap-2  cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                                <span>/soodeep77</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </main>
    )
}