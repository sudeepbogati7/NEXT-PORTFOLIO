"use client"

import { Calendar, Briefcase, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function WorkTimeline() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl text-sky-500  font-black-ops-one font-bold mb-8 text-center md:text-left">Professional Journey</h1>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 items-start">
        {/* Timeline Section */}
        <div className="space-y-12 relative">
          {/* Vertical line */}
          <div className="absolute left-[24px] top-[52px] bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700" />

          {/* Current Role */}
          <div className="relative pl-14">
            <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h3 className="text-xl font-semibold">Associate Software Developer</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  June 2024 – Present
                </div>
              </div>
              <p className="text-gray-400 dark:text-gray-400 font-medium">
                Green Tick Nepal Pvt Ltd, Gyaneshwor, Kathmandu
              </p>
                <ul className="space-y-2 mt-3 text-gray-400">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                  Led the design and development of SOC 2 Type 2-compliant web applications.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                  Managed SaaS Cybersecurity products, overseeing development, strategy, and implementation.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                  Designed and maintained CI/CD pipelines to automate deployment and testing processes.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                  Developed and maintained RESTful APIs, ensuring robust integration between frontend and backend systems.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                  Implemented comprehensive testing strategies, including unit, integration, and end-to-end tests.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                  Applied security patches and best practices to safeguard applications against vulnerabilities.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                  Contributed to the development and enhancement of internal tools, focusing on improving workflow efficiency and user experience.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                  Conducted research and analysis on emerging cybersecurity threats, contributing to improved risk management and incident response strategies.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>
                  Developed automation tools and scripts to enhance threat detection and monitoring capabilities.
                  </span>
                </li>
                </ul>
            </div>
          </div>

          {/* Internship */}
          <div className="relative pl-14">
            <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h3 className="text-xl font-semibold">Software Developer Intern</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  March 2024 – June 2024
                </div>
              </div>
              <p className="text-gray-300 dark:text-gray-300 font-medium">
                Green Tick Nepal Pvt Ltd, Gyaneshwor, Kathmandu
              </p>
              <ul className="space-y-2 mt-3 text-gray-400">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    Gained hands-on experience with corporate workflows, agile methodologies, and version control
                    practices, ensuring effective team collaboration.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    Worked on backend development using Django and frontend development with Next.js, contributing to
                    web application development.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    Assisted in debugging, optimizing, and maintaining existing code while implementing new features.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    Improved communication and teamwork skills by collaborating with developers and participating in
                    team discussions.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    Developed problem-solving skills by working on real-world projects in a fast-paced environment.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
