"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    Phone,
    User,
    Code,
    BookOpen,
    Mail,
    ExternalLink,
    BarChartIcon as ChartNoAxesCombined,
    Menu,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import LoginPopup from "./authentication/login-popup"

interface NavProps {
    bgColor?: string
}

export default function Nav({ bgColor = "bg-white" }: NavProps) {
    const pathname = usePathname()

    const isActive = (href: string) => {
        return pathname === href
            ? "border-b-2 border-gray-800 text-gray-900 font-medium"
            : "border-b-2 border-transparent text-slate-500 hover:text-black transition-all duration-300 ease-in-out"
    }

    return (
        <nav className={cn("fixed w-full px-3 z-50 shadow h-20 flex items-center justify-center", bgColor)}>
            <div className="w-full md:w-4/5 lg:w-4/6 flex justify-between mx-auto z-50 font-medium items-center">
                <Link href="/" className="p-2 flex items-center gap-2">
                    <Image src="/profile.jpg" className="rounded-full" width={40} height={40} alt="logo" />
                    <div className="flex flex-col">
                        <div className="font-medium">Sudeep Bogati</div>
                        <div className="text-xs flex items-center text-gray-500">
                            <span className="w-2 h-2 rounded-full mr-3 bg-green-500"></span>
                            <span className="font-normal">available for gigs</span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <NavLink href="/about" isActive={isActive}>
                        About me
                    </NavLink>
                    <NavLink href="/skills" isActive={isActive}>
                        Skills
                    </NavLink>
                    <NavLink href="/projects" isActive={isActive}>
                        Projects
                    </NavLink>
                    <NavLink href="https://blogs.sudipbogati.com.np" isActive={isActive} external>
                        Blogs
                    </NavLink>
                    <NavLink
                        href="https://analytics.sudipbogati.com.np/share/PzlltMCGz9DUl4l3/sudipbogati.com.np"
                        isActive={isActive}
                        external
                    >
                        Analytics
                    </NavLink>
                </div>

                <div className="flex gap-2 items-center">
                    <Button
                        asChild
                        variant="ghost"
                        className="hidden md:flex bg-green-100 text-green-800 hover:bg-green-700 hover:text-white"
                    >
                        <Link href="/contact" className="flex items-center gap-1">
                            <Phone size={18} /> Get in touch
                        </Link>
                    </Button>

                    <div className="hidden md:block">
                        <LoginPopup />
                    </div>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                            <div className="flex flex-col h-full">
                                <div className="flex flex-col items-center justify-center gap-2 mb-8 mt-4">
                                    <Image src="/hi.svg" width={60} height={40} alt="hi" />
                                    <span className="text-lg font-bold text-gray-800">Let's Explore My Story 📖</span>
                                </div>

                                <div className="flex flex-col gap-4 mt-6">
                                    <MobileNavLink href="/about" icon={<User size={20} />}>
                                        About me
                                    </MobileNavLink>
                                    <MobileNavLink href="/skills" icon={<Code size={20} />}>
                                        Skills
                                    </MobileNavLink>
                                    <MobileNavLink href="/projects" icon={<BookOpen size={20} />}>
                                        Projects
                                    </MobileNavLink>
                                    <MobileNavLink href="https://blogs.sudipbogati.com.np" icon={<BookOpen size={20} />} external>
                                        Blogs
                                    </MobileNavLink>
                                    <MobileNavLink
                                        href="https://analytics.sudipbogati.com.np/share/PzlltMCGz9DUl4l3/sudipbogati.com.np"
                                        icon={<ChartNoAxesCombined size={20} />}
                                        external
                                    >
                                        Analytics
                                    </MobileNavLink>
                                    <MobileNavLink href="/contact" icon={<Mail size={20} />}>
                                        Contact
                                    </MobileNavLink>
                                </div>

                                <div className="mt-auto mb-4 text-center text-gray-500 text-xs">
                                    <div>&copy; 2024 Sudeep Bogati.</div>
                                    <div>All rights reserved.</div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

interface NavLinkProps {
    href: string
    children: React.ReactNode
    isActive: (href: string) => string
    external?: boolean
}

function NavLink({ href, children, isActive, external }: NavLinkProps) {
    return (
        <span className={isActive(href)}>
            <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
                <span className="flex items-center gap-1">
                    {children}
                    {external && <ExternalLink size={14} />}
                </span>
            </Link>
        </span>
    )
}

interface MobileNavLinkProps {
    href: string
    children: React.ReactNode
    icon?: React.ReactNode
    external?: boolean
}

function MobileNavLink({ href, children, icon, external }: MobileNavLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg w-full transition-all duration-300 ease-linear hover:text-sky-700 font-medium",
                isActive && "border-l-4 border-sky-500 text-sky-600 bg-sky-50",
            )}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
        >
            {icon}
            <span>{children}</span>
            {external && <ExternalLink size={14} className="ml-auto" />}
        </Link>
    )
}
