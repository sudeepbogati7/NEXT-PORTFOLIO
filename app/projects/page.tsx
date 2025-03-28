"use client"

import { useState, useEffect } from "react"
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

// Mock data for projects
const projectsData: Project[] = [
    {
        id: "expense-tracker",
        title: "Expense Tracking System",
        date: "April 2, 2024",
        description:
            "Developed a comprehensive expense tracking system with user authentication for secure login and logout functionality. The system allows users to add, edit, and delete daily expenses, categorizing them for better organization. Users can filter expenses based on categories for detailed insights. Additionally, the system features an intuitive dashboard that enables users to view and analyze their expenses graphically, aiding in effective financial management.",
        technologies: [
            { name: "typescript" },
            { name: "next.js" },
            { name: "tailwindCSS" },
            { name: "node.js" },
            { name: "express.js" },
            { name: "chart.js" },
            { name: "jwt" },
        ],
        features: [
            {
                title: "User Authentication and Authorization",
                description: "Login, Register, forget password with Two Factor Authentication (2FA)",
            },
            {
                title: "Responsive Design",
                description: "Optimized for both mobile and desktop views.",
            },
            {
                title: "Add, modify and delete expenses",
                description:
                    "Add your expenses on daily basis by selecting appropriate category. Also users are able to edit, delete existing expenses.",
            },
            {
                title: "Filter based on category",
                description:
                    "Users are allowed to filter their daily expenses based on the categories so as to view and analyze their expenses more accurately.",
            },
            {
                title: "Data Visualization Dashboard",
                description:
                    "The application provides a comprehensive dashboard for analyzing daily and monthly expenses graphically which might help users to control their unnecessary expenses.",
            },
        ],
        images: [
            { src: "/expense-tracker.webp", alt: "Expense tracker preview" },
            { src: "/expense-tracker1.webp", alt: "Expense tracker dashboard" },
            { src: "/expense-tracker2.webp", alt: "Expense tracker mobile view" },
            { src: "/expense-tracker4.webp", alt: "Expense tracker analytics" },
        ],
        liveUrl: "https://expense-tracker-neon-one.vercel.app/",
        githubUrl: "https://github.com/sudeepbogati7/Expense-tracking-System",
        bgColor: "bg-orange-50",
    },
    {
        id: "chat-app",
        title: "ChatBook, realtime chat application",
        date: "Sept 14, 2023",
        description:
            "Developed a realtime chat application using WebSockets, React, and Node.js. Enables users to chat anonymously in real time, demonstrating my skills in full-stack development and real-time communication technologies.",
        technologies: [
            { name: "typescript" },
            { name: "node.js" },
            { name: "express.js" },
            { name: "Web Sockets" },
            { name: "socket.io" },
        ],
        features: [
            {
                title: "Real-time Communication",
                description: "Instant message delivery using WebSockets",
            },
            {
                title: "Anonymous Chatting",
                description: "Users can chat without creating an account",
            },
            {
                title: "Responsive Design",
                description: "Works seamlessly on mobile and desktop devices",
            },
        ],
        images: [
            { src: "/chat-app.webp", alt: "Chat app preview" },
            { src: "/chat-app-2.webp", alt: "Chat app conversation" },
            { src: "/chat-app3.jpg", alt: "Chat app mobile view" },
        ],
        liveUrl: "https://node-js-realtime-chat-app.onrender.com",
        githubUrl: "https://github.com/sudeepbogati7/Node.js-Realtime-Chat-App-",
        bgColor: "bg-blue-100",
    },
    {
        id: "blog-app",
        title: "Create Blogs Application",
        date: "Sept 26, 2023",
        description:
            "Built a blog application using Node.js and Express with server-side rendering. Implemented user login and logout, and features for adding, deleting, and editing blogs. Utilized JWT for secure authentication, showcasing my skills in backend development and user authentication.",
        technologies: [
            { name: "typescript" },
            { name: "node.js" },
            { name: "express.js" },
            { name: "jwt" },
            { name: "joi" },
        ],
        features: [
            {
                title: "User Authentication",
                description: "Secure login and registration system",
            },
            {
                title: "Blog Management",
                description: "Create, edit, and delete blog posts",
            },
            {
                title: "Server-side Rendering",
                description: "Fast page loads and SEO-friendly content",
            },
        ],
        images: [
            { src: "/create-blog1.png", alt: "Blog app preview" },
            { src: "/create-blog3.png", alt: "Blog post creation" },
        ],
        liveUrl: "https://createyourownblogs.onrender.com/",
        githubUrl: "https://github.com/sudeepbogati7/CreateBlog_NODE.js?tab=readme-ov-file",
        bgColor: "bg-purple-50",
    },
]

