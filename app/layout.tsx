import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YouthCap - Empowering Teens in Economics & Finance',
  description: 'YouthCap is a student-led initiative that empowers teens around the world to explore economics, finance, and global markets through real projects and hands-on learning.',
  keywords: ['youthcap', 'finance', 'economics', 'education', 'students', 'global markets', 'investing'],
  authors: [{ name: 'YouthCap Team' }],
  openGraph: {
    title: 'YouthCap - Empowering Teens in Economics & Finance',
    description: 'Student-led initiative empowering teens to explore economics, finance, and global markets.',
    url: 'https://youthcap.netlify.app',
    siteName: 'YouthCap',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YouthCap - Empowering Teens in Economics & Finance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouthCap - Empowering Teens in Economics & Finance',
    description: 'Student-led initiative empowering teens to explore economics, finance, and global markets.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
