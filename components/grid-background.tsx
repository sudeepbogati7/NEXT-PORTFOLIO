"use client"

import { useEffect, useRef } from "react"

interface ProfessionalGridProps {
  primaryColor?: string
  secondaryColor?: string
  density?: number
  showDots?: boolean
  className?: string
}

export default function ProfessionalGrid({
  primaryColor = "#e2e8f0",
  secondaryColor = "#f1f5f9",
  density = 16,
  showDots = true,
  className = "",
}: ProfessionalGridProps) {
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
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.scale(pixelRatio, pixelRatio)

      drawProfessionalGrid()
    }

    // Draw a clean, professional grid pattern
    const drawProfessionalGrid = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

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
      ctx.lineWidth = 0.3

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
      ctx.lineWidth = 0.5

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
      if (showDots) {
        ctx.fillStyle = primaryColor

        for (let i = 0; i <= density; i++) {
          for (let j = 0; j <= density; j++) {
            ctx.beginPath()
            ctx.arc(i * cellWidth, j * cellHeight, 1, 0, Math.PI * 2)
            ctx.fill()
          }
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
  }, [primaryColor, secondaryColor, density, showDots])

  return <canvas ref={canvasRef} className={`absolute inset-0 z-0 ${className}`} />
}

