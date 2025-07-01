'use client';
import { motion } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { GraduationCap } from 'lucide-react';
import Image from 'next/image';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}
const TimelineItem = ({
    year,
    title,
    organization,
    description,
    details,
}: {
    year: string
    title: string
    organization: string
    description: string
    details?: string[]
}) => (
    <motion.div
        className="relative pl-8 pb-8 border-l border-gray-200 last:border-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
    >
        <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-sky-500"></div>
        <div className="text-sm text-gray-200">{year}</div>
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
        <div className="text-gray-200">{organization}</div>
        <p className="mt-2 text-gray-300">{description}</p>
        {details && (
            <ul className="mt-4 list-disc list-inside space-y-1">
                {details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-300">
                        {detail}
                    </li>
                ))}
            </ul>
        )}
    </motion.div>
)
export default function Index(): JSX.Element {
    return (
        <ReactLenis root>
            <main className=''>
                <div className='wrapper'>
                    <section className='text-gray-700  h-[80vh] w-full   grid place-content-center sticky top-0'>
                        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_top,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

                        <h1 className='2xl:text-7xl md:w-4/6 w-full mx-auto text-transparent bg-gradient-to-br from-sky-300 to-gray-500 bg-clip-text text-5xl md:text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
                            Who am I? Just a guy trying to make software smarter, smoother, and a bit more human.
                        </h1>
                    </section>

                    <section className='bg-gray-200  text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
                        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                        <div className=" md:w-4/6 w-full mx-auto flex flex-col items-center gap-6">
                            <h1 className='2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
                                From learning loops to professional pipelines — Turning theory into action, challenges into projects, and passion into profession.
                            </h1>
                            <div className="flex gap-6 justify-center mt-4">
                                <svg width="48" height="48" className="text-sky-600" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><use href="#icon-book-open" /></svg>
                                <svg width="48" height="48" className="text-emerald-600" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><use href="#icon-code" /></svg>
                                <svg width="48" height="48" className="text-yellow-500" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><use href="#icon-rocket" /></svg>
                                <svg width="48" height="48" className="text-pink-500" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><use href="#icon-heart" /></svg>
                            </div>
                            {/* Lucide SVG icons definitions */}
                            <svg style={{ display: 'none' }}>
                                <symbol id="icon-book-open" viewBox="0 0 24 24">
                                    <path d="M2 19.5V6a2 2 0 0 1 2-2h7" />
                                    <path d="M22 19.5V6a2 2 0 0 0-2-2h-7" />
                                    <path d="M2 19.5a2 2 0 0 1 2-2h7" />
                                    <path d="M22 19.5a2 2 0 0 0-2-2h-7" />
                                </symbol>
                                <symbol id="icon-code" viewBox="0 0 24 24">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </symbol>
                                <symbol id="icon-rocket" viewBox="0 0 24 24">
                                    <path d="M4.5 16.5L3 21l4.5-1.5" />
                                    <path d="M15 9l-6 6" />
                                    <path d="M10 14l-1.5 4.5L12 21l4.5-1.5L14 14" />
                                    <path d="M12 21V3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9z" />
                                </symbol>
                                <symbol id="icon-heart" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </symbol>
                            </svg>
                        </div>
                    </section>
                    <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
                        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                        <h1 className='2xl:text-7xl md:w-4/6 w-full mx-auto  text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
                            Get to know more about my educational background and how it shaped my journey.
                        </h1>
                    </section>
                </div>

                <section className='text-white   w-full bg-slate-950  '>
                    <div className='md:grid  md:w-4/6 w-full mx-auto   md:grid-cols-2'>
                        <div className='sticky top-0 h-screen flex items-center justify-center'>
                            <div className=" group  rounded-lg shadow-sm">
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-6">
                                        <GraduationCap className="w-6 h-6 text-sky-500" />
                                        <h2 className="text-2xl font-bold text-sky-500">Education</h2>
                                    </div>
                                    <div className="space-y-6">
                                        <TimelineItem
                                            year="2021 - 2025"
                                            title="Bachelors in Information Technology (BIT)"
                                            organization="Tribhuvan University, Kathmandu"
                                            description="Comprehensive study of Information Technology with focus on programming, databases, and web development."
                                            details={[
                                                "Programming: Java, C and C++",
                                                "Databases: SQL and NoSQL",
                                                "Web Development: HTML, CSS, PHP and JavaScript",
                                                "Software Engineering and System Design",
                                                "Networking and Security",
                                                "Data Structures and Algorithms",
                                            ]}
                                        />
                                        <TimelineItem
                                            year="2019 - 2021"
                                            title="+2, Computer Science"
                                            organization="Sungava College, Chitwan"
                                            description="Grade XI CGPA: 3.79 | Grade XII CGPA: 3.59"
                                            details={["Major Subjects: Physics, Chemistry, Mathematics, Computer"]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='gap-6 hidden md:grid '>
                            <figure className='grid place-content-center '>
                                <Image
                                    src='/college-images/col1_1.jpeg'
                                    alt=''
                                    width={320}
                                    height={384}
                                    className='transition-all duration-300 w-80 h-96  align-bottom object-cover '
                                />
                            </figure>
                            {/* <figure className='grid place-content-center'>
                                <Image
                                    src='/college-images/col2.jpeg'
                                    alt=''
                                    width={320}
                                    height={384}
                                    className='transition-all duration-300 w-80 h-96  align-bottom object-cover '
                                />
                            </figure> */}
                            <figure className='grid place-content-center '>
                                <Image
                                    src='/college-images/col3.jpeg'
                                    alt=''
                                    width={320}
                                    height={384}
                                    className='transition-all duration-300 w-80 h-96  align-bottom object-cover '
                                />
                            </figure>
                            <figure className='grid place-content-center'>
                                <Image
                                    src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                                    alt=''
                                    width={320}
                                    height={384}
                                    className='transition-all duration-300 w-80 h-96  align-bottom object-cover '
                                />
                            </figure>
                        </div>
                    </div>
                </section>
                {/* <section className='text-white z-40  w-full bg-slate-950  '>
                    <div className='grid grid-cols-2 px-8'>
                        <div className='grid gap-2'>
                            <figure className='sticky top-0 h-screen grid place-content-center'>
                                <img
                                    src='https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop'
                                    alt=''
                                    className='transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md'
                                />
                            </figure>
                            <figure className='sticky top-0 h-screen grid place-content-center'>
                                <img
                                    src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop'
                                    alt=''
                                    className='transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md'
                                />
                            </figure>
                            <figure className='sticky top-0 h-screen grid place-content-center'>
                                <img
                                    src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                                    alt=''
                                    className='transition-all duration-300 w-96 h-96   align-bottom object-cover rounded-md'
                                />
                            </figure>
                            <figure className='sticky top-0 h-screen grid place-content-center'>
                                <img
                                    src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                                    alt=''
                                    className='transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md'
                                />
                            </figure>
                        </div>
                        <div className='sticky top-0 h-screen grid place-content-center'>
                            <h1 className='text-4xl px-8 font-medium text-right tracking-tight leading-[120%]'>
                                Copied & Paste Every Component you want and make an creative
                                website 😎
                            </h1>
                        </div>
                    </div>
                </section> */}
            </main>
        </ReactLenis>
    );
}