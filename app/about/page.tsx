"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, Briefcase, Heart, Mail, Linkedin, Github, MapPin } from "lucide-react"
import './about.css'
import { SvgComponent1 } from "@/components/SvgFrame"
import Index from "./components/introScrollHeadings"
import WorkExperience from "./components/work-experience"
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
        <div className="absolute left-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-sky-700"></div>
        <div className="text-sm text-gray-600">{year}</div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="text-gray-600">{organization}</div>
        <p className="mt-2 text-gray-700">{description}</p>
        {details && (
            <ul className="mt-4 list-disc list-inside space-y-1">
                {details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-600">
                        {detail}
                    </li>
                ))}
            </ul>
        )}
    </motion.div>
)

export default function AboutPage() {
    return (
        <div className=" mx-auto w-full py-12">
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            {/* Hero Section */}
            <motion.div
                className=" mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="  relative overflow-hidden">
                    {/* Background Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-sky-200/30 to-blue-300/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-pink-300/20 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10  mx-auto px-6 py-20">
                        <div className="max-w-6xl px-4 mx-auto flex flex-col lg:flex-row items-center gap-12">
                            {/* Image Section */}
                            <motion.div
                                className="relative flex-shrink-0"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                {/* Decorative Background Elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-3xl transform rotate-6 scale-105"></div>
                                <div className="absolute inset-0 bg-gradient-to-tl from-indigo-400/15 to-sky-500/15 rounded-3xl transform -rotate-3 scale-110"></div>

                                {/* Main Image Container */}
                                <div className="relative w-80 h-80 md:w-96 md:h-96">
                                    {/* Gradient Border */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-3xl p-1">
                                        <div className="w-full h-full bg-white rounded-3xl overflow-hidden">
                                            <Image
                                                width={400}
                                                height={400}
                                                src="/new_profile.png"
                                                alt="Sudeep Bogati"
                                                className="w-full h-full object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>

                                    {/* Floating Elements */}
                                    <motion.div
                                        className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"
                                        animate={{ y: [-10, 10, -10] }}
                                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                    ></motion.div>
                                    <motion.div
                                        className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-sky-400 to-sky-700 rounded-full shadow-lg"
                                        animate={{ y: [10, -10, 10] }}
                                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                    ></motion.div>
                                    <motion.div
                                        className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg"
                                        animate={{ x: [-5, 5, -5] }}
                                        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                    ></motion.div>
                                </div>

                                {/* Status Badge */}
                                <motion.div
                                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-700">Available for gigs</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Content Section */}
                            <div className="w-full flex-1 text-center lg:text-left max-w-4xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                        <MapPin className="w-4 h-4" />
                                        Nepal
                                    </div>
                                </motion.div>

                                <motion.h1
                                    className=" font-black-ops-one text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-sky-600   to-gray-900 bg-clip-text text-transparent py-3"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    Sudeep Bogati
                                </motion.h1>

                                <motion.h2
                                    className="text-lg md:text-xl text-sky-700 font-semibold mb-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    Full Stack Software Engineer
                                </motion.h2>

                                <motion.p
                                    className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    A Full-Stack Software Engineer passionate about solving business problems through innovative and effective
                                    software solutions. Currently working at Green Tick Nepal Pvt. Ltd, building Cybersecurity Products and
                                    implementing DevSecOps principles.
                                </motion.p>

                                {/* Stats */}
                                <motion.div
                                    className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">1+</div>
                                        <div className="text-sm text-gray-600">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">10+</div>
                                        <div className="text-sm text-gray-600">Projects Completed</div>
                                    </div>
                                    {/* <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900"></div>
                                        <div className="text-sm text-gray-600">Companies Worked With</div>
                                    </div> */}
                                </motion.div>

                                {/* Action Buttons */}
                                <motion.div
                                    className="flex flex-wrap gap-4 justify-center lg:justify-start"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                >
                                    <a
                                        href="mailto:hello@sudipbogati.com.np"
                                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                        Get In Touch
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/sudeep-bogati"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-medium border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                                    >
                                        <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        LinkedIn
                                    </a>

                                    <a
                                        href="https://github.com/sudeepbogati7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-medium border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                                    >
                                        <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                        GitHub
                                    </a>
                                </motion.div>
                            </div>
                        </div>

                        {/* Scroll Indicator */}
                     
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <motion.div
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: [0, 10, 0], opacity: [1, 0.7, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                        className="flex flex-col items-center"
                    >
                        <span className="block w-1.5 h-8 bg-sky-700 rounded-full mb-1" />
                        <svg width="24" height="24" fill="none" className="animate-bounce">
                            <path d="M12 16V4M12 16l-5-5M12 16l5-5" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xs text-gray-500 mt-1">Scroll</span>
                    </motion.div>
                </div>

                <Index />

                <WorkExperience />
                {/* Volunteering Section */}
                {/* <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                    <div className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <Heart className="w-6 h-6 text-sky-700" />
                                <h2 className="text-2xl font-bold text-gray-900">Volunteering Experience</h2>
                            </div>
                            <div className="space-y-6">
                                <TimelineItem
                                    year="2023 - Present"
                                    title="Executive"
                                    organization="Open-Source ASCOL Circle (OSAC)"
                                    description="OSAC is a group of learners based primarily on Computer Science and Information Technologies students from Amrit Science College, Tribhuvan University, Nepal."
                                />
                                <TimelineItem
                                    year="Sept 2023 - Feb 2024"
                                    title="Judges and Expert Coordinator"
                                    organization="Hult Prize, ASCOL"
                                    description="Coordinated for the world's largest student social entrepreneurship competition, partnering with the United Nations to solve pressing social issues through sustainable social enterprises."
                                />
                            </div>
                        </div>
                    </div>
                </motion.section> */}
            </motion.div>
        </div>
    )
}

