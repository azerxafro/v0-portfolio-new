"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Shield, Terminal, Lock, Search, ShoppingBag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "Atoms.Ninja",
      subtitle: "AI-Powered Cybersecurity Platform",
      description: "Production-ready cybersecurity platform integrating Google Gemini AI Security Architect with Kali Linux tools. Features interactive terminal, vulnerability scanning, and real-time threat analysis.",
      tags: ["AI Security", "Kali Linux", "Google Gemini", "Python"],
      icon: <Shield className="h-10 w-10 text-purple-400" />,
      features: [
        "AI Security Architect (Gemini)",
        "500+ Kali Linux Tools",
        "Interactive Terminal",
        "Automated Vulnerability Scanning"
      ],
      links: {
        demo: "#",
        github: "https://github.com/azerxafro"
      }
    },
    {
      title: "Modern Osintgram v2.0",
      subtitle: "Advanced Instagram OSINT Tool",
      description: "A complete modernization of the Osintgram project with a GUI built using PyQt5. Removes dependencies on outdated APIs and offers multiple scraping backends for reliability.",
      tags: ["OSINT", "PyQt5", "Python", "Web Scraping"],
      icon: <Search className="h-10 w-10 text-pink-400" />,
      features: [
        "Modern GUI (PyQt5)",
        "Multiple API Backends",
        "Real-time Progress Tracking",
        "No Outdated Dependencies"
      ],
      links: {
        demo: "#",
        github: "https://github.com/azerxafro"
      }
    }
  ]

  const ecommerceProjects = [
    {
      title: "The Incrivel",
      subtitle: "Fashion Apparel Store",
      description: "An e-commerce platform specializing in fashion apparel, offering both wholesale and retail options with features like free shipping and discount codes.",
      tags: ["E-commerce", "Fashion", "Retail", "Wholesale"],
      icon: <ShoppingBag className="h-10 w-10 text-emerald-400" />,
      features: [
        "Wholesale & Retail Options",
        "Free Shipping Integration",
        "Discount Code System",
        "Order Tracking"
      ],
      link: "https://theincrivel.com"
    },
    {
      title: "Sparrow Look",
      subtitle: "Men's Oversized T-Shirts",
      description: "A trendy e-commerce store focused on men's oversized t-shirts with unique designs and slogans like \"Fashion that flies high\".",
      tags: ["E-commerce", "Men's Fashion", "Trendy"],
      icon: <ShoppingBag className="h-10 w-10 text-blue-400" />,
      features: [
        "Trendy Collections",
        "User Account System",
        "Secure Checkout",
        "Mobile Responsive"
      ],
      link: "https://sparrowlook.com"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-zinc-900/50">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">
            Personal Hobby Projects
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Merging security, AI, and modern development to build robust tools.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-zinc-800/50 border border-zinc-700/50 p-6 sm:p-8 hover:border-purple-500/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-xl bg-zinc-900/50 p-3 border border-zinc-700">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.links.demo}
                    className="p-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-purple-400">{project.subtitle}</p>
              <p className="mb-6 text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6 space-y-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                    <Terminal className="h-3 w-3 text-purple-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-zinc-700/50 text-zinc-300 hover:bg-zinc-600/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl">
            E-commerce Stores
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            Building scalable and user-friendly online shopping experiences.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {ecommerceProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-zinc-800/50 border border-zinc-700/50 p-6 sm:p-8 hover:border-emerald-500/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-xl bg-zinc-900/50 p-3 border border-zinc-700">
                  {project.icon}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-emerald-400">{project.subtitle}</p>
              <p className="mb-6 text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6 space-y-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                    <ShoppingBag className="h-3 w-3 text-emerald-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-zinc-700/50 text-zinc-300 hover:bg-zinc-600/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
