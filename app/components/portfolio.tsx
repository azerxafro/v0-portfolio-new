"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
<<<<<<< Updated upstream
=======
  Play,
>>>>>>> Stashed changes
  ExternalLink,
  Github,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Info,
  LinkIcon,
  Filter,
  ArrowUpRight,
<<<<<<< Updated upstream
  Youtube,
  FileImage,
  FileVideo,
  Loader2,
=======
>>>>>>> Stashed changes
} from "lucide-react"

// Project type definition with YouTube and Google Drive support
type Project = {
  id: number
  title: string
  slug: string
  category: string
  tags: string[]
  thumbnail: string
  images: string[]
  video?: string
  youtubeId?: string
  googleDriveFiles?: {
    id: string
    type: "image" | "video"
    name: string
  }[]
  year: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  features: string[]
  role: string
  client: string
  duration: string
  liveUrl?: string
  repoUrl?: string
}

export default function Portfolio() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
<<<<<<< Updated upstream
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(false)
  const [currentGDriveFile, setCurrentGDriveFile] = useState<string | null>(null)
=======
>>>>>>> Stashed changes

  // Parallax effect for section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  // Categories for filtering
  const categories = ["all", "commercial", "documentary", "music", "narrative"]

  // Sample projects data with YouTube and Google Drive integration
  const projects: Project[] = [
    {
      id: 1,
      title: "Brand Story: XYZ Tech",
      slug: "brand-story-xyz-tech",
      category: "commercial",
      tags: ["Branding", "Corporate", "Technology"],
      thumbnail: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=600&width=1000", "/placeholder.svg?height=600&width=1000"],
      youtubeId: "dQw4w9WgXcQ", // Example YouTube ID
      googleDriveFiles: [
        {
          id: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs",
          type: "image",
          name: "Project Mockup",
        },
        {
          id: "1ZdR3L3qP4Bkq8noWLJHSr_iBau0DNT4Kli4SxNc2YEo",
          type: "video",
          name: "Behind the Scenes",
        },
      ],
      year: "2024",
      shortDescription: "A dynamic brand story showcasing XYZ Tech's innovative products and company culture.",
      fullDescription:
        "This commercial project for XYZ Tech showcases their innovative products through dynamic visual storytelling. The video presents the company's journey, highlighting key milestones and technological breakthroughs. The narrative focuses on how their solutions solve real-world problems while establishing an emotional connection with the audience.\n\nThe project involved complex motion graphics and precise color grading to match the brand's identity. We worked closely with the marketing team to ensure the messaging aligned with their overall brand strategy while creating a visually compelling narrative that resonates with their target audience.",
      technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
      features: [
        "Custom motion graphics sequence",
        "Interview segments with key executives",
        "Product demonstration animations",
        "Cinematic b-roll footage",
      ],
      role: "Lead Editor & Colorist",
      client: "XYZ Technology Inc.",
      duration: "2 minutes",
      liveUrl: "https://example.com/xyz-tech-video",
      repoUrl: "https://github.com/username/xyz-tech-project",
    },
    {
      id: 2,
      title: "Urban Landscapes",
      slug: "urban-landscapes",
      category: "documentary",
      tags: ["Documentary", "Urban", "Architecture"],
      thumbnail: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=600&width=1000", "/placeholder.svg?height=600&width=1000"],
      youtubeId: "C0DPdy98e4c", // Example YouTube ID
      year: "2023",
      shortDescription: "An exploration of urban architecture and its impact on community life.",
      fullDescription:
        "Urban Landscapes is a documentary exploring the evolution of urban architecture and its impact on community life. The film examines how city planning and architectural decisions shape the way people interact with their environment and with each other.\n\nThis project required a delicate balance between informative content and emotional storytelling. We conducted interviews with architects, urban planners, and community members to provide diverse perspectives on urban development. The editing approach emphasized the contrast between historical footage and contemporary scenes to highlight the transformation of urban spaces over time.",
      technologies: ["Adobe Premiere Pro", "DaVinci Resolve", "Audition"],
      features: [
        "Historical archive footage integration",
        "Expert interviews",
        "Time-lapse sequences of urban development",
        "Ambient soundscapes",
      ],
      role: "Editor & Sound Designer",
      client: "City Arts Foundation",
      duration: "18 minutes",
      liveUrl: "https://example.com/urban-landscapes",
    },
    {
      id: 3,
      title: "Echoes of Time",
      slug: "echoes-of-time",
      category: "music",
      tags: ["Music Video", "Indie", "Artistic"],
      thumbnail: "/placeholder.svg?height=400&width=600",
      images: ["/placeholder.svg?height=600&width=1000", "/placeholder.svg?height=600&width=1000"],
      googleDriveFiles: [
        {
          id: "1Sk-KBs5bXoYW1wkzt5yyfLa8wNgL5c9z",
          type: "image",
          name: "Album Artwork",
        },
        {
          id: "1EpyVeCy-hF_ILEtIUfSLRnxJbITfA6-Z",
          type: "video",
          name: "Music Video",
        },
      ],
      year: "2024",
      shortDescription: "A nostalgic music video blending vintage aesthetics with contemporary music.",
      fullDescription:
        "Echoes of Time is a music video for indie band 'The Resonants' that blends nostalgic visuals with contemporary music. The concept revolves around the theme of memories and how they shape our present experiences.\n\nThe editing style emphasizes rhythm and emotional resonance with the lyrics. We utilized a combination of vintage film effects and modern visual techniques to create a timeless aesthetic that complements the band's sound. The narrative follows a non-linear structure, weaving between past and present to reflect the song's themes of nostalgia and reflection.",
      technologies: ["Adobe Premiere Pro", "After Effects", "Red Giant Suite"],
      features: [
        "Film grain and analog effects",
        "Choreographed performance sequences",
        "Symbolic visual metaphors",
        "Color palette transitions matching emotional arcs",
      ],
      role: "Editor & VFX Artist",
      client: "Soundwave Records",
      duration: "4 minutes",
      liveUrl: "https://example.com/echoes-of-time",
      repoUrl: "https://github.com/username/echoes-project",
    },
  ]

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "all" ? true : project.category === selectedCategory,
  )

  // Navigation for project images
  const nextImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
  }

  // Reset image index when changing projects
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setActiveTab("overview")
    setCurrentGDriveFile(null)
  }

  // Auto-rotate images in the modal
  useEffect(() => {
    if (!selectedProject || activeTab !== "overview") return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [selectedProject, activeTab])

  // Handle Google Drive file preview
  const handleGDrivePreview = (fileId: string) => {
    setIsLoading(true)
    setCurrentGDriveFile(fileId)
    // In a real implementation, you might need to fetch file metadata or prepare the preview
    setTimeout(() => setIsLoading(false), 1000) // Simulate loading
  }

  // Auto-rotate images in the modal
  useEffect(() => {
    if (!selectedProject) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [selectedProject])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const filterVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="portfolio" className="relative overflow-hidden bg-gradient-to-b from-zinc-900 to-black py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
<<<<<<< Updated upstream
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute -right-20 bottom-40 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
=======
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-text-accent/20 blur-3xl"></div>
        <div className="absolute -right-20 bottom-40 h-64 w-64 rounded-full bg-text-accent/20 blur-3xl"></div>
>>>>>>> Stashed changes
      </div>

      <motion.div ref={containerRef} style={{ y }} className="relative z-10">
        <div ref={ref} className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="relative inline-block mb-8 text-3xl font-bold tracking-tighter sm:text-4xl">
              Portfolio
<<<<<<< Updated upstream
              <span className="absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 transform rounded bg-purple-500"></span>
=======
              <span className="absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 transform rounded bg-text-accent"></span>
>>>>>>> Stashed changes
            </h2>
            <p className="mb-12 text-text-secondary">
              Browse through my selected works across different categories. Each project represents a unique creative
              challenge and solution.
            </p>
          </motion.div>

          {/* Mobile Filter Toggle */}
          <div className="mb-6 flex justify-center md:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
<<<<<<< Updated upstream
              className="inline-flex items-center gap-2 border-purple-500/30 bg-zinc-800/50 text-text-secondary backdrop-blur-sm hover:bg-zinc-800 hover:text-text-primary"
=======
              className="inline-flex items-center gap-2 border-text-accent/30 bg-zinc-800/50 text-text-secondary backdrop-blur-sm hover:bg-zinc-800 hover:text-text-primary"
>>>>>>> Stashed changes
            >
              <Filter className="h-4 w-4" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          {/* Category Filter */}
          <AnimatePresence>
            <motion.div
              variants={filterVariants}
              initial={showFilters ? "visible" : "hidden"}
              animate={showFilters ? "visible" : "hidden"}
              exit="hidden"
              className="mb-6 overflow-hidden md:hidden"
            >
              <div className="flex flex-wrap justify-center gap-2 rounded-xl bg-zinc-800/30 p-4 backdrop-blur-sm">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm capitalize ${
                      selectedCategory === category
<<<<<<< Updated upstream
                        ? "bg-gradient-to-r from-purple-700 to-purple-500 text-black font-medium border-transparent"
                        : "text-text-secondary hover:text-purple-400 hover:border-purple-500/30"
=======
                        ? "bg-gradient-to-r from-[#5416B4] to-[#7027C3] text-white border-transparent"
                        : "text-text-secondary hover:text-text-primary hover:border-[#5416B4]/30"
>>>>>>> Stashed changes
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Desktop Category Filter */}
          <div className="mb-12 hidden md:block">
            <div className="flex flex-wrap justify-center gap-4 rounded-xl bg-zinc-800/30 p-4 backdrop-blur-sm">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative overflow-hidden text-sm capitalize ${
                    selectedCategory === category
<<<<<<< Updated upstream
                      ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white border-transparent"
                      : "text-text-secondary hover:text-purple-400 hover:border-purple-500/30"
=======
                      ? "bg-text-accent text-black border-text-accent"
                      : "text-text-secondary hover:text-text-accent hover:border-text-accent"
>>>>>>> Stashed changes
                  }`}
                >
                  {selectedCategory === category && (
                    <motion.span
                      layoutId="activeCategory"
<<<<<<< Updated upstream
                      className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-500"
=======
                      className="absolute inset-0 bg-text-accent"
>>>>>>> Stashed changes
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group h-full"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
<<<<<<< Updated upstream
                  <Card className="relative h-full overflow-hidden rounded-xl border-zinc-800 bg-zinc-800/30 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5">
=======
                  <Card className="relative h-full overflow-hidden rounded-xl border-zinc-800 bg-zinc-800/30 backdrop-blur-sm transition-all duration-500 hover:border-text-accent/30 hover:shadow-lg hover:shadow-text-accent/5">
>>>>>>> Stashed changes
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        {/* Project Thumbnail */}
                        <div className="aspect-video overflow-hidden">
                          <motion.img
                            src={project.thumbnail || "/placeholder.svg"}
                            alt={project.title}
                            className="h-full w-full object-cover"
                            animate={{
                              scale: hoveredProject === project.id ? 1.1 : 1,
                              filter: hoveredProject === project.id ? "brightness(0.7)" : "brightness(1)",
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>

<<<<<<< Updated upstream
                        {/* Media Type Indicators */}
                        <div className="absolute right-3 top-3 flex gap-2">
                          {project.youtubeId && (
                            <Badge variant="outline" className="bg-black/50 text-red-500 backdrop-blur-sm">
                              <Youtube className="h-3 w-3 mr-1" /> YouTube
                            </Badge>
                          )}
                          {project.googleDriveFiles && project.googleDriveFiles.length > 0 && (
                            <Badge variant="outline" className="bg-black/50 text-blue-400 backdrop-blur-sm">
                              <FileImage className="h-3 w-3 mr-1" /> Drive
                            </Badge>
                          )}
                        </div>

                        {/* Category Badge */}
                        <Badge
                          variant="outline"
                          className="absolute left-3 top-3 bg-black/50 text-purple-400 backdrop-blur-sm"
=======
                        {/* Category Badge */}
                        <Badge
                          variant="outline"
                          className="absolute left-3 top-3 bg-black/50 text-text-accent backdrop-blur-sm"
>>>>>>> Stashed changes
                        >
                          {project.category}
                        </Badge>

                        {/* Overlay with quick info */}
                        <motion.div
                          className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: hoveredProject === project.id ? 1 : 0,
                            y: hoveredProject === project.id ? 0 : 10,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.h3
                            className="mb-2 text-xl font-semibold text-text-primary"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                              y: hoveredProject === project.id ? 0 : 20,
                              opacity: hoveredProject === project.id ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p
                            className="mb-4 text-center text-sm text-text-secondary line-clamp-3"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                              y: hoveredProject === project.id ? 0 : 20,
                              opacity: hoveredProject === project.id ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {project.shortDescription}
                          </motion.p>
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                              y: hoveredProject === project.id ? 0 : 20,
                              opacity: hoveredProject === project.id ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                          >
                            <Button
                              variant="outline"
                              size="sm"
<<<<<<< Updated upstream
                              className="bg-gradient-to-r from-purple-700 to-purple-500 text-white hover:opacity-90"
=======
                              className="bg-gradient-to-r from-[#5416B4] to-[#7027C3] text-white hover:opacity-90"
>>>>>>> Stashed changes
                              onClick={() => openProjectDetails(project)}
                            >
                              <Info className="mr-2 h-4 w-4" /> View Details
                            </Button>
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Card Footer */}
                      <div className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-text-heading">{project.title}</h3>
                          <motion.button
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => openProjectDetails(project)}
<<<<<<< Updated upstream
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700/50 text-purple-400 transition-colors hover:bg-purple-500/20"
=======
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700/50 text-text-accent transition-colors hover:bg-text-accent/20"
>>>>>>> Stashed changes
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </motion.button>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {project.year}
                          </div>
                          <span>•</span>
                          <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 2).map((tag, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="border-zinc-700 bg-zinc-800/50 px-1.5 py-0 text-[10px]"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {project.tags.length > 2 && (
                              <Badge
                                variant="outline"
                                className="border-zinc-700 bg-zinc-800/50 px-1.5 py-0 text-[10px]"
                              >
                                +{project.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="mt-12 rounded-lg bg-zinc-800/30 p-8 text-center backdrop-blur-sm">
              <p className="text-text-secondary">
                No projects found in this category. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl border-zinc-800 bg-zinc-900 p-0 text-text-primary">
          {selectedProject && (
            <>
              {/* Image Gallery or Media Preview */}
              <div className="relative aspect-video w-full overflow-hidden">
<<<<<<< Updated upstream
                {activeTab === "overview" && (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="h-full w-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                )}
=======
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
>>>>>>> Stashed changes

                {activeTab === "youtube" && selectedProject.youtubeId && (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                    title={`${selectedProject.title} - YouTube Video`}
                    className="h-full w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}

                {activeTab === "gdrive" && currentGDriveFile && (
                  <div className="h-full w-full flex items-center justify-center bg-zinc-800">
                    {isLoading ? (
                      <div className="flex flex-col items-center justify-center">
                        <Loader2 className="h-8 w-8 animate-spin text-purple-500 mb-2" />
                        <p className="text-text-secondary">Loading preview...</p>
                      </div>
                    ) : (
                      <iframe
                        src={`https://drive.google.com/file/d/${currentGDriveFile}/preview`}
                        className="h-full w-full"
                        allow="autoplay"
                      ></iframe>
                    )}
                  </div>
                )}

                {/* Image Navigation for Overview tab */}
                {activeTab === "overview" && selectedProject.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevImage}
