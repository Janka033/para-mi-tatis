import type { Metadata } from 'next'
import { Dancing_Script, Playfair_Display } from 'next/font/google'
import './globals.css'

const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: '💜 Para Mi Tatis 🏮',
  description: 'Una página web romántica de San Valentín con temática de Rapunzel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${dancing.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
