"use client"

import { useState } from "react"
import { Loader2, FileImage, FileVideo } from "lucide-react"

interface GDrivePreviewProps {
  fileId: string
  fileType: "image" | "video"
  fileName?: string
}

export default function GDrivePreview({ fileId, fileType, fileName = "Google Drive File" }: GDrivePreviewProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setError("Failed to load the file. It might be private or unavailable.")
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-800">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-purple-500 mb-2" />
          <p className="text-text-secondary">Loading {fileType}...</p>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-500/10 mb-4">
            {fileType === "image" ? (
              <FileImage className="h-8 w-8 text-red-400" />
            ) : (
              <FileVideo className="h-8 w-8 text-red-400" />
            )}
          </div>
          <p className="text-red-400 font-medium mb-1">Error Loading File</p>
          <p className="text-text-secondary text-center max-w-md">{error}</p>
        </div>
      )}

      {!error && (
        <iframe
          src={`https://drive.google.com/file/d/${fileId}/preview`}
          title={fileName}
          className="h-full w-full"
          allow="autoplay"
          onLoad={handleLoad}
          onError={handleError}
        ></iframe>
      )}
    </div>
  )
}

