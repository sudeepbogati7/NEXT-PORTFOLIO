"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { CodeXml, Database, Frame } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function TechTabs() {
    const [activeTab, setActiveTab] = useState("dev-tools")

    // Sample data for tools, databases, and programming languages
    const tools = [
        {
            name: "Git",
            icon: "/git.png",
            borderColor: "border-orange-400",
            shadowColor: "shadow-orange-400/50",
            bgColor: "bg-orange-100",
        },
        {
            name: "Github",
            icon: "/github.png",
            borderColor: "border-gray-500",
            shadowColor: "shadow-gray-800/50",
            bgColor: "bg-gray-200",
        },
        {
            name: "Docker",
            icon: "/docker.png",
            borderColor: "border-blue-600",
            shadowColor: "shadow-blue-600/50",
            bgColor: "bg-blue-100",
        },
        {
            name: "AWS Cloud",
            icon: "/aws.svg",
            borderColor: "border-orange-500",
            shadowColor: "shadow-orange-800/50",
            bgColor: "bg-gray-200",
        },
        {
            name: "Nginx",
            icon: "/nginx.svg",
            borderColor: "border-green-600",
            shadowColor: "shadow-green-600/50",
            bgColor: "bg-green-100",
        },
        {
            name: "RabbitMQ",
            icon: "/rabbitmq.svg",
            borderColor: "border-orange-500",
            shadowColor: "shadow-orange-500/50",
            bgColor: "bg-orange-50",
        },
    ]

    const databases = [
        {
            name: "MySQL",
            icon: "/mysql.png",
            borderColor: "border-blue-900",
            shadowColor: "shadow-indigo-500/50",
            bgColor: "bg-blue-100",
        },
        {
            name: "PostgreSQL",
            icon: "/postgresql.svg",
            borderColor: "border-blue-700",
            shadowColor: "shadow-blue-500/50",
            bgColor: "bg-blue-100",
        },
        {
            name: "MongoDB",
            icon: "/mongodb.svg",
            borderColor: "border-green-400",
            shadowColor: "shadow-green-500/30",
            bgColor: "bg-green-100",
        },
        {
            name: "Elasticsearch",
            icon: "/elastic.svg",
            borderColor: "border-yellow-500",
            shadowColor: "shadow-yellow-500/40",
            bgColor: "bg-yellow-50",
        },
        {
            name: "Redis",
            icon: "/redis.svg",
            borderColor: "border-red-500",
            shadowColor: "shadow-red-500/40",
            bgColor: "bg-red-50",
        },
    ]

    const languages = [
        {
            name: "JavaScript",
            image: "/js.png",
            borderColor: "border-yellow-500",
            shadowColor: "shadow-yellow-500/40",
            bgColor: "bg-yellow-100",
        },
        {
            name: "TypeScript",
            image: "/ts.png",
            borderColor: "border-blue-500",
            shadowColor: "shadow-blue-500/40",
            bgColor: "bg-blue-100",
        },
        {
            name: "Python",
            image: "/python.png",
            borderColor: "border-yellow-500",
            shadowColor: "shadow-orange-400/40",
            bgColor: "bg-blue-100",
        },
        {
            name: "C/C++",
            image: "/c.png",
            borderColor: "border-gray-500",
            shadowColor: "shadow-gray-600/40",
            bgColor: "bg-gray-200",
        },
        {
            name: "C#",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg",
            borderColor: "border-purple-500",
            shadowColor: "shadow-purple-500/40",
            bgColor: "bg-purple-100",
        },
        {
            name: "SQL",
            image: "/sql.svg",
            borderColor: "border-teal-500",
            shadowColor: "shadow-teal-500/40",
            bgColor: "bg-teal-100",
        },
    ]

    // Animation variants for tab content
    const contentVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    }

    // Animation variants for tech items
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i: any) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.3,
            },
        }),
    }

    // Animation variants for illustrations
    const illustrationVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    useEffect(() => {
        AOS.init({ duration: 900 }) // Initialize AOS with a duration of 900ms
    }, [])

    return (
        <div data-aos="fade-up" className="w-full my-12 mx-auto md:w-4/6 font-mono rounded-2xl shadow bg-gray-50 p-5">
            <Tabs
                defaultValue="dev-tools"
                orientation="horizontal"
                className="flex flex-col md:flex-row gap-6"
                onValueChange={setActiveTab}
            >
                <TabsList className="flex flex-row md:flex-col gap-2 h-auto md:h-auto md:w-64 p-2 bg-sky-100 rounded-xl">
                    <TabsTrigger
                        value="languages"
                        className="flex items-center gap-2 justify-start w-full px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-sky-600 transition-all duration-200"
                    >
                        <CodeXml />
                        <span className="font-medium">Programming Languages</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="dev-tools"
                        className="flex items-center gap-2 justify-start w-full px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-sky-600 transition-all duration-200"
                    >
                        <Frame />
                        <span className="font-medium">Dev Tools</span>
                    </TabsTrigger>

                    <TabsTrigger
                        value="databases"
                        className="flex items-center gap-2 justify-start w-full px-4 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-sky-600 transition-all duration-200"
                    >
                        <Database />
                        <span className="font-medium">Databases & Caching</span>
                    </TabsTrigger>


                </TabsList>

                <div className="flex-1  rounded-xl p-6 h-[400px] overflow-y-auto ">
                    <TabsContent value="dev-tools" className="mt-0 h-full">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            key={`content-${activeTab === "dev-tools"}`}
                            className="h-full"
                        >
                            <h3 className="text-xl font-bold mb-6 text-sky-700">Development Tools</h3>
                            <div className="flex gap-4 flex-wrap items-start justify-start mb-8">
                                {tools.map((tool, index) => (
                                    <motion.span
                                        custom={index}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        key={index}
                                        className={`
                                          border shadow ${tool.shadowColor} 
                                          cursor-pointer py-2 text-sm text-gray-700 
                                          ${tool.borderColor} w-fit px-4 rounded-md 
                                          ${tool.bgColor} flex items-center gap-2 
                                          font-medium hover:scale-110 hover:shadow-md
                                          transition-all duration-300 ease-in-out
                                        `}
                                    >
                                        <Image
                                            src={tool.icon || "/placeholder.svg?height=22&width=22"}
                                            width={22}
                                            height={24}
                                            alt={`${tool.name} icon`}
                                            className="object-contain"
                                        />
                                        {tool.name}
                                    </motion.span>
                                ))}
                            </div>

                            <motion.div
                                className="flex gap-4 overflow-hidden items-center  mt-4"
                                variants={illustrationVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <p className="text-center overflow-hidden w-1/2 text-sky-700 mt-4 italic">
                                    "Code with Git, share on GitHub, run in Docker, scale on AWS, serve with Nginx, and let RabbitMQ do the talking!"
                                </p>
                                <div className="relative w-56 h-56">
                                    <Image
                                        src="/dev_tools.svg"
                                        alt="Developer tools illustration"
                                        width={256}
                                        height={256}
                                        className="object-contain"
                                    />
                                </div>

                            </motion.div>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="databases" className="mt-0 h-full">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            key={`content-${activeTab === "databases"}`}
                            className="h-full  flex flex-col items-start justify-center"
                        >
                            <h3 className="text-xl font-bold mb-6 text-sky-700">Databases & Caching</h3>
                            <div className="flex flex-wrap gap-4 items-start justify-start mb-8">
                                {databases.map((db, index) => (
                                    <motion.span
                                        custom={index}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        key={index}
                                        className={`
                                          ${db.borderColor} border
                                          shadow ${db.shadowColor} 
                                          ${db.bgColor} 
                                          flex items-center px-4 py-2 
                                          rounded-md w-fit text-sm gap-2
                                          hover:scale-110 hover:shadow-md
                                          transition-all duration-300 ease-in-out
                                          cursor-pointer
                                        `}
                                    >
                                        <Image
                                            src={db.icon || "/placeholder.svg?height=20&width=20"}
                                            width={20}
                                            height={20}
                                            alt={`${db.name} icon`}
                                            className="object-contain"
                                        />
                                        {db.name}
                                    </motion.span>
                                ))}
                            </div>

                            <motion.div
                                className="flex overflow-hidden items-center gap-8 mt-6"
                                variants={illustrationVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="bg-sky-50 p-4 rounded-lg shadow-md">
                                    <h4 className="text-sky-700 font-semibold mb-2">SQL vs NoSQL</h4>
                                    <div className="flex gap-4">
                                        <div className="bg-white p-3 rounded border border-sky-200 shadow-sm">
                                            <p className="text-xs font-medium">Structured</p>
                                            <p className="text-xs text-gray-600">Tables & Relations</p>
                                        </div>
                                        <div className="bg-white p-3 rounded border border-sky-200 shadow-sm">
                                            <p className="text-xs font-medium">Flexible</p>
                                            <p className="text-xs text-gray-600">Documents & Collections</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative w-64  flex items-center justify-center">
                                    <Image
                                        src="/database_ill.svg"
                                        alt="Database illustration"
                                        width={170}
                                        height={160}
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="languages" className="mt-0 h-full">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            key={`content-${activeTab === "languages"}`}
                            className="h-full flex flex-col  justify-center"
                        >
                            <h3 className="text-xl font-bold mb-6 text-sky-700">Programming Languages</h3>
                            <div className="flex flex-wrap gap-4 items-start justify-start mb-8">
                                {languages.map((lang, index) => (
                                    <motion.span
                                        custom={index}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        key={index}
                                        className={`
                                          ${lang.borderColor} border
                                          shadow ${lang.shadowColor} 
                                          ${lang.bgColor} 
                                          flex items-center px-4 py-2 
                                          rounded-md w-fit text-sm gap-2
                                          hover:scale-110 hover:shadow-md
                                          transition-all duration-300 ease-in-out
                                          cursor-pointer
                                        `}
                                    >
                                        <Image
                                            src={lang.image || "/placeholder.svg?height=20&width=20"}
                                            width={20}
                                            height={20}
                                            alt={`${lang.name} icon`}
                                            className="object-contain"
                                        />
                                        {lang.name}
                                    </motion.span>
                                ))}
                            </div>

                            <motion.div
                                className="flex items-center justify-center  w-full gap-4 mt-6"
                                variants={illustrationVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="bg-gradient-to-br w-full md:w-1/2 from-sky-50 to-blue-100 p-4 rounded-lg shadow-md">
                                    <h4 className="text-sky-700 font-semibold mb-2">Language Paradigms</h4>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                                            Object-Oriented
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                            Functional
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            Procedural
                                        </li>
                                    </ul>
                                </div>

                                <div className="relative w-full md:w-1/2  flex items-center justify-center">
                                    <Image
                                        src="/coding_illustration.svg"
                                        alt="Database illustration"
                                        width={170}
                                        height={160}
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}

