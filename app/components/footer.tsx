export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-text-secondary">© {new Date().getFullYear()} Ashwin Azer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-text-secondary hover:text-purple-400 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-text-secondary hover:text-purple-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-text-secondary hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

