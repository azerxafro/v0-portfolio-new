"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import Image from "next/image"

interface Particle {
  x: number
  y: number
  update(mouseX: number, mouseY: number, isMouseInCanvas: boolean): void
  draw(ctx: CanvasRenderingContext2D): void
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isMouseInCanvasRef = useRef(false)
  const animationFrameRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()

    // Particle class with enhanced interactive behavior
    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      speedX: number
      speedY: number
      originalSpeedX: number
      originalSpeedY: number
      color: string
      alpha: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseSize = Math.random() * 2 + 0.5
        this.size = this.baseSize
        this.speedX = (Math.random() - 0.5) * 4
        this.speedY = (Math.random() - 0.5) * 4
        this.originalSpeedX = this.speedX
        this.originalSpeedY = this.speedY

        // Add slight color variation for visual interest
        const hue = 260 + Math.random() * 60 // Purple hue range
        const saturation = 70 + Math.random() * 30
        const lightness = 70 + Math.random() * 20
        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`
        this.alpha = 0.5 + Math.random() * 0.5
      }

      update(mouseX: number, mouseY: number, isMouseInCanvas: boolean) {
        // Normal movement
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Apply magnetic repulsion when mouse is in canvas
        if (isMouseInCanvas) {
          const dx = this.x - mouseX
          const dy = this.y - mouseY
          const distance = Math.sqrt(dx * dx + dy * dy)
          const repulsionRadius = 250 // Radius of influence

          if (distance < repulsionRadius) {
            // Calculate repulsion force (stronger when closer)
            const force = (1 - distance / repulsionRadius) * 20

            // Normalize direction vector
            const angle = Math.atan2(dy, dx)

            // Apply force to speed
            this.speedX = this.originalSpeedX + Math.cos(angle) * force
            this.speedY = this.originalSpeedY + Math.sin(angle) * force

            // Increase size slightly when affected by mouse
            this.size = this.baseSize * (1 + force * 0.2)
          } else {
            // Gradually return to original speed when out of influence
            this.speedX = this.speedX * 0.95 + this.originalSpeedX * 0.05
            this.speedY = this.speedY * 0.95 + this.originalSpeedY * 0.05
            this.size = this.size * 0.9 + this.baseSize * 0.1
          }
        } else {
          // Return to original state when mouse leaves canvas
          this.speedX = this.speedX * 0.95 + this.originalSpeedX * 0.05
          this.speedY = this.speedY * 0.95 + this.originalSpeedY * 0.05
          this.size = this.size * 0.9 + this.baseSize * 0.1
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Initialize particles
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle())

    // Animation function
    const animate = () => {
      if (!ctx) return

      // Clear canvas with slight trail effect for smoother motion
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const particle of particlesRef.current) {
        particle.update(mousePositionRef.current.x, mousePositionRef.current.y, isMouseInCanvasRef.current)
        particle.draw(ctx)
      }

      // Optional: Draw connections between nearby particles for added visual effect
      drawConnections(ctx)

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Draw connections between particles that are close to each other
    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 100

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Opacity based on distance
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(180, 120, 255, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Start animation
    animate()

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseEnter = () => {
      isMouseInCanvasRef.current = true
    }

    const handleMouseLeave = () => {
      isMouseInCanvasRef.current = false
    }

    // Touch event handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mousePositionRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        }
        isMouseInCanvasRef.current = true

        // Auto-disable touch effect after a delay
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current)
        }
        touchTimeoutRef.current = setTimeout(() => {
          isMouseInCanvasRef.current = false
        }, 3000)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mousePositionRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        }

        // Reset the auto-disable timeout
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current)
        }
        touchTimeoutRef.current = setTimeout(() => {
          isMouseInCanvasRef.current = false
        }, 3000)
      }
    }

    const handleTouchEnd = () => {
      // Keep the effect active for a short time after touch ends
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current)
      }
      touchTimeoutRef.current = setTimeout(() => {
        isMouseInCanvasRef.current = false
      }, 1000)
    }

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions()

      // Redistribute particles when canvas is resized
      particlesRef.current.forEach((particle) => {
        particle.x = Math.random() * canvas.width
        particle.y = Math.random() * canvas.height
      })
    }

    // Add event listeners
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseenter", handleMouseEnter)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchmove", handleTouchMove)
    canvas.addEventListener("touchend", handleTouchEnd)
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current)
      }
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseenter", handleMouseEnter)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
            <Image
              src="/logo.png"
              alt="Ashwin Azer Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <p className="text-xl sm:text-2xl text-gray-300 mb-2">Hello, I&apos;m</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            Ashwin Azer
          </h1>
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 text-lg sm:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="animate-fade-in">Video Editor</span>
          <span className="text-purple-400">•</span>
          <span className="animate-fade-in" style={{ animationDelay: '0.2s' }}>Music Artist</span>
          <span className="text-purple-400">•</span>
          <span className="animate-fade-in" style={{ animationDelay: '0.4s' }}>Developer</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#works"
            className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 active:scale-95 flex justify-center"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </a>
          
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 active:scale-95 flex justify-center"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  )
}

