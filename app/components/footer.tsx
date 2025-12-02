import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/header-footer-logo.png"
              alt="Ashwin Azer"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <p className="text-sm text-text-secondary">© {new Date().getFullYear()} Ashwin Azer. All rights reserved.</p>
          </div>
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

