export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-text-secondary">© {new Date().getFullYear()} Ashwin R. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

