"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Award, Calendar, BookOpen, Shield, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { certifications } from "@/data/certifications"
interface Certification {
    logo: string
    title: string
    issuer: string
    date: string
    credentialLink: string
}

export default function Certifications() {

    // Function to convert date strings to Date objects for sorting
    const parseDate = (dateStr: string) => {
        const months: { [key: string]: number } = {
            Jan: 0,
            Feb: 1,
            Mar: 2,
            March: 2,
            Apr: 3,
            April: 3,
            May: 4,
            Jun: 5,
            June: 5,
            Jul: 6,
            July: 6,
            Aug: 7,
            Sep: 8,
            Sept: 8,
            Oct: 9,
            Nov: 10,
            Dec: 11,
        }

        const parts = dateStr.split(" ")
        const month = months[parts[0]]
        const year = Number.parseInt(parts[1])

        return new Date(year, month)
    }

    // Sort certifications by date (most recent first)
    const sortedCertifications = [...certifications].sort((a, b) => {
        const dateA = parseDate(a.date)
        const dateB = parseDate(b.date)
        return dateB.getTime() - dateA.getTime()
    })

    return (
        <div className="md:container mx-auto py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header with decorative elements */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-1 bg-sky-700"></div>
                    </div>
                    <h1 className="font-serif text-4xl font-bold mb-4">Professional Certifications</h1>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-sky-700"></div>
                    </div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        A collection of industry-recognized credentials that validate my expertise and commitment to professional
                        growth in technology and cybersecurity.
                    </p>
                </div>

                {/* Information section */}
                <div className="bg-stone-50 border border-stone-200 p-8 mb-12 rounded-sm">
                    <h2 className="font-serif text-2xl font-bold mb-6 text-center">The Value of Professional Certifications</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex">
                            <div className="mr-4 mt-1">
                                <Shield className="h-6 w-6 text-sky-700" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg font-semibold mb-2">Industry Validation</h3>
                                <p className="text-gray-700">
                                    Certifications provide third-party validation of skills and knowledge, demonstrating competence to
                                    employers and clients.
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mr-4 mt-1">
                                <BookOpen className="h-6 w-6 text-sky-700" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg font-semibold mb-2">Continuous Learning</h3>
                                <p className="text-gray-700">
                                    The pursuit of certifications ensures ongoing education and staying current with evolving
                                    technologies.
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mr-4 mt-1">
                                <Lightbulb className="h-6 w-6 text-sky-700" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg font-semibold mb-2">Specialized Knowledge</h3>
                                <p className="text-gray-700">
                                    Each certification represents mastery of specific domains and technologies in the ever-expanding tech
                                    landscape.
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mr-4 mt-1">
                                <Award className="h-6 w-6 text-sky-700" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg font-semibold mb-2">Professional Commitment</h3>
                                <p className="text-gray-700">
                                    Earning certifications demonstrates dedication to professional standards and best practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications list header */}
                <div className="mb-8">
                    <div className="flex items-center">
                        <div className="flex-grow">
                            <h2 className="font-serif text-2xl font-bold">My Credential Portfolio</h2>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-32 h-px bg-stone-300"></div>
                        </div>
                    </div>
                    <Separator className="mt-4 bg-stone-300" />
                </div>

                {/* Certifications list */}
                <div className="space-y-6">
                    {sortedCertifications.map((cert, index) => (
                        <div key={index} className="border border-stone-200 bg-white p-6 rounded-sm relative">
                            <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-sky-700 text-white px-3 py-1 text-sm font-medium rounded-sm flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {cert.date}
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center">
                                <div className="md:w-1/5 mb-4 md:mb-0">
                                    <div className="h-16 w-32 relative">
                                        <Image
                                            src={cert.logo || "/placeholder.svg"}
                                            alt={`${cert.issuer} logo`}
                                            fill
                                            style={{ objectFit: "contain" }}
                                            className="rounded"
                                        />
                                    </div>
                                </div>

                                <div className="md:w-3/5 md:px-4">
                                    <h3 className="font-serif text-xl font-bold mb-2">{cert.title}</h3>
                                    <p className="text-gray-600 mb-2">
                                        Issued by <span className="font-medium">{cert.issuer}</span>
                                    </p>
                                </div>

                                <div className="md:w-1/5 mt-4 md:mt-0">
                                    <Button
                                        variant="outline"
                                        className="w-full border-sky-700 text-sky-700 hover:bg-sky-50"
                                        onClick={() => window.open(cert.credentialLink, "_blank")}
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Verify
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative footer */}
                <div className="mt-16 text-center">
                    <div className="flex justify-center">
                        <div className="w-16 h-px bg-stone-300"></div>
                    </div>
                    <p className="text-gray-500 mt-4 italic font-serif">
                        "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
                    </p>
                    <p className="text-gray-600 mt-2 text-sm">— Brian Herbert</p>
                </div>
            </div>
        </div>
    )
}
