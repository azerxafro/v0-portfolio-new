"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, Github, Calendar, Tag, ChevronLeft, ChevronRight, Info, LinkIcon } from "lucide-react"

// Project type definition
type Project = {
  id: number
  title: string
  slug: string
  category: string
  tags: string[]
  thumbnail: string
  images: string[]
  video?: string
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
  const isInView = useInView(ref, { once: true })
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Categories for filtering
  const categories = ["all", "commercial", "documentary", "music", "narrative"]

  // Sample projects data - in a real implementation, this could be fetched from an API or CMS
  const projects: Project[] = [
    {
      id: 1,
      title: "Brand Story: XYZ Tech",
      slug: "brand-story-xyz-tech",
      category: "commercial",
      tags: ["Branding", "Corporate", "Technology"],
      thumbnail: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
      ],
      video: "https://example.com/video.mp4",
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
      images: [
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
      ],
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
      images: [
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
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
    {
      id: 4,
      title: "Digital Dreams",
      slug: "digital-dreams",
      category: "commercial",
      tags: ["Product Launch", "Tech", "Futuristic"],
      thumbnail: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
      ],
      year: "2023",
      shortDescription: "A cutting-edge product launch video with innovative visual effects.",
      fullDescription:
        "Digital Dreams is a tech product launch video featuring cutting-edge visual effects and seamless transitions. Created for the launch of a new AR headset, the video needed to communicate complex technical features while maintaining an engaging and aspirational tone.\n\nThe project required precise timing and innovative visual techniques to highlight product features. We developed a visual language that combined realistic product demonstrations with abstract representations of the technology's capabilities. The editing approach focused on creating a sense of wonder and possibility, positioning the product as a gateway to new experiences.",
      technologies: ["Adobe Premiere Pro", "After Effects", "Cinema 4D", "Element 3D"],
      features: [
        "3D product animations",
        "UI/UX demonstrations",
        "Particle effects for data visualization",
        "Seamless transitions between real and virtual environments",
      ],
      role: "Editor & Motion Designer",
      client: "Future Tech Innovations",
      duration: "90 seconds",
      liveUrl: "https://example.com/digital-dreams",
    },
    {
      id: 5,
      title: "The Silent Journey",
      slug: "silent-journey",
      category: "narrative",
      tags: ["Short Film", "Drama", "Experimental"],
      thumbnail: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
      ],
      year: "2024",
      shortDescription: "A poetic short film about a traveler's inner transformation.",
      fullDescription:
        "The Silent Journey is a short film that tells the story of a traveler's inner transformation through a minimalist narrative approach. With limited dialogue, the story unfolds primarily through visual storytelling, sound design, and careful pacing.\n\nThe editing approach focused on subtle emotional cues and atmospheric storytelling techniques. We employed a deliberate pacing strategy that mirrors the protagonist's emotional state, using longer takes during moments of contemplation and quicker cuts during moments of revelation. The color grading evolved throughout the film to reflect the character's changing perspective.",
      technologies: ["Adobe Premiere Pro", "DaVinci Resolve", "Audition"],
      features: [
        "Minimalist narrative structure",
        "Evolving color palette",
        "Symbolic visual motifs",
        "Atmospheric sound design",
      ],
      role: "Editor & Colorist",
      client: "Independent Film Collective",
      duration: "12 minutes",
      liveUrl: "https://example.com/silent-journey",
      repoUrl: "https://github.com/username/silent-journey",
    },
    {
      id: 6,
      title: "Rhythms of Nature",
      slug: "rhythms-of-nature",
      category: "documentary",
      tags: ["Nature", "Environmental", "Educational"],
      thumbnail: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
        "/placeholder.svg?height=600&width=1000",
      ],
      year: "2023",
      shortDescription: "A nature documentary exploring hidden patterns in natural ecosystems.",
      fullDescription:
        "Rhythms of Nature is a documentary exploring the hidden patterns and rhythms in natural ecosystems. The film examines how different species interact with their environment and each other, revealing the intricate balance that sustains life on Earth.\n\nThis project involved intricate sound design and carefully paced visual storytelling. We synchronized the editing rhythm with natural cycles and movements, creating a viewing experience that immerses the audience in the flow of nature. The approach combined scientific accuracy with artistic presentation to make complex ecological concepts accessible and engaging.",
      technologies: ["Adobe Premiere Pro", "DaVinci Resolve", "Audition", "Pro Tools"],
      features: [
        "Time-lapse photography",
        "Macro cinematography",
        "Scientific visualizations",
        "Original score synchronized with natural rhythms",
      ],
      role: "Editor & Sound Designer",
      client: "EcoVision Media",
      duration: "25 minutes",
      liveUrl: "https://example.com/rhythms-of-nature",
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
  }

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

  return (
    <section id="portfolio" className="bg-gradient-to-b from-zinc-900 to-black py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="relative inline-block mb-8 text-3xl font-bold tracking-tighter sm:text-4xl">
            Portfolio
            <span className="absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 transform rounded bg-text-accent"></span>
          </h2>
          <p className="mb-12 text-text-secondary">
            Browse through my selected works across different categories. Each project represents a unique creative
            challenge and solution.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4 rounded-xl bg-zinc-800/30 p-4 backdrop-blur-sm">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm capitalize ${
                selectedCategory === category
                  ? "bg-text-accent/20 text-text-accent border-text-accent/50"
                  : "text-text-secondary hover:text-text-primary hover:border-text-accent/30"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                className="h-full"
              >
                <Card className="group h-full overflow-hidden bg-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-text-accent/5">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      {/* Project Thumbnail */}
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.thumbnail || "/placeholder.svg"}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay with quick info */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="mb-2 text-xl font-semibold text-text-primary">{project.title}</h3>
                        <p className="mb-4 text-center text-sm text-text-secondary line-clamp-3">
                          {project.shortDescription}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-text-accent/10 text-text-primary backdrop-blur-sm hover:bg-text-accent/20"
                          onClick={() => openProjectDetails(project)}
                        >
                          <Info className="mr-2 h-4 w-4" /> View Details
                        </Button>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-text-heading">{project.title}</h3>
                        <Badge variant="outline" className="bg-zinc-700/50 text-text-accent">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text-secondary">
                        <Calendar className="h-3 w-3" /> {project.year}
                        <span>•</span>
                        <Tag className="h-3 w-3" /> {project.tags[0]}
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

      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-zinc-900 p-0 text-text-primary">
          {selectedProject && (
            <>
              {/* Image Gallery */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="h-full w-full object-cover"
                />

                {/* Image Navigation */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 w-2 rounded-full ${
                            index === currentImageIndex ? "bg-text-accent" : "bg-white/50"
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
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md bg-text-accent/20 px-3 py-1 text-sm text-text-accent transition-colors hover:bg-text-accent/30"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Project
                        </a>
                      )}
                      {selectedProject.repoUrl && (
                        <a
                          href={selectedProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md bg-zinc-700/50 px-3 py-1 text-sm text-text-secondary transition-colors hover:bg-zinc-700"
                        >
                          <Github className="h-4 w-4" /> Repository
                        </a>
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
                <Tabs defaultValue="overview" className="mt-6">
                  <TabsList className="w-full">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    {selectedProject.video && <TabsTrigger value="video">Video</TabsTrigger>}
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="mt-4">
                    <div className="space-y-4">
                      <p className="text-text-secondary whitespace-pre-line">{selectedProject.fullDescription}</p>

                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="rounded-lg bg-zinc-800/50 p-4">
                          <h4 className="mb-2 text-sm font-medium text-text-accent">Role</h4>
                          <p className="text-text-secondary">{selectedProject.role}</p>
                        </div>
                        <div className="rounded-lg bg-zinc-800/50 p-4">
                          <h4 className="mb-2 text-sm font-medium text-text-accent">Client</h4>
                          <p className="text-text-secondary">{selectedProject.client}</p>
                        </div>
                        <div className="rounded-lg bg-zinc-800/50 p-4">
                          <h4 className="mb-2 text-sm font-medium text-text-accent">Year</h4>
                          <p className="text-text-secondary">{selectedProject.year}</p>
                        </div>
                        <div className="rounded-lg bg-zinc-800/50 p-4">
                          <h4 className="mb-2 text-sm font-medium text-text-accent">Duration</h4>
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
                            <Badge key={index} className="bg-zinc-800 text-text-primary">
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
                              className="flex items-center gap-2 text-text-accent hover:underline"
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
                              className="flex items-center gap-2 text-text-accent hover:underline"
                            >
                              <Github className="h-4 w-4" />
                              <span>Repository: {selectedProject.repoUrl}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Features Tab */}
                  <TabsContent value="features" className="mt-4">
                    <h4 className="mb-4 text-lg font-medium text-text-heading">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-text-accent/20 text-xs text-text-accent">
                            {index + 1}
                          </span>
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  {/* Video Tab */}
                  {selectedProject.video && (
                    <TabsContent value="video" className="mt-4">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <div className="flex h-full items-center justify-center bg-zinc-800">
                          <Button
                            className="flex items-center gap-2 bg-text-accent hover:bg-text-accent/80"
                            onClick={() => window.open(selectedProject.video, "_blank")}
                          >
                            <Play className="h-4 w-4" /> Watch Video
                          </Button>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-text-secondary">
                        Click the button above to watch the project video. In a production environment, this would be
                        embedded directly in the page.
                      </p>
                    </TabsContent>
                  )}
                </Tabs>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

