'use client';
import React from "react";

export default function Nav() {
    return (
        <>
            <nav className='fixed top-0 p-4 font-medium my-2 text-white  rounded-2xl items-center mx-auto bg-[#0077b6] w-full flex gap-4 justify-around '>
                <span> About </span>
                <span> Contact  </span>
                <span> Projects </span>
                <span> Blogs </span>
                
            </nav>
            
        </>
    )
}