<<<<<<< Updated upstream
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-purple-500 hover:text-black"
=======
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-text-accent hover:text-black"
>>>>>>> Stashed changes
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
<<<<<<< Updated upstream
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-purple-500 hover:text-black"
=======
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-text-accent hover:text-black"
>>>>>>> Stashed changes
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </motion.button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 w-8 rounded-full transition-all ${
<<<<<<< Updated upstream
                            index === currentImageIndex ? "bg-purple-500" : "bg-white/30"
=======
                            index === currentImageIndex ? "bg-text-accent" : "bg-white/30"
>>>>>>> Stashed changes
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6">
                <DialogHeader>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <DialogTitle className="text-2xl text-text-heading">{selectedProject.title}</DialogTitle>
                    <div className="flex gap-2">
                      {selectedProject.liveUrl && (
                        <motion.a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
<<<<<<< Updated upstream
                          className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-3 py-1 text-sm text-white transition-opacity hover:opacity-90"
=======
                          className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-[#5416B4] to-[#7027C3] px-3 py-1 text-sm text-white transition-opacity hover:opacity-90"
>>>>>>> Stashed changes
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4" /> Live Project
                        </motion.a>
                      )}
                      {selectedProject.repoUrl && (
                        <motion.a
                          href={selectedProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md bg-zinc-700/50 px-3 py-1 text-sm text-text-secondary transition-colors hover:bg-zinc-700 hover:text-text-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-4 w-4" /> Repository
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-zinc-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </DialogHeader>

                {/* Project Content */}
                <Tabs defaultValue="overview" className="mt-6" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    {selectedProject.youtubeId && <TabsTrigger value="youtube">YouTube</TabsTrigger>}
                    {selectedProject.googleDriveFiles && selectedProject.googleDriveFiles.length > 0 && (
                      <TabsTrigger value="gdrive">Google Drive</TabsTrigger>
                    )}
                    <TabsTrigger value="features">Features</TabsTrigger>
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="mt-4">
                    <div className="space-y-4">
                      <p className="text-text-secondary whitespace-pre-line">{selectedProject.fullDescription}</p>

                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="rounded-lg bg-zinc-800/50 p-4 transition-transform hover:translate-y-[-2px]">
<<<<<<< Updated upstream
                          <h4 className="mb-2 text-sm font-medium text-purple-400">Role</h4>
                          <p className="text-text-secondary">{selectedProject.role}</p>
                        </div>
                        <div className="rounded-lg bg-zinc-800/50 p-4 transition-transform hover:translate-y-[-2px]">
                          <h4 className="mb-2 text-sm font-medium text-purple-400">Client</h4>
                          <p className="text-text-secondary">{selectedProject.client}</p>
                        </div>
                        <div className="rounded-lg bg-zinc-800/50 p-4 transition-transform hover:translate-y-[-2px]">
                          <h4 className="mb-2 text-sm font-medium text-purple-400">Year</h4>
                          <p className="text-text-secondary">{selectedProject.year}</p>
                        </div>
                        <div className="rounded-lg bg-zinc-800/50 p-4 transition-transform hover:translate-y-[-2px]">
                          <h4 className="mb-2 text-sm font-medium text-purple-400">Duration</h4>
=======
                          <h4 className="mb-2 text-sm font-medium text-text-accent">Role</h4>
                          <p className="text-text-secondary">{selectedProject.role}</p>
                        </div>
                        <div className="rounded-lg bg-zinc-800/50 p-4 transition-transform hover:translate-y-[-2px]">
                          <h4 className="mb-2 text-sm font-medium text-text-accent">Client</h4>
                          <p className="text-text-secondary">{selectedProject.client}</p>
                        </div>
                        <div className="rounded-lg bg-zinc-800/50 p-4 transition-transform hover:translate-y-[-2px]">
                          <h4 className="mb-2 text-sm font-medium text-text-accent">Year</h4>
                          <p className="text-text-secondary">{selectedProject.year}</p>
                        </div>
                        <div className="rounded-lg bg-zinc-800/50 p-4 transition-transform hover:translate-y-[-2px]">
                          <h4 className="mb-2 text-sm font-medium text-text-accent">Duration</h4>
>>>>>>> Stashed changes
                          <p className="text-text-secondary">{selectedProject.duration}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Details Tab */}
                  <TabsContent value="details" className="mt-4">
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3 text-lg font-medium text-text-heading">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
<<<<<<< Updated upstream
                            <Badge key={index} className="bg-purple-500/10 text-purple-400">
=======
                            <Badge key={index} className="bg-text-accent/10 text-text-accent">
>>>>>>> Stashed changes
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-3 text-lg font-medium text-text-heading">Project Links</h4>
                        <div className="space-y-2">
                          {selectedProject.liveUrl && (
                            <a
                              href={selectedProject.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-purple-400 hover:underline"
                            >
                              <LinkIcon className="h-4 w-4" />
                              <span>Live Project: {selectedProject.liveUrl}</span>
                            </a>
                          )}
                          {selectedProject.repoUrl && (
                            <a
                              href={selectedProject.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-purple-400 hover:underline"
                            >
                              <Github className="h-4 w-4" />
                              <span>Repository: {selectedProject.repoUrl}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* YouTube Tab */}
                  <TabsContent value="youtube" className="mt-4">
                    <div className="space-y-4">
                      <h4 className="mb-3 text-lg font-medium text-text-heading">YouTube Video</h4>
                      <p className="text-text-secondary">
                        This project includes a YouTube video that showcases the final result. You can watch it directly
                        in this tab.
                      </p>
                    </div>
                  </TabsContent>

                  {/* Google Drive Tab */}
                  <TabsContent value="gdrive" className="mt-4">
                    <div className="space-y-4">
                      <h4 className="mb-3 text-lg font-medium text-text-heading">Google Drive Files</h4>
                      <p className="text-text-secondary mb-4">
                        This project includes files stored on Google Drive. Select a file below to preview it.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.googleDriveFiles?.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center p-4 rounded-lg bg-zinc-800/50 cursor-pointer hover:bg-zinc-700/50 transition-colors"
                            onClick={() => handleGDrivePreview(file.id)}
                          >
                            {file.type === "image" ? (
                              <FileImage className="h-8 w-8 text-blue-400 mr-3" />
                            ) : (
                              <FileVideo className="h-8 w-8 text-blue-400 mr-3" />
                            )}
                            <div>
                              <h5 className="font-medium text-text-primary">{file.name}</h5>
                              <p className="text-xs text-text-secondary capitalize">{file.type} file</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Features Tab */}
                  <TabsContent value="features" className="mt-4">
                    <h4 className="mb-4 text-lg font-medium text-text-heading">Key Features</h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3 rounded-lg bg-zinc-800/30 p-3 backdrop-blur-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
<<<<<<< Updated upstream
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-medium text-purple-400">
=======
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-text-accent/20 text-xs font-medium text-text-accent">
>>>>>>> Stashed changes
                            {index + 1}
                          </span>
                          <span className="text-text-secondary">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </TabsContent>
<<<<<<< Updated upstream
=======

                  {/* Video Tab */}
                  {selectedProject.video && (
                    <TabsContent value="video" className="mt-4">
                      <div className="aspect-video overflow-hidden rounded-lg bg-zinc-800">
                        <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                          <Play className="mb-4 h-12 w-12 text-text-accent opacity-80" />
                          <h4 className="mb-2 text-lg font-medium text-text-heading">Project Video</h4>
                          <p className="mb-4 text-sm text-text-secondary">
                            Click the button below to watch the project video
                          </p>
                          <Button
                            className="bg-gradient-to-r from-[#5416B4] to-[#7027C3] text-white hover:opacity-90"
                            onClick={() => window.open(selectedProject.video, "_blank")}
                          >
                            <Play className="mr-2 h-4 w-4" /> Watch Video
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  )}
>>>>>>> Stashed changes
                </Tabs>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

