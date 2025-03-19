'use client';
import './globals.css';
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import '@/app/theme.css';
import Link from 'next/link';
import Nav from '@/components/nav';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import { BackgroundLines } from '@/components/ui/background-lines';
import 'aos/dist/aos.css';
import SocialLinks from '@/components/SocialLinks';
import MyServices from '@/components/MyServices';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
// import DevelopmentSteps from '@/components/DevSteps';


export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size with pixel ratio for crisp lines
    const setupCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      canvas.style.width = `100%`
      canvas.style.height = `100%`

      ctx.scale(pixelRatio, pixelRatio)

      drawProfessionalNet()
    }

    // Draw a clean, professional net pattern
    const drawProfessionalNet = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Professional configuration
      const primaryColor = "#e2e8f0" // Very light slate color
      const secondaryColor = "#f1f5f9" // Even lighter slate for secondary lines
      const density = 16 // Reduced density for cleaner look
      const primaryLineWidth = 0.5
      const secondaryLineWidth = 0.3

      const width = window.innerWidth
      const height = window.innerHeight

      const cellWidth = width / density
      const cellHeight = height / density

      // Create gradient background (subtle)
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, "#ffffff")
      gradient.addColorStop(1, "#fafafa")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw secondary grid lines (thinner, lighter)
      ctx.strokeStyle = secondaryColor
      ctx.lineWidth = secondaryLineWidth

      // Secondary horizontal lines (between main lines)
      for (let i = 0; i <= density * 2; i++) {
        if (i % 2 !== 0) {
          // Only draw secondary lines
          ctx.beginPath()
          ctx.moveTo(0, i * (cellHeight / 2))
          ctx.lineTo(width, i * (cellHeight / 2))
          ctx.stroke()
        }
      }

      // Secondary vertical lines (between main lines)
      for (let i = 0; i <= density * 2; i++) {
        if (i % 2 !== 0) {
          // Only draw secondary lines
          ctx.beginPath()
          ctx.moveTo(i * (cellWidth / 2), 0)
          ctx.lineTo(i * (cellWidth / 2), height)
          ctx.stroke()
        }
      }

      // Draw primary grid lines
      ctx.strokeStyle = primaryColor
      ctx.lineWidth = primaryLineWidth

      // Primary horizontal lines
      for (let i = 0; i <= density; i++) {
        ctx.beginPath()
        ctx.moveTo(0, i * cellHeight)
        ctx.lineTo(width, i * cellHeight)
        ctx.stroke()
      }

      // Primary vertical lines
      for (let i = 0; i <= density; i++) {
        ctx.beginPath()
        ctx.moveTo(i * cellWidth, 0)
        ctx.lineTo(i * cellWidth, height)
        ctx.stroke()
      }

      // Add subtle dots at intersections
      ctx.fillStyle = primaryColor

      for (let i = 0; i <= density; i++) {
        for (let j = 0; j <= density; j++) {
          ctx.beginPath()
          ctx.arc(i * cellWidth, j * cellHeight, 1, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // Initial setup
    setupCanvas()

    // Handle window resize
    window.addEventListener("resize", setupCanvas)

    return () => {
      window.removeEventListener("resize", setupCanvas)
    }
  }, [])
  return (
    <>
      <motion.main
        className="overflow-hidden w-full container  mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <canvas ref={canvasRef} className="absolute w-full h-full overflow-hidden inset-0 z-0" />

        {/* Background Section */}
        <div
          className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-center opacity-70"
        >
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 mt-16 flex flex-col-reverse h-full  lg:flex-row lg:w-4/5 mx-auto items-center justify-center w-full">
          {/* Left Content */}
          <motion.div
            className="px-6 md:px-2 mt-4 md:mt-0 w-full md:w-4/5 mx-auto mb-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className='px-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h1 className='text-lg flex gap-1 font-medium font-handwriting text-green-700'>
                Namaste <Image src={'/namaste.svg'} width={18} height={20} alt='namaste'></Image> !
              </h1>
              <div className='text-2xl font-extrabold'>
                My name is <span className='bg-gradient-to-r from-green-200 to-blue-300 rounded-md px-2 text-gray-700'>Sudeep Bogati</span>
              </div>
              <div className='text-gray-600 text-lg font-medium'>
                originating from the beautiful landscapes of Nepal 🇳🇵.
              </div>
            </motion.div>

            {/* Terminal */}
            <motion.div
              className="bg-gray-900 text-white px-4 py-6 w-full shadow-lg rounded-md font-mono mt-4 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center mb-4">
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="flex flex-col font-medium">
                I am a programmer who loves
                <motion.div
                  className="flex gap-1 w-fit text-green-800 mt-3 px-2 font-semibold rounded-xl text-xl bg-gradient-to-r from-blue-300 to-green-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Image src="/learn.svg" width={25} height={20} alt="learning" />
                  learning
                </motion.div>
                <motion.div
                  className="flex gap-1 w-fit mt-2 text-blue-800 px-3 font-semibold rounded-xl text-xl bg-gradient-to-l from-indigo-200 to-blue-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Image src="/terminal.svg" width={25} height={20} alt="building" />
                  building new things
                </motion.div>
                <motion.span
                  className="inline-flex bg-gradient-to-r from-yellow-300 to-red-300 px-3 text-xl rounded-xl mt-2 text-yellow-800 items-center w-fit gap-1 font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  and turning ideas into reality.
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className='px-3 w-full mx-auto md:w-full mt-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="text-lg font-semibold text-gray-800">
                As a <span className="text-green-600">Software Engineer</span>,
              </div>
              <div className="text-xl font-semibold text-blue-900">
                I build complete Web Applications to solve business problems
              </div>
              <div className="text-gray-700 text-lg font-medium">
                focusing on making them user-friendly and reliable.
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.6 }}
              >
                <Button className='mt-3 bg-sky-700 text-white transition-all duration-300 border-b-4 border-gray-600 group'>
                  <Link className="flex items-center group-hover:gap-3  transition-all duration-300 gap-1" href={'about'}>
                    More about me <ArrowRight className='w-4' />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative overflow-hidden pb-6 z-0 flex flex-col md:w-2/5 w-full mx-auto items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="shadow-lg shadow-blue-500/30 rounded-full border-4 border-sky-800 w-fit object-cover bg-black overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Image
                src={'/blue_coat_pic_square.jpg'}
                width={200}
                height={100}
                alt="Profile image"
              />
            </motion.div>

            <motion.div
              className="flex flex-col w-full items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="mt-2 font-extrabold text-2xl tracking-wide text-gray-700">
                Sudeep Bogati
              </div>
              <div className="text-gray-700">
                <strong className="text-green-600">Software Engineer</strong> at Green
                Tick Nepal
              </div>
              <div className="flex text-sm gap-1 text-gray-700">
                <Image
                  src={'/location.svg'}
                  width={16}
                  height={20}
                  alt="Location-svg"
                />
                Kathmandu, Nepal 🇳🇵
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}
