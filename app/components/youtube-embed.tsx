"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

interface YouTubeEmbedProps {
  url: string
  title?: string
}

export default function YouTubeEmbed({ url, title = "YouTube Video" }: YouTubeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Extract video ID from URL
  const getVideoId = (videoUrl: string) => {
    const match = videoUrl.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&\?\/]+)/)
    return match ? match[1] : null
  }

  const videoId = getVideoId(url)

  if (!videoId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-800 flex items-center justify-center">
        <p className="text-text-secondary">Invalid YouTube URL</p>
      </div>
    )
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-800 z-10">
          <Loader2 className="h-8 w-8 animate-spin text-purple-500 mb-2" />
          <p className="text-text-secondary">Loading video...</p>
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        className="h-full w-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  )
}

