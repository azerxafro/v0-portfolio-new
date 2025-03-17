"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

export default function YouTubeEmbed({ videoId, title = "YouTube Video" }: YouTubeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-800">
          <Loader2 className="h-8 w-8 animate-spin text-purple-500 mb-2" />
          <p className="text-text-secondary">Loading video...</p>
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="h-full w-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  )
}

