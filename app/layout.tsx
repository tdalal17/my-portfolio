import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tanay Dalal | Portfolio',
  description: 'Software Engineer with expertise in cloud technologies and full-stack development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-4 bg-warmPalette-dark-bg text-warmPalette-dark-text border-b border-warmPalette-muted">
          <div className="container mx-auto flex justify-between items-center">
            <div className="font-bold text-xl">Tanay Dalal</div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-warmPalette-primary transition-colors">Home</a></li>
                <li><a href="/projects" className="hover:text-warmPalette-primary transition-colors">Projects</a></li>
                <li><a href="/contact" className="hover:text-warmPalette-primary transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="p-6 bg-warmPalette-dark-bg text-warmPalette-dark-text border-t border-warmPalette-muted">
          <div className="container mx-auto text-center">
            <p className="text-sm text-warmPalette-dark-text/70">
              © {new Date().getFullYear()} Tanay Dalal. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://github.com/tdalal17" target="_blank" rel="noopener noreferrer" className="text-warmPalette-dark-text/70 hover:text-warmPalette-primary transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/tanay-dalal" target="_blank" rel="noopener noreferrer" className="text-warmPalette-dark-text/70 hover:text-warmPalette-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}