"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, Briefcase, Heart, Mail, Linkedin, Github } from "lucide-react"
import './about.css'
import { SvgComponent1 } from "@/components/SvgFrame"
import Index from "./scroll"
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
                <div className="md:w-4/6 w-full mx-auto  flex flex-col lg:flex-row items-center gap-8 mb-16">
                    <motion.div className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>


                        {/* Image Container with Mask */}
                        <div
                            className="rounded-2xl overflow-hidden "
                        >
                            <Image
                                width={500}
                                height={500}
                                src="/new_profile.png"
                                alt="Sudeep Bogati"
                                className="object-cover drop-shadow-xl"
                                sizes="(max-width: 768px) 100vw, 256px"
                                style={{
                                    maskImage: "url('/clip-path.svg')",
                                    maskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                }}
                            />
                        </div>

                    </motion.div>
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h1
                            className="text-5xl font-bold text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Sudeep Bogati
                        </motion.h1>
                        <motion.h2
                            className="text-base md:text-xl text-sky-800 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Full Stack Software Engineer
                        </motion.h2>
                        <motion.p
                            className="md:text-lg text-base text-justify text-gray-500 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            A Full-Stack Software Engineer passionate about solving business problems through innovative and effective
                            software solutions. Currently working at Green Tick Nepal Pvt. Ltd, building Cybersecurity Products and
                            implementing DevSecOps principles.
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <a
                                href="mailto:hello@sudipbogati.com.np"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-sky-100 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                Email
                            </a>
                            <a
                                href="https://linkedin.com/in/sudeep-bogati"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-sky-100 transition-colors"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/sudeepbogati7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-sky-100 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        </motion.div>
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

                {/* Education Section */}
                <motion.section
                    className="mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="bg-gray-50 group  rounded-lg border border-gray-200   shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <GraduationCap className="w-6 h-6 text-sky-700" />
                                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
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
                </motion.section>

                {/* Work Experience Section */}
                <motion.section
                    className="mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <Briefcase className="w-6 h-6 text-sky-700" />
                                <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
                            </div>
                            <div className="space-y-6">
                                <TimelineItem
                                    year="June 2024 - Present"
                                    title="Associate Software Engineer"
                                    organization="Greentick Nepal - Gyaneshwor, Kathmandu"
                                    description="Proactive Associate Software Developer with a strong background in full stack development."
                                    details={[
                                        "Developed web applications using React, Next.js, Tailwind CSS, and TypeScript",
                                        "Built backend services with Django Rest Framework and Python",
                                        "Integrated RESTful APIs for enhanced data retrieval",
                                        "Implemented responsive design practices",
                                        "Technical Stack: React, Next.js, TypeScript, Python, Django REST Framework, MySQL, PostgreSQL, Docker, Git",
                                    ]}
                                />
                                <TimelineItem
                                    year="March 2024 - May 2024"
                                    title="Software Engineer Intern"
                                    organization="Greentick Nepal - Gyaneshwor, Kathmandu"
                                    description="Full Stack Developer Intern focusing on web application development using modern technologies."
                                />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Volunteering Section */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
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
                </motion.section>
            </motion.div>
        </div>
    )
}

