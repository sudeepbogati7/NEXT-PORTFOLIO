
// Mock data for projects
export const projectsData = [
    {
        id: "deepCyberQ",
        title: "DeepCyberQ ",
        date: "March, 2025",
        description:
            "DeepCyber! is an AI chatbot to query about recent threats and news around the world among several topics.",
        technologies: [
            { name: "typescript" },
            { name: "next.js" },
            { name: "tailwindCSS" },
            { name: "FastAPI" },
            { name: "Langchain" },
            { name: "RAG" },
            { name: "FAISS" },
        ],
        features: [
            {
                title: "Real-time Cyber Threat News",
                description: "Stay updated with the latest global cyber threat intelligence by chatting with the AI chatbot in real time.",
            },
            {
                title: "RAG-powered Threat Analysis",
                description: "Utilizes Retrieval-Augmented Generation (RAG) to fetch the most recent and relevant cyber threat reports from trusted sources.",
            },
            {
                title: "LangChain Integration",
                description: "Seamlessly integrates LangChain to orchestrate prompt engineering, data retrieval, and conversation flow.",
            },
            {
                title: "Interactive Chat Interface",
                description: "Engage with a responsive and intelligent chatbot that can explain threats, suggest preventive actions, and clarify security trends.",
            },
            {
                title: "Filter Threats by Category",
                description: "Easily filter threat news based on categories like phishing, ransomware, data breaches, and nation-state attacks for focused insights.",
            },
            {
                title: "Visual Threat Dashboard",
                description: "Analyze threat trends using graphical dashboards showing threat frequency, severity, and category distribution over time.",
            },
        ],
        images: [
            { src: "/deep-cyber-q/homepage.png", alt: "Home page" },
            { src: "/deep-cyber-q/news.png", alt: "Deep Cyber Q" },
            { src: "/deep-cyber-q/chat2.png", alt: "Deep Cyber Q" },
            { src: "/deep-cyber-q/chat3.png", alt: "Deep Cyber Q" },
        ],
        liveUrl: "https://kharcha.sudipbogati.com.np/",
        githubUrl: "https://github.com/sudeepbogati7/Expense-tracking-System",
        bgColor: "bg-sky-100",
    },


    {
        id: "expense-tracker",
        title: "Kharcha ",
        date: "April 2, 2024",
        description:
            "Developed a comprehensive expense tracking system with user authentication for secure login and logout functionality. The system allows users to add, edit, and delete daily expenses, categorizing them for better organization. Users can filter expenses based on categories for better insights. Additionally, the system features an intuitive dashboard that enables users to view and analyze their expenses graphically, aiding in effective financial management.",
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
            { src: "/kharcha_dashboard.png", alt: "Kharcha Dashboard" },
            { src: "/kharcha_homepage.png", alt: "Kharcha Homepage" },
            { src: "/kharcha_reports.png", alt: "Kharcha Report Generation" },
            { src: "/kharch_overview.png", alt: "KharchaOverview" },
        ],
        liveUrl: "https://kharcha.sudipbogati.com.np/",
        githubUrl: "https://github.com/sudeepbogati7/Expense-tracking-System",
        bgColor: "bg-sky-50",
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
export const apiProjectsData = [
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
export const smallProjectsData = [
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