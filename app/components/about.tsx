"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ChevronDown, ChevronUp, Award, Calendar, Briefcase } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [bioExpanded, setBioExpanded] = useState(false)

  const skills = [
    { name: "Adobe Premiere Pro", level: 90 },
    { name: "Adobe After Effects", level: 80 },
    { name: "DaVinci Resolve", level: 60 },
    { name: "Adobe Photoshop", level: 70 },
    { name: "Shopify", level: 65 },
  ]

  const software = [
    { name: "Adobe Premiere Pro", icon: "🎬" },
    { name: "After Effects", icon: "✨" },
    { name: "DaVinci Resolve", icon: "🎨" },
    { name: "Photoshop", icon: "📷" },
    { name: "Shopify", icon: "🛍️" },
  ]

  const experiences = [
    {
      role: "Senior Video Editor",
      company: "Creative Studios",
      period: "2021 - Present",
      description: "Leading creative video editing for commercial clients across multiple industries.",
    },
    {
      role: "Freelance Editor",
      company: "Self-employed",
      period: "2019 - 2021",
      description: "Worked with various clients on documentary, commercial, and narrative projects.",
    },
    {
      role: "Junior Editor",
      company: "Media Productions",
      period: "2017 - 2019",
      description: "Assisted senior editors and developed skills in commercial video editing.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="bg-gradient-to-b from-black to-zinc-900 py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-5xl"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="relative inline-block mb-8 text-3xl font-bold tracking-tighter sm:text-4xl">
              About Me
              <span className="absolute -bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 transform rounded bg-purple-500"></span>
            </h2>
            <p className="mx-auto max-w-2xl text-text-secondary">
              Visual storyteller with a passion for transforming ideas into compelling narratives through the art of
              editing
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            variants={itemVariants}
            className="mb-16 overflow-hidden rounded-2xl bg-zinc-800/50 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Image Column */}
              <div className="relative col-span-2 flex items-center justify-center p-8 lg:p-12">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-purple-700 lg:h-80 lg:w-80">
                  <img
                    src="/assets/portrait.jpg"
                    alt="Ashwin R"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full border-8 border-text-accent/10"></div>
                </div>
              </div>

              {/* Bio Column */}
              <div className="col-span-3 p-8 lg:p-12">
                <h3 className="mb-3 text-3xl font-bold text-text-heading">Ashwin R</h3>
                <h4 className="mb-6 text-lg text-text-accent">Video Editor • Music Artist • Content Creator</h4>

                <div className="mb-6">
                  <div
                    className={`relative overflow-hidden transition-all duration-500 ${bioExpanded ? "max-h-[1000px]" : "max-h-28"}`}
                  >
                    <p className="mb-4 text-text-primary">
                      Hello! I'm Ashwin R, a passionate video editor and content creator specializing in engaging visual
                      storytelling, professional editing, and creative content production.
                    </p>
                    <p className="mb-4 text-text-primary">
                      My expertise spans across video editing using Adobe Premiere Pro and DaVinci Resolve, motion graphics
                      with After Effects, and creating compelling content for YouTube, social media, and digital platforms.
                      I bring stories to life through meticulous attention to pacing, transitions, and narrative flow.
                    </p>
                    <p className="mb-4 text-text-primary">
                      I've worked on diverse projects including movie analysis videos, promotional content, short films,
                      and social media reels. My approach combines technical proficiency with creative vision to deliver
                      content that captivates audiences and drives engagement.
                    </p>
                    <p className="text-text-primary">
                      Whether it's analyzing box office trends, creating viral shorts, or editing feature-length content,
                      I'm dedicated to pushing creative boundaries and delivering exceptional results on every project.
                    </p>
                    {!bioExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-800/80 to-transparent"></div>
                    )}
                  </div>
                  <button
                    onClick={() => setBioExpanded(!bioExpanded)}
                    className="mt-2 flex items-center gap-1 text-sm text-text-accent hover:text-text-primary"
                  >
                    {bioExpanded ? (
                      <>
                        Show less <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read more <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-purple-700/30 hover:bg-purple-600/40 text-white">
                    Premiere Pro
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-700/30 hover:bg-purple-600/40 text-white">
                    After Effects
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-700/30 hover:bg-purple-600/40 text-white">
                    DaVinci Resolve
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-700/30 hover:bg-purple-600/40 text-white">
                    Content Creation
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-700/30 hover:bg-purple-600/40 text-white">
                    YouTube
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs Section */}
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="software">Software</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
              </TabsList>

              {/* Skills Tab */}
              <TabsContent value="skills" className="mt-0">
                <div className="rounded-xl bg-zinc-800/30 p-8 backdrop-blur-sm">
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-text-heading">
                    <Award className="h-5 w-5 text-text-accent" /> Professional Skills
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="mb-2 flex justify-between">
                          <span className="text-text-primary">{skill.name}</span>
                          <span className="text-text-accent">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" indicatorColor="bg-text-accent" />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Software Tab */}
              <TabsContent value="software" className="mt-0">
                <div className="rounded-xl bg-zinc-800/30 p-8 backdrop-blur-sm">
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-text-heading">
                    <Calendar className="h-5 w-5 text-text-accent" /> Tools & Software
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {software.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-lg bg-zinc-700/50 p-4 transition-transform hover:translate-y-[-5px]"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-600 text-xl">
                          {item.icon}
                        </span>
                        <span className="text-text-primary">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Experience Tab */}
              <TabsContent value="experience" className="mt-0">
                <div className="rounded-xl bg-zinc-800/30 p-8 backdrop-blur-sm">
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-text-heading">
                    <Briefcase className="h-5 w-5 text-text-accent" /> Work Experience
                  </h3>
                  <div className="relative space-y-8 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-zinc-700">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className="relative before:absolute before:-left-6 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-text-accent"
                      >
                        <h4 className="text-lg font-medium text-text-heading">{exp.role}</h4>
                        <div className="mb-2 flex flex-wrap items-center gap-x-3 text-sm">
                          <span className="text-text-accent">{exp.company}</span>
                          <span className="text-text-secondary">| {exp.period}</span>
                        </div>
                        <p className="text-text-secondary">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

