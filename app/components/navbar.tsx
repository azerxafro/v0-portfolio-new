"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-purple-400">
                <span className="text-xl font-bold text-white">AR</span>
              </div>
              <span className="hidden sm:block text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                Ashwin R
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Download CV Button - Desktop */}
            <div className="hidden md:block">
              <a
                href="/assets/cv.pdf"
                download="Ashwin-R-CV.pdf"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-4 py-2 text-sm font-medium text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-purple-400 hover:text-purple-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl text-text-secondary hover:text-text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {/* Download CV Button - Mobile */}
              <a
                href="/assets/ashwin-r-cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-4 py-2 text-base font-medium text-black hover:opacity-90 transition-opacity self-start mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}