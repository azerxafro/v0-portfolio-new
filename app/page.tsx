import Hero from "./components/hero"
import Navbar from "./components/navbar"
import About from "./components/about"
import Gallery from "./components/gallery"
import Services from "./components/services"
import Projects from "./components/projects"
import Music from "./components/music"
import Testimonials from "./components/testimonials"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Music />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

