"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, X } from "lucide-react"

// Sample soft skills data
const softSkills = [
    {
        name: "Communication",
        icon: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8 9h8M8 13h6M11 17H9a2 2 0 0 0-2 2v1h10v-1a2 2 0 0 0-2-2h-2ZM15 17h4a2 2 0 0 1 2 2v1H9M10 8V6a2 2 0 0 1 2-2h0v0a2 2 0 0 1 2 2v2M7 8v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8"></path>
            </svg>
        ),
        description:
            "Excellent verbal and written communication skills, with the ability to explain complex technical concepts to non-technical stakeholders in a clear and concise manner.",
        color: "from-blue-500 to-sky-300",
    },
    {
        name: "Teamwork",
        icon: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        ),
        description:
            "Strong collaborative mindset with experience working in cross-functional teams. Able to contribute ideas while respecting diverse perspectives and working toward shared goals.",
        color: "from-green-500 to-emerald-300",
    },
    {
        name: "Problem Solving",
        icon: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M9.5 14.5 3 21"></path>
                <path d="M9.5 14.5l-5-5"></path>
                <path d="m14.5 9.5 5 5"></path>
                <path d="M14.5 9.5l-5 5"></path>
                <path d="M4.5 19.5 9 15"></path>
                <path d="M15 9 19.5 4.5"></path>
                <path d="M15 15V9h-6"></path>
                <circle cx="7" cy="7" r="3"></circle>
                <circle cx="17" cy="17" r="3"></circle>
            </svg>
        ),
        description:
            "Analytical approach to identifying and solving complex problems. Able to break down large challenges into manageable tasks and implement effective solutions.",
        color: "from-purple-500 to-violet-300",
    },
    {
        name: "Adaptability",
        icon: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                <path d="M16 21h5v-5"></path>
            </svg>
        ),
        description:
            "Quick to adapt to new technologies, methodologies, and changing project requirements. Comfortable with ambiguity and able to pivot when necessary.",
        color: "from-amber-500 to-yellow-300",
    },
    {
        name: "Time Management",
        icon: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        ),
        description:
            "Excellent organizational skills with the ability to prioritize tasks, meet deadlines, and manage multiple projects simultaneously without compromising quality.",
        color: "from-red-500 to-rose-300",
    },
]

export default function InteractiveSoftSkills() {
    const [selectedSkill, setSelectedSkill] = useState<number | null>(null)
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

    return (
        <div className="relative z-10 py-24">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-2 items-center font-bold text-2xl w-fit mx-auto mb-12"
            >
                <Image className="md:w-[300px] w-[150px] " src={'/teamwork.svg'} width={300} height={200} alt="soft skills"></Image>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-2 font-rowdies items-center font-bold text-2xl md:text-3xl w-fit mx-auto mb-12"
            >
                <Sparkles className="w-6 h-6 text-sky-700" />
                Soft Skills
            </motion.div>


            <div className="md:w-4/6 w-full  mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
                    {/* Left side - Skills list */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-4 p-6 rounded-lg  overflow-hidden lg:col-span-3"
                    >
                        <div className="flex flex-col gap-3">
                            {softSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                    onHoverStart={() => setHoveredSkill(index)}
                                    onHoverEnd={() => setHoveredSkill(null)}
                                    onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
                                    className={`flex gap-3 items-center font-semibold cursor-pointer p-3 rounded-lg
                    ${selectedSkill === index
                                            ? "bg-gradient-to-r from-sky-200 to-white text-sky-700 shadow-md"
                                            : "text-gray-700 hover:text-sky-700 hover:bg-sky-100"
                                        } 
                    transition-all duration-300 group`}
                                >
                                    <div
                                        className={`${selectedSkill === index ? "text-sky-700" : "text-sky-700/70 group-hover:text-sky-700"} transition-colors`}
                                    >
                                        {skill.icon()}
                                    </div>
                                    <span>{skill.name}</span>

                                    {selectedSkill !== index && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="ml-auto bg-sky-100 text-sky-700 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                                        >
                                            +
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>



                    {/* Right side - Description and details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-6 lg:col-span-7"
                    >
                        {selectedSkill !== null ? (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`skill-detail-${selectedSkill}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-sky-50 rounded-xl shadow-lg p-6 relative border border-sky-100"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg bg-gradient-to-br ${softSkills[selectedSkill].color} text-white`}>
                                                {softSkills[selectedSkill].icon()}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">{softSkills[selectedSkill].name}</h3>
                                        </div>
                                        <button
                                            onClick={() => setSelectedSkill(null)}
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <p className="text-gray-600">{softSkills[selectedSkill].description}</p>

                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <h4 className="font-medium text-gray-700 mb-2">How I apply this skill:</h4>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            <li>Through regular project updates and documentation</li>
                                            <li>By actively listening to team members and stakeholders</li>
                                            <li>When presenting technical solutions to diverse audiences</li>
                                        </ul>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                                            <div className="h-2 w-8 rounded-full bg-sky-200"></div>
                                            <div className="text-sm text-sky-700 font-medium">Proficiency Level: Expert</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                <div className="text-gray-600 mb-6">
                                    <p className="mb-4">
                                        Strong soft skills are crucial for effective communication, teamwork, and problem-solving in
                                        software development. These skills complement my technical abilities, helping me work well with
                                        others and adapt to new challenges.
                                    </p>
                                    <p>
                                        Select a skill from the left to learn more about how I apply these interpersonal abilities in
                                        professional settings. Each skill represents an important aspect of my approach to collaboration and
                                        project execution.
                                    </p>
                                </div>

                                <div className="bg-sky-50 rounded-lg p-6 border border-sky-100">
                                    <h3 className="text-sky-700 font-semibold mb-3">Why Soft Skills Matter in Tech</h3>
                                    <p className="text-gray-600 mb-4">
                                        In todays collaborative development environments, technical expertise alone is not enough. The
                                        ability to communicate effectively, work in teams, and adapt to changing requirements is equally
                                        important for project success.
                                    </p>
                                    <div className="flex items-center gap-3 text-sm text-gray-600 mt-4">
                                        <Sparkles className="w-4 h-4 text-sky-500" />
                                        <span>Click on any skill to see details about my experience and approach</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

