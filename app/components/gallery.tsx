"use client"

import Image from "next/image"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Play, X } from "lucide-react"
import YouTubeEmbed from "./youtube-embed"

import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

// Helper component for images with skeleton loading
const ImageWithSkeleton = ({ src, alt, className, ...props }: any) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative h-full w-full">
      {isLoading && <Skeleton className="absolute inset-0 h-full w-full rounded-none" />}
      <Image
        src={src}
        alt={alt}
        className={cn(className, isLoading ? "opacity-0" : "opacity-100")}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const youtubeVideos = [
    {
      title: "Leo Insider leaks - LetsFame App",
      url: "https://www.youtube.com/watch?v=cftXsjqSvk4",
      thumbnail: "https://img.youtube.com/vi/cftXsjqSvk4/hqdefault.jpg",
      description: "Insider leaks and behind-the-scenes details of LEO"
    },
    {
      title: "Jawan Trailer Reaction - LetsFame App",
      url: "https://www.youtube.com/watch?v=tPeaVYRsU_I",
      thumbnail: "https://img.youtube.com/vi/tPeaVYRsU_I/hqdefault.jpg",
      description: "Professional reaction and analysis of Jawan trailer"
    },
    {
      title: "Tom Collins - Short Film Teaser",
      url: "https://www.youtube.com/watch?v=v7GFrJc_Fv4",
      thumbnail: "https://img.youtube.com/vi/v7GFrJc_Fv4/hqdefault.jpg",
      description: "Professionally edited short film teaser"
    },
    {
      title: "7D - Feature Film Promotion Video",
      url: "https://youtu.be/L2Bk6l8ISjM",
      thumbnail: "https://img.youtube.com/vi/L2Bk6l8ISjM/hqdefault.jpg",
      description: "High-quality promotional video for feature film"
    }
  ]

  const reels = [
    {
      title: "Doctor Towels - Public Interview",
      url: "https://youtube.com/shorts/bu_01s9m-kE",
      thumbnail: "https://img.youtube.com/vi/bu_01s9m-kE/hqdefault.jpg"
    },
    {
      title: "Doctor Towels - Public Interview-2",
      url: "https://youtube.com/shorts/idJmucSItKc",
      thumbnail: "https://img.youtube.com/vi/idJmucSItKc/hqdefault.jpg"
    },
    {
      title: "Acne - Breakdown",
      url: "https://youtube.com/shorts/4O4kfq_jwtg?feature=shared",
      thumbnail: "https://img.youtube.com/vi/4O4kfq_jwtg/hqdefault.jpg"
    },
    {
      title: "Breast Implant - Essentials",
      url: "https://www.youtube.com/shorts/7JsrfNlCBpg",
      thumbnail: "https://img.youtube.com/vi/7JsrfNlCBpg/hqdefault.jpg"
    }
  ]

  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&\?\/]+)/)
    return match ? match[1] : null
  }

  return (
    <section id="works" className="relative py-20 bg-zinc-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">Featured Works</h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            A showcase of my recent video editing projects, content creation, and creative work
          </p>
        </motion.div>

        {/* YouTube Videos Section */}
        <div className="mb-16">
          <h3 className="mb-8 text-2xl font-semibold text-purple-400">YouTube Videos</h3>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <ImageWithSkeleton
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedVideo(video.url)}
                      className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors"
                    >
                      <Play className="h-8 w-8 text-white ml-1" fill="white" />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">{video.title}</h4>
                  <p className="text-sm text-gray-400">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reels Section */}
        <div>
          <h3 className="mb-8 text-2xl font-semibold text-purple-400">Short Reels</h3>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {reels.map((reel, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="aspect-[9/16] overflow-hidden relative">
                  <ImageWithSkeleton
                    src={reel.thumbnail || "/placeholder.svg"}
                    alt={reel.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-medium text-white line-clamp-2">{reel.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors"
                    >
                      <Play className="h-6 w-6 text-white ml-0.5" fill="white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <YouTubeEmbed url={selectedVideo} />
          </div>
        </div>
      )}
    </section>
  )
}

