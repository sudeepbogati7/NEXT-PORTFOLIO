"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProfessionalServices() {
  return (
    <section className="w-full md:w-5/6 mx-auto p-4 space-y-6">  
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-[#1a365d] tracking-tight">Technical Expertise & Solutions</h2>
        <p className="text-[#4a5568] leading-relaxed">
          As a software engineer, I specialize in developing sophisticated digital solutions leveraging cutting-edge
          technologies. My expertise encompasses the following domains:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="transition-all duration-300 hover:shadow-lg border border-[#e2e8f0] bg-gradient-to-b from-white to-[#f8fafc]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Image
                src="/trading-up.svg"
                width={24}
                height={24}
                alt="Enterprise Solutions"
                className="text-[#2c5282]"
              />
              <h3 className="font-semibold text-[#2c5282]">Enterprise Solutions</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc ml-4 text-[#4a5568] space-y-1">
              <li>Enterprise-grade web applications with scalable architecture</li>
              <li>High-performance corporate digital platforms</li>
              <li>Integrated business process automation systems</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg border border-[#e2e8f0] bg-gradient-to-b from-white to-[#f8fafc]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Image src="/shop.svg" width={24} height={24} alt="E-Commerce Solutions" className="text-[#2c5282]" />
              <h3 className="font-semibold text-[#2c5282]">E-Commerce Solutions</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc ml-4 text-[#4a5568] space-y-1">
              <li>Scalable e-commerce infrastructures with microservices architecture</li>
              <li>Secure payment gateway integrations and transaction processing</li>
              <li>Advanced inventory management systems</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg border border-[#e2e8f0] bg-gradient-to-b from-white to-[#f8fafc]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Image src="/grid.svg" width={24} height={24} alt="Full-Stack Applications" className="text-[#2c5282]" />
              <h3 className="font-semibold text-[#2c5282]">Full-Stack Applications</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc ml-4 text-[#4a5568] space-y-1">
              <li>Real-time data analytics dashboards</li>
              <li>Cloud-native enterprise workflow solutions</li>
              <li>Scalable SaaS platforms with multi-tenant architecture</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg border border-[#e2e8f0] bg-gradient-to-b from-white to-[#f8fafc]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Image
                src="/education.svg"
                width={24}
                height={24}
                alt="Educational Technology"
                className="text-[#2c5282]"
              />
              <h3 className="font-semibold text-[#2c5282]">Educational Technology</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc ml-4 text-[#4a5568] space-y-1">
              <li>Learning Management Systems (LMS) with advanced analytics</li>
              <li>Interactive educational platforms with real-time collaboration</li>
              <li>Assessment and progress tracking systems</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="transition-all duration-300 hover:shadow-lg border border-[#e2e8f0] bg-gradient-to-b from-white to-[#f8fafc]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Image src="/portfolio.svg" width={20} height={24} alt="Digital Presence" className="text-[#2c5282]" />
            <h3 className="font-semibold text-[#2c5282]">Digital Presence Solutions</h3>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="list-disc ml-4 text-[#4a5568] space-y-1">
            <li>Professional digital portfolios with SEO optimization</li>
            <li>Content management systems for digital asset presentation</li>
            <li>Performance-optimized web platforms for global reach</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

