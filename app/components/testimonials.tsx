"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "Ashwin's editing skills transformed our raw footage into a compelling story. His attention to detail and creative vision exceeded our expectations.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Working with Ashwin was a pleasure. He understood our brand voice perfectly and delivered a video that resonated with our audience and increased engagement.",
      author: "Michael Chen",
      position: "Content Manager, MediaHub",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Ashwin's technical expertise and artistic sensibility make him a standout editor. He took our documentary to the next level with his thoughtful approach.",
      author: "Emma Rodriguez",
      position: "Independent Filmmaker",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Client Testimonials</h2>
          <p className="max-w-2xl mx-auto text-text-secondary">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900 p-8 md:p-12 rounded-lg text-center"
            >
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-text-accent opacity-50" />
              </div>
              <p className="text-xl md:text-2xl mb-8 italic text-text-primary">"{testimonials[activeIndex].quote}"</p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].author}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-text-heading">{testimonials[activeIndex].author}</h4>
                  <p className="text-text-secondary">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-4">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="text-text-primary">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="text-text-primary">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === activeIndex ? "bg-text-accent" : "bg-zinc-700"
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

