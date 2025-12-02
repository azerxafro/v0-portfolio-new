"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Music as MusicIcon, Play, Mic2, Disc, Headphones, Youtube } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Music() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const tracks = [
    {
      title: "Raatchasi",
      role: "Performer",
      year: "2024",
      description: "A high-energy single showcasing raw lyrical flow.",
      tags: ["Hip-Hop", "Rap"],
      url: "https://music.apple.com/us/album/raatchasi-single/1739265814",
    },
    {
      title: "Pikachu (New Era)",
      role: "Feat. Saileshxafro",
      year: "2023",
      description: "A notable collaboration track defining a new era.",
      tags: ["Fusion", "Indie"],
      url: "https://music.apple.com/us/album/pikachu-feat-saileshxafro-new-era-single/1715422839",
    },
    {
      title: "Valjam (To Pondy Streets)",
      role: "Feat. Wa'Cali, Iffath",
      year: "2023",
      description: "A street anthem capturing the vibe of Pondicherry.",
      tags: ["Hip-Hop", "Collab"],
      url: "https://music.apple.com/in/album/valjam-to-pondy-streets-single/1726986689",
    },
    {
      title: "Pick N' Sick",
      role: "Collaboration",
      year: "2023",
      description: "Hard-hitting beats met with sick verses.",
      tags: ["Rap", "Trap"],
      url: "https://music.apple.com/us/album/pick-n-sick-feat-ashwin-azer-single/1552528751",
    },
  ]

  const platforms = [
    { name: "Apple Music", url: "https://music.apple.com/in/artist/ashwin-azer/1526462423", icon: <Headphones className="h-4 w-4" /> },
    { name: "JioSaavn", url: "https://www.jiosaavn.com/artist/ashwin-azer/R,u7V5F4o,U_", icon: <Headphones className="h-4 w-4" /> },
    { name: "Deezer", url: "https://www.deezer.com/en/artist/16120121", icon: <Headphones className="h-4 w-4" /> },
    { name: "Boomplay", url: "https://www.boomplay.com/artists/1659918", icon: <Headphones className="h-4 w-4" /> },
    { name: "YouTube", url: "https://youtube.com/c/ashwinazer", icon: <Youtube className="h-4 w-4" /> },
  ]

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
      transition: {
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section id="music" className="py-20 bg-black">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MusicIcon className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Discography
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Vibes, bars, and beats. Streaming on all major platforms.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden rounded-xl bg-zinc-900/80 border border-zinc-800 p-6 hover:bg-zinc-800/80 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 h-full"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-900/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                  <Disc className="h-6 w-6" />
                </div>
                <h3 className="mb-1 text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{track.title}</h3>
                <p className="mb-3 text-sm text-purple-400">{track.role}</p>
                <p className="mb-4 text-xs text-zinc-400 line-clamp-2">{track.description}</p>
                <div className="flex flex-wrap gap-2">
                  {track.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-zinc-700 text-zinc-400 text-[10px] group-hover:border-purple-500/30 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="rounded-2xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 border border-purple-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Listen Now</h3>
              <p className="text-zinc-400">Find my music on your favorite streaming platform.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4">
              {platforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-zinc-800 px-6 py-3 text-sm font-medium text-white hover:bg-purple-600 transition-colors border border-transparent hover:border-purple-400/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {platform.icon}
                  {platform.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
