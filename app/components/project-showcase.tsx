"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, X, Calendar, ExternalLink } from "lucide-react"
import YouTubeEmbed from "./youtube-embed"

type Project = {
  title: string
  publishDate: string
  img: string
  description: string
  tags: string[]
  videoUrl: string
  highlights: string[]
}

export default function ProjectShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const projects: Project[] = [
    {
      title: "Leo Movie - Insider Leaks",
      publishDate: "September 2023",
      img: "https://img.youtube.com/vi/cftXsjqSvk4/hqdefault.jpg",
      description: "An engaging video about the insider leaks and behind-the-scenes details of the movie 'LEO' starring Thalapathy Vijay.",
      tags: ["Video Editing", "YouTube Content", "Movie Analysis"],
      videoUrl: "https://www.youtube.com/watch?v=cftXsjqSvk4",
      highlights: [
        "Professional transitions and effects",
        "Engaging background music",
        "High-quality visual elements",
        "Comprehensive analysis of leaked information"
      ]
    },
    {
      title: "Jailer Movie - Box Office Analysis",
      publishDate: "August 2023",
      img: "https://img.youtube.com/vi/NmjookhHR0A/hqdefault.jpg",
      description: "A detailed analysis of Jailer movie's box office performance and its impact on the Indian film industry.",
      tags: ["Video Editing", "Data Analysis", "Movie Business"],
      videoUrl: "https://www.youtube.com/watch?v=NmjookhHR0A",
      highlights: [
        "Detailed box office statistics",
        "Comparative analysis with other releases",
        "Expert insights and predictions",
        "High-quality motion graphics"
      ]
    },
    {
      title: "Varisu vs Thunivu - Battle Analysis",
      publishDate: "January 2023",
      img: "https://img.youtube.com/vi/NqBPVIgttZM/hqdefault.jpg",
      description: "A comparative analysis of two major Pongal releases - Varisu and Thunivu, breaking down their box office performance and audience reception.",
      tags: ["Comparative Analysis", "Box Office Study", "Movie Review"],
      videoUrl: "https://www.youtube.com/watch?v=NqBPVIgttZM",
      highlights: [
        "Box office collections comparison",
        "Critical reception analysis",
        "Audience feedback insights",
        "Theater occupancy rates",
        "Social media impact analysis"
      ]
    },
    {
      title: "Vikram Movie - Success Story",
      publishDate: "June 2022",
      img: "https://img.youtube.com/vi/v7GFrJc_Fv4/hqdefault.jpg",
      description: "An analysis of Vikram movie's phenomenal success and its impact on Tamil cinema.",
      tags: ["Success Analysis", "Movie Business", "Industry Impact"],
      videoUrl: "https://www.youtube.com/watch?v=v7GFrJc_Fv4",
      highlights: [
        "Box office records breakdown",
        "Marketing strategy analysis",
        "Technical achievements",
        "Impact on Tamil cinema industry",
        "Director's vision and execution"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="portfolio" className="relative bg-black py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="relative inline-block mb-6 text-3xl font-bold tracking-tighter sm:text-4xl">
            Portfolio Projects
            <span className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded bg-purple-500"></span>
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Showcasing my video editing projects, from movie analysis to box office breakdowns
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-purple-500/50 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  animate={{
                    scale: hoveredProject === project.title ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.publishDate}</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    onClick={() => setSelectedProject(project)}
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-500/50"
                  >
                    <Play className="mr-2 h-5 w-5" fill="white" /> Watch Video
                  </Button>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-purple-500/10 text-purple-400 border-purple-500/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  onClick={() => setSelectedProject(project)}
                  variant="outline"
                  className="w-full border-zinc-700 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-auto bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-purple-600 text-white transition-colors backdrop-blur-sm"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="aspect-video w-full">
                <YouTubeEmbed url={selectedProject.videoUrl} />
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedProject.publishDate}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Project Highlights</h3>
                  <ul className="space-y-3">
                    {selectedProject.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-semibold text-purple-400 flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800">
                  <a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
