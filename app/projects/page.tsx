"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import GitHubCalendar from "react-github-calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { projectsData, smallProjectsData, apiProjectsData } from "@/data/projects"
// Project data structure
interface Technology {
    name: string
}

interface Feature {
    title: string
    description: string
}

interface ProjectImage {
    src: string
    alt: string
}

interface Project {
    id: string
    title: string
    date: string
    description: string
    technologies: Technology[]
    features: Feature[]
    images: ProjectImage[]
    liveUrl?: string
    githubUrl: string
    bgColor: string
}


// Loading component
const Loading = () => (
    <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
)

export default function Projects() {
    const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({})

    const toggleProjectDetails = (projectId: string) => {
        setExpandedProjects((prev) => ({
            ...prev,
            [projectId]: !prev[projectId],
        }))
    }

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const staggerItem = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <main className="md:container mx-auto py-20 px-4 font-sans">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        <span className="text-blue-600">Projects</span> that I Have Built
                    </h1>
                    <p className="text-gray-500 max-w-3xl mx-auto">
                        Here are some of the projects I have worked on. Each one reflects my skills and dedication in full stack
                        software development. Take a look to see what I have created and the problems I have solved.
                    </p>
                </motion.div>

                <Tabs defaultValue="featured" className="mb-16">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                        <TabsTrigger value="featured">Featured</TabsTrigger>
                        <TabsTrigger value="apis">APIs</TabsTrigger>
                        <TabsTrigger value="small">Small Projects</TabsTrigger>
                    </TabsList>

                    <TabsContent value="featured" className="space-y-12">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        },
                                    },
                                }}
                                whileHover={{ y: -5 }}
                                className={`rounded-xl shadow-lg overflow-hidden ${project.bgColor}`}
                            >
                                <Card className="border-0 bg-transparent">
                                    <CardContent className="p-0">
                                        <div className="grid md:grid-cols-2 gap-6 p-6">
                                            <motion.div
                                                className="space-y-4"
                                                variants={{
                                                    hidden: { opacity: 0, x: -20 },
                                                    visible: {
                                                        opacity: 1,
                                                        x: 0,
                                                        transition: { duration: 0.5, delay: 0.1 },
                                                    },
                                                }}
                                            >
                                                <div className="grid grid-cols-2 gap-2">
                                                    {project.images.slice(0, 4).map((image, idx) => (
                                                        <Suspense key={idx} fallback={<Loading />}>
                                                            <motion.div
                                                                whileHover={{ scale: 1.05 }}
                                                                className="aspect-video rounded-lg overflow-hidden border border-gray-300 shadow-md"
                                                            >
                                                                <Image
                                                                    src={image.src || "/placeholder.svg"}
                                                                    alt={image.alt}
                                                                    width={300}
                                                                    height={200}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </motion.div>
                                                        </Suspense>
                                                    ))}
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                className="space-y-4"
                                                variants={{
                                                    hidden: { opacity: 0, x: 20 },
                                                    visible: {
                                                        opacity: 1,
                                                        x: 0,
                                                        transition: { duration: 0.5, delay: 0.2 },
                                                    },
                                                }}
                                            >
                                                <div>
                                                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                                                    <CardDescription className="text-sm mt-1">{project.date}</CardDescription>
                                                </div>

                                                <p className="text-gray-600">{project.description}</p>

                                                <motion.div
                                                    className="flex flex-wrap gap-2"
                                                    variants={staggerContainer}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                >
                                                    {project.technologies.map((tech, idx) => (
                                                        <motion.div key={idx} variants={staggerItem}>
                                                            <Badge
                                                                variant="secondary"
                                                                className="bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
                                                            >
                                                                {tech.name}
                                                            </Badge>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>

                                                <div className="space-y-2">
                                                    <h3 className="font-semibold border-b border-gray-300 pb-1 w-fit">Features</h3>
                                                    <div className="relative">
                                                        <ul
                                                            className={`list-disc pl-5 space-y-2 transition-all duration-500 ${expandedProjects[project.id] ? "max-h-[400px]" : "max-h-24 overflow-hidden"
                                                                }`}
                                                        >
                                                            {project.features.map((feature, idx) => (
                                                                <li key={idx} className="text-sm">
                                                                    <span className="font-semibold">{feature.title}: </span>
                                                                    {feature.description}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        {!expandedProjects[project.id] && (
                                                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-transparent pointer-events-none" />
                                                        )}
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                                        onClick={() => toggleProjectDetails(project.id)}
                                                    >
                                                        {expandedProjects[project.id] ? (
                                                            <>
                                                                Show Less <ChevronUp className="ml-1 h-4 w-4" />
                                                            </>
                                                        ) : (
                                                            <>
                                                                Show More <ChevronDown className="ml-1 h-4 w-4" />
                                                            </>
                                                        )}
                                                    </Button>
                                                </div>

                                                <div className="flex gap-4">
                                                    {project.liveUrl && (
                                                        <Button
                                                            asChild
                                                            variant="outline"
                                                            size="sm"
                                                            className="hover:bg-blue-50 transition-colors duration-300"
                                                        >
                                                            <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2">
                                                                Visit Site <ExternalLink className="h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                    )}
                                                    <Button
                                                        asChild
                                                        variant="outline"
                                                        size="sm"
                                                        className="hover:bg-gray-100 transition-colors duration-300"
                                                    >
                                                        <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2">
                                                            <Github className="h-4 w-4" /> GitHub
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </TabsContent>

                    <TabsContent value="apis" className="space-y-6">
                        <motion.div
                            className="grid md:grid-cols-2 gap-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {apiProjectsData.map((project, index) => (
                                <motion.div key={index} variants={staggerItem} whileHover={{ y: -5 }}>
                                    <Card className="h-full transition-all duration-300 hover:shadow-lg">
                                        <CardHeader>
                                            <CardTitle>{project.title}</CardTitle>
                                            <CardDescription>{project.date}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600 mb-4">{project.description}</p>
                                            <motion.div
                                                className="flex flex-wrap gap-2 mb-4"
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                {project.technologies.map((tech, i) => (
                                                    <motion.div key={i} variants={staggerItem}>
                                                        <Badge
                                                            variant="secondary"
                                                            className="bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                asChild
                                                variant="outline"
                                                size="sm"
                                                className="hover:bg-gray-100 transition-colors duration-300"
                                            >
                                                <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2">
                                                    <Github className="h-4 w-4" /> Source Code
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="small" className="space-y-6">
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {smallProjectsData.map((project, index) => (
                                <motion.div
                                    key={index}
                                    variants={staggerItem}
                                    whileHover={{ y: -5 }}
                                    className={`rounded-lg h-fit shadow-md  ${project.bgColor}`}
                                >
                                    <Card className="h-full border-0 bg-transparent transition-all duration-300 hover:shadow-lg">
                                        <CardHeader>
                                            <CardTitle className="text-lg">{project.title}</CardTitle>
                                            {project.date && <CardDescription>{project.date}</CardDescription>}
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {project.image && (
                                                <motion.div
                                                    whileHover={{ scale: 1.03 }}
                                                    className="rounded-lg overflow-hidden border border-gray-300 shadow-md"
                                                >
                                                    <Image
                                                        src={project.image || "/placeholder.svg"}
                                                        alt={project.title}
                                                        width={400}
                                                        height={200}
                                                        className="w-full h-auto object-cover"
                                                    />
                                                </motion.div>
                                            )}
                                            <p className="text-gray-600 text-sm">{project.description}</p>
                                            <motion.div
                                                className="flex flex-wrap gap-2"
                                                variants={staggerContainer}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                            >
                                                {project.technologies.map((tech, i) => (
                                                    <motion.div key={i} variants={staggerItem}>
                                                        <Badge
                                                            variant="secondary"
                                                            className="bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                            {project.features && (
                                                <div>
                                                    <h3 className="font-semibold text-sm mb-2">Features</h3>
                                                    <ul className="list-disc pl-5 space-y-1 text-sm">
                                                        {project.features.map((feature, i) => (
                                                            <li key={i}>{feature}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </CardContent>
                                        <CardFooter className="flex gap-4">
                                            {project.liveUrl && (
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="hover:bg-blue-50 transition-colors duration-300"
                                                >
                                                    <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2">
                                                        Visit Site <ExternalLink className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            )}
                                            <Button
                                                asChild
                                                variant="outline"
                                                size="sm"
                                                className="hover:bg-gray-100 transition-colors duration-300"
                                            >
                                                <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2">
                                                    <Github className="h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </TabsContent>
                </Tabs>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mt-20 text-center"
                >
                    <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2 text-green-800">
                        My GitHub Activity Calendar
                        <Link
                            href="https://github.com/sudeepbogati7/"
                            className="text-gray-600 border-b border-gray-300 flex items-center gap-2 hover:text-gray-800 transition-colors duration-300"
                        >
                        </Link>
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="max-w-full overflow-auto bg-white w-fit mx-auto p-6 rounded-lg shadow-md"
                    >
                        <Suspense fallback={<Loading />}>
                            <GitHubCalendar  username="sudeepbogati7" />
                        </Suspense>
                    </motion.div>
                </motion.div>
            </main>

           
        </div>
    )
}

