import type { Metadata } from 'next'
import './globals.css'
import MusicPlayer from '@/components/MusicPlayer'

export const metadata: Metadata = {
  title: '💜 Para Mi Tatis 🏮',
  description: 'Una página web romántica de San Valentín con temática de Rapunzel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body>
        <MusicPlayer />
        {children}
      </body>
    </html>
  )
}