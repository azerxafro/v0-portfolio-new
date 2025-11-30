"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Film, Scissors, Palette, Music, Zap, Clock } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: <Film className="h-10 w-10 mb-4 text-purple-400" />,
      title: "Video Editing",
      description: "Professional video editing with attention to pacing, transitions, and storytelling.",
    },
    {
      icon: <Scissors className="h-10 w-10 mb-4 text-purple-400" />,
      title: "Content Creation",
      description: "Creating engaging content for various platforms including social media and web.",
    },
    {
      icon: <Palette className="h-10 w-10 mb-4 text-purple-400" />,
      title: "Color Grading",
      description: "Expert color correction and grading to enhance visual aesthetics and mood.",
    },
    {
      icon: <Music className="h-10 w-10 mb-4 text-purple-400" />,
      title: "Sound Design",
      description: "Crafting immersive audio experiences with sound effects and music selection.",
    },
    {
      icon: <Zap className="h-10 w-10 mb-4 text-purple-400" />,
      title: "Motion Graphics",
      description: "Dynamic motion graphics and visual effects to elevate your content.",
    },
    {
      icon: <Clock className="h-10 w-10 mb-4 text-purple-400" />,
      title: "Quick Turnaround",
      description: "Efficient workflow ensuring timely delivery without compromising quality.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-zinc-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">My Services</h2>
          <p className="max-w-2xl mx-auto text-text-secondary">
            I offer a comprehensive range of creative editing services to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-zinc-800 p-8 rounded-lg text-center hover:bg-purple-900/30 transition-colors"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-text-heading">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

