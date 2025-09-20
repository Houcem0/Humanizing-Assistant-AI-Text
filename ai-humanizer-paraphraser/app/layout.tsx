import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'AI Humanizer & Paraphraser',
  description: 'Humanize and paraphrase AI text quickly',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">{process.env.NEXT_PUBLIC_APP_NAME || 'AI Humanizer'}</h1>
            <nav className="space-x-4 text-sm text-gray-600">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-8">© {new Date().getFullYear()} AI Humanizer</footer>
      </body>
    </html>
  )
}