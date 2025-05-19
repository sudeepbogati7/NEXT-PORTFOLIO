"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm, ValidationError } from "@formspree/react"
import { useToast } from "@/components/ui/use-toast"
import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react"
import Image from "next/image"
export default function ContactPage() {
    const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [state, handleSubmit] = useForm("mkgjobok")
    const { toast } = useToast()
    const formRef = useRef<HTMLFormElement>(null)


    // Get current time in Nepal and determine activity
    const getCurrentNepalTimeInfo = () => {
        const now = new Date()
        const options: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "numeric", hour12: true }
        const nepalTime = now.toLocaleTimeString("en-US", { ...options, timeZone: "Asia/Kathmandu" })
        const nepalHours = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })).getHours()

        let status = { message: "I'm likely working right now.", emoji: "💻" }
        if (nepalHours >= 22 || nepalHours < 7) status = { message: "I'm likely sleeping right now.", emoji: "😴" }
        else if (nepalHours >= 7 && nepalHours < 9)
            status = { message: "I'm having breakfast or getting ready.", emoji: "🍳" }
        else if (nepalHours >= 12 && nepalHours < 14) status = { message: "I might be on a lunch break.", emoji: "🍜" }
        else if (nepalHours >= 18 && nepalHours < 22) status = { message: "I'm winding down for the day.", emoji: "🌙" }

        return { nepalTime, status }
    }

    const [timeInfo, setTimeInfo] = useState(getCurrentNepalTimeInfo())
    useEffect(() => {
        const interval = setInterval(() => setTimeInfo(getCurrentNepalTimeInfo()), 60000)
        return () => clearInterval(interval)
    }, [])
    const resetForm = () => {
        // Reset the controlled components
        setSelectedEmotion(null)
        setSelectedCategory(null)

        // Reset the form using the form reference
        if (formRef.current) {
            formRef.current.reset()
        }
    }
    // Handle form submission with toast notifications
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await handleSubmit(e)
            if (!state.errors) {
                toast({
                    title: "Message sent!",
                    description: "Thank you for your message. I'll get back to you soon.",
                    variant: "default",
                })
                resetForm()
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "There was a problem sending your message. Please try again.",
                variant: "destructive",
            })
        }
    }

    useEffect(() => {
        if (state.errors) {
            toast({
                title: "Form Error",
                description: "Please check the form for errors and try again.",
                variant: "destructive",
            })
        }
    }, [state.errors, toast])

    return (
        <main className="flex flex-col items-center justify-center p-4 mt-12 ">
            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">
                {/* Social Media Links */}
                <Card className="w-full md:w-96 p-6 bg-white">
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Connect with me</h2>

                        <div className="flex justify-center">
                            <Image src={'/contact_me.svg'} width={224} height={224} alt="contact illustration"></Image>
                        </div>

                        <p className=" text-justify text-gray-600">
                            I&apos;m always excited to connect with fellow developers, potential collaborators, and anyone interested in my
                            work. Feel free to reach out through any of the following channels.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="https://github.com/sudeepbogati7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                            >
                                <Github className="h-5 w-5" />
                                <span> /sudeepbogati7</span>
                            </a>
                            <a
                                href="https://twitter.com/soodeep77"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                                <span>/soodeep77</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/sudeep-bogati"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span>/in/sudeep-bogati</span>
                            </a>
                            <a
                                href="https://www.instagram.com/the.sudeep_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                                <span>/the.sudeep_</span>
                            </a>
                        </div>
                    </div>
                </Card>

                {/* Contact Form */}
                <Card className="w-full max-w-xl p-6 bg-white">
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Contact me</h1>
                        <p className="mt-2 text-gray-600">
                            It&apos;s currently {timeInfo.nepalTime} in Nepal and {timeInfo.status.message} {timeInfo.status.emoji}
                            Feel free to send me a message, I&apos;ll get back to you as soon as possible.
                        </p>
                        <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Your email address (required)
                                </label>
                                <Input id="email" type="email" name="email" className="mt-1 bg-gray-100" required />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Your message (required)
                                </label>
                                <Textarea id="message" name="message" className="mt-1 bg-gray-100 min-h-[150px]" required />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Emotion</label>
                                    <div className="flex gap-2">
                                        {["😍", "✋", "🎁"].map((emoji) => (
                                            <Button
                                                key={emoji}
                                                type="button"
                                                name="emotion"
                                                value={emoji}
                                                variant={selectedEmotion === emoji ? "default" : "outline"}
                                                className="h-12 w-12 p-0"
                                                onClick={() => setSelectedEmotion(emoji)}
                                            >
                                                {emoji}
                                            </Button>
                                        ))}
                                    </div>
                                    <input type="hidden" name="emotion" value={selectedEmotion || ""} />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                    <div className="flex gap-2">
                                        {["general", "help"].map((category) => (
                                            <Button
                                                key={category}
                                                type="button"
                                                name="category"
                                                value={category}
                                                variant={selectedCategory === category ? "default" : "outline"}
                                                className="px-4"
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category}
                                            </Button>
                                        ))}
                                    </div>
                                    <input type="hidden" name="category" value={selectedCategory || ""} />
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                                You can also contact me at
                                <a href="mailto:hello@sudipbogati.com.np" className="text-green-600 hover:underline"> hello@sudipbogati.com.np</a>
                            </p>
                            <Button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                                disabled={state.submitting}
                            >
                                {state.submitting ? "Sending..." : "Send message"}
                            </Button>
                        </form>
                    </div>
                </Card>
            </div>
        </main>
    )
}