// API projects data
const apiProjectsData = [
    {
        title: "Authentication API using Express.js",
        date: "Jan, 2024",
        description:
            "Includes features like email verification, password reset, and social media authentication using session storage.",
        technologies: ["passport.js", "typescript", "express.js", "node.js", "postgresql"],
        githubUrl: "https://github.com/sudeepbogati7/Authentication-Project-PostgreSQL",
    },
    {
        title: "Event Ticket Manager Application",
        date: "Dec, 2023",
        description:
            "A backend API with two user roles: Organizers and Attendees. Organizers can create tickets for events, sell tickets and attendees can purchase.",
        technologies: ["JavaScript", "express.js", "mysql2", "node.js", "bcrypt", "jwt", "sequelize ORM"],
        githubUrl: "https://github.com/sudeepbogati7/Event-Ticket-Manager-App-NODE.js.-MySQL",
    },
    {
        title: "Task Management System",
        date: "Jan, 2024",
        description:
            "A backend with proper user authentication and authorization. Users can create, delete, modify their tasks/works when they are logged in. OTP based authentication for password reset through email.",
        technologies: ["typescript", "express.js", "postgresql", "node.js", "bcrypt", "jwt", "sequelize ORM", "nodemailer"],
        githubUrl: "https://github.com/sudeepbogati7/tasks-maganagement-system-PostgreSQL",
    },
    {
        title: "URL Shortener API",
        date: "Jan, 2024",
        description: "A Test Driven Development (TDD) project for shortening lengthy URLs.",
        technologies: ["typescript", "express.js", "mongoDB", "node.js", "nanoid", "jest", "supertest"],
        githubUrl: "https://github.com/sudeepbogati7/URL-Shortner-API-MongoDB",
    },
]

// Small projects data
const smallProjectsData = [
    {
        title: "Python Script for Multimedia Gesture Automation",
        description:
            "A python script for automating multimedia control like play, pause, fast-forward and rewind with hand gesture in realtime",
        technologies: ["python", "mediapipe", "cv2"],
        githubUrl: "https://github.com/sudeepbogati7/python-script-for-multimedia-gestures",
        bgColor: "bg-blue-50",
    },
    {
        title: "Human Resource Management System API",
        description:
            "The backend application API which allows you to fetch the information of HR, Jobs, and candidates for the respective job",
        date: "Feb, 2024",
        technologies: ["JavaScript", "express.js", "node.js", "jwt", "nodemailer", "multer", "mongoDB"],
        features: [
            "Only HR/Admin can register to the system and has the most authorities.",
            "HR can post, update and delete jobs.",
            "An automated email is sent to the HRs email-address when the new Job is posted.",
            "Candidates are allowed to see all the jobs and can apply any job.",
            "Candidates will receive an email to confirm their application is submitted successfully.",
            "Only HR has the permission to see the job applications.",
        ],
        githubUrl: "https://github.com/sudeepbogati7/HRM-System",
        bgColor: "bg-gray-100",
    },
    {
        title: "My AI Chatbot",
        description:
            "Developed a fully responsive chatbot to integrate on websites as a chat assistant. Used OpenAI API for response text.",
        technologies: ["JavaScript", "HTML5", "CSS3", "OpenAI API"],
        image: "/chatbot.png",
        liveUrl: "#",
        githubUrl: "https://github.com/sudeepbogati7/My-Chat-Bot",
        bgColor: "bg-gray-100",
    },
    {
        title: "Image Search App",
        description:
            "A fully functional image search application where anyone can search images based on keywords (eg. dog, cat, coding....).",
        technologies: ["JavaScript", "HTML5", "CSS3", "unsplash.com API"],
        image: "/img-search.png",
        liveUrl: "https://sudeepbogati7.github.io/Image-Search-App/",
        githubUrl: "https://github.com/sudeepbogati7/Image-Search-App",
        bgColor: "bg-green-50",
    },
    {
        title: "Password Generator",
        description:
            "An application that helps you to generate a strong password made up of numbers, symbols and alphabets.",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        image: "/password-gen.png",
        liveUrl: "https://sudeepbogati7.github.io/Password-Generator/",
        githubUrl: "https://github.com/sudeepbogati7/Password-Generator",
        bgColor: "bg-blue-50",
    },
    {
        title: "Shell Scripts For Debian",
        description: "Custom shell scripts for automating repetitive tasks and so on.",
        technologies: ["bash", "shell"],
        githubUrl: "https://github.com/sudeepbogati7/Shell-Scripts-for-Debian-",
        bgColor: "bg-red-50",
    },
]

// Loading component
const Loading = () => (
    <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
)

