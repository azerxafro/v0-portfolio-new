"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
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
        this.speedX = (Math.random() - 0.5) * 1.5
        this.speedY = (Math.random() - 0.5) * 1.5
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
          const repulsionRadius = 150 // Radius of influence

          if (distance < repulsionRadius) {
            // Calculate repulsion force (stronger when closer)
            const force = (1 - distance / repulsionRadius) * 5

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
        particle.update(mousePosition.x, mousePosition.y, isMouseInCanvas)
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
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => {
      setIsMouseInCanvas(true)
    }

    const handleMouseLeave = () => {
      setIsMouseInCanvas(false)
    }

    // Touch event handlers for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        setMousePosition({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        })
        setIsMouseInCanvas(true)

        // Auto-disable touch effect after a delay
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current)
        }
        touchTimeoutRef.current = setTimeout(() => {
          setIsMouseInCanvas(false)
        }, 3000)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        setMousePosition({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        })

        // Reset the auto-disable timeout
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current)
        }
        touchTimeoutRef.current = setTimeout(() => {
          setIsMouseInCanvas(false)
        }, 3000)
      }
    }

    const handleTouchEnd = () => {
      // Keep the effect active for a short time after touch ends
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current)
      }
      touchTimeoutRef.current = setTimeout(() => {
        setIsMouseInCanvas(false)
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
        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ASHWIN R
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-lg text-text-secondary sm:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={scrollToAbout}
            className="flex items-center justify-center rounded-full bg-purple-500/10 p-3 backdrop-blur-sm hover:bg-purple-500/20 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-purple-400" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

