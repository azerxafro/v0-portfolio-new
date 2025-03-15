import Hero from "./components/hero"
import Navbar from "./components/navbar"
import About from "./components/about"
import Gallery from "./components/gallery"
import Services from "./components/services"
import Portfolio from "./components/portfolio"
import Testimonials from "./components/testimonials"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