export default function Projects() {
    const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({})

    // Animation on scroll effect
    useEffect(() => {
        const animateOnScroll = () => {
            const elements = document.querySelectorAll(".animate-on-scroll")

            elements.forEach((element) => {
                const position = element.getBoundingClientRect()

                // Check if element is in viewport
                if (position.top < window.innerHeight && position.bottom >= 0) {
                    element.classList.add("animate-fade-in")
                }
            })
        }

        window.addEventListener("scroll", animateOnScroll)
        animateOnScroll() // Initial check

        return () => window.removeEventListener("scroll", animateOnScroll)
    }, [])

    const toggleProjectDetails = (projectId: string) => {
        setExpandedProjects((prev) => ({
            ...prev,
            [projectId]: !prev[projectId],
        }))
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <main className="md:container mx-auto py-20 px-4 font-sans">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        <span className="text-sky-600">Projects</span> that I Have Built
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
                        {projectsData.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`rounded-xl shadow-lg overflow-hidden ${project.bgColor}`}
                            >
                                <Card className="border-0 bg-transparent">
                                    <CardContent className="p-0">
                                        <div className="grid md:grid-cols-2 gap-6 p-6">
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-2 gap-2">
                                                    {project.images.slice(0, 4).map((image, index) => (
                                                        <Suspense key={index} fallback={<Loading />}>
                                                            <div className="aspect-video rounded-lg overflow-hidden border border-gray-300 shadow-md">
                                                                <Image
                                                                    src={image.src || "/placeholder.svg"}
                                                                    alt={image.alt}
                                                                    width={300}
                                                                    height={200}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        </Suspense>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                                                    <CardDescription className="text-sm mt-1">{project.date}</CardDescription>
                                                </div>

                                                <p className="text-gray-600">{project.description}</p>

                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, index) => (
                                                        <Badge key={index} variant="secondary" className="bg-gray-700 text-white hover:bg-gray-600">
                                                            {tech.name}
                                                        </Badge>
                                                    ))}
                                                </div>

                                                <div className="space-y-2">
                                                    <h3 className="font-semibold border-b border-gray-300 pb-1 w-fit">Features</h3>
                                                    <div className="relative">
                                                        <ul
                                                            className={`list-disc pl-5 space-y-2 transition-all duration-300 ${expandedProjects[project.id] ? "max-h-[400px]" : "max-h-24 overflow-hidden"
                                                                }`}
                                                        >
                                                            {project.features.map((feature, index) => (
                                                                <li key={index} className="text-sm">
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
                                                        className="flex items-center text-blue-600"
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
                                                        <Button asChild variant="outline" size="sm">
                                                            <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2">
                                                                Visit Site <ExternalLink className="h-4 w-4" />
                                                            </Link>
                                                        </Button>
                                                    )}
                                                    <Button asChild variant="outline" size="sm">
                                                        <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2">
                                                            <Github className="h-4 w-4" /> GitHub
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </TabsContent>

                    <TabsContent value="apis" className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {apiProjectsData.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{project.title}</CardTitle>
                                            <CardDescription>{project.date}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-600 mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, i) => (
                                                    <Badge key={i} variant="secondary" className="bg-gray-700 text-white hover:bg-gray-600">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild variant="outline" size="sm">
                                                <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2">
                                                    <Github className="h-4 w-4" /> Source Code
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="small" className="space-y-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ gridAutoFlow: 'dense' }}>
                            {smallProjectsData.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`rounded-lg h-fit  shadow-md ${project.bgColor}`}
                                >
                                    <Card className="h-fit  border-0 bg-transparent">
                                        <CardHeader>
                                            <CardTitle className="text-lg">{project.title}</CardTitle>
                                            {project.date && <CardDescription>{project.date}</CardDescription>}
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {project.image && (
                                                <div className="rounded-lg overflow-hidden border border-gray-300 shadow-md">
                                                    <Image
                                                        src={project.image || "/placeholder.svg"}
                                                        alt={project.title}
                                                        width={400}
                                                        height={200}
                                                        className="w-full h-auto object-cover"
                                                    />
                                                </div>
                                            )}
                                            <p className="text-gray-600 text-sm">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <Badge key={i} variant="secondary" className="bg-gray-700 text-white hover:bg-gray-600">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
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
                                                <Button asChild variant="outline" size="sm">
                                                    <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2">
                                                        Visit Site <ExternalLink className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            )}
                                            <Button asChild variant="outline" size="sm">
                                                <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2">
                                                    <Github className="h-4 w-4" /> GitHub
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <h2 className="text-2xl w-fit mx-auto font-bold mb-8  items-center justify-center gap-2 text-green-800">
                        My GitHub Activity Calendar
                        <Link
                            href="https://github.com/sudeepbogati7/"
                            className="text-gray-600 flex items-center gap-2"
                        >
                        </Link>
                    </h2>

                    <div className="max-w-fit mx-auto overflow-auto bg-white p-6 rounded-lg shadow-md">
                        <Suspense fallback={<Loading />}>
                            <GitHubCalendar username="sudeepbogati7" />
                        </Suspense>
                    </div>
                </motion.div>
            </main>

            <footer className="bg-gray-200 text-gray-700 py-6 text-center">
                <div className="container mx-auto">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Sudeep Bogati. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

