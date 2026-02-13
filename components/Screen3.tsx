'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

interface Screen3Props {
  onNext: () => void
}

export default function Screen3({ onNext }: Screen3Props) {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const moveNoButton = () => {
    const maxX = window.innerWidth - 150 // button width
    const maxY = window.innerHeight - 60 // button height
    const newX = Math.random() * maxX
    const newY = Math.random() * maxY
    setNoButtonPos({ x: newX, y: newY })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-gradient-to-b from-deep-purple via-lavender to-warm-gold overflow-hidden relative"
    >
      {/* Floating lanterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-100px',
              animation: `lantern-float ${10 + Math.random() * 10}s ease-in infinite`,
              animationDelay: `${Math.random() * 5}s`,
              '--drift': `${(Math.random() - 0.5) * 100}px`,
            } as React.CSSProperties}
          >
            <div className="relative">
              {/* Lantern glow */}
              <div className="absolute inset-0 bg-warm-gold rounded-full blur-xl opacity-60" style={{ width: '40px', height: '60px' }} />
              {/* Lantern body */}
              <svg width="40" height="60" viewBox="0 0 40 60">
                <defs>
                  <linearGradient id={`lanternGrad${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#F1C40F', stopOpacity: 0.9 }} />
                    <stop offset="50%" style={{ stopColor: '#F39C12', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#E67E22', stopOpacity: 0.9 }} />
                  </linearGradient>
                </defs>
                {/* Top */}
                <rect x="10" y="5" width="20" height="3" fill="#C0392B" />
                {/* Body */}
                <ellipse cx="20" cy="30" rx="12" ry="20" fill={`url(#lanternGrad${i})`} />
                {/* Lines */}
                <line x1="8" y1="15" x2="32" y2="15" stroke="#E67E22" strokeWidth="0.5" />
                <line x1="8" y1="25" x2="32" y2="25" stroke="#E67E22" strokeWidth="0.5" />
                <line x1="8" y1="35" x2="32" y2="35" stroke="#E67E22" strokeWidth="0.5" />
                <line x1="8" y1="45" x2="32" y2="45" stroke="#E67E22" strokeWidth="0.5" />
                {/* Bottom */}
                <rect x="15" y="50" width="10" height="2" fill="#C0392B" />
                {/* String */}
                <line x1="20" y1="0" x2="20" y2="5" stroke="#8B4513" strokeWidth="1" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-dancing text-white mb-4 drop-shadow-lg">
            ¿Quieres ser mi San Valentín, Tatis?
          </h1>
        </motion.div>

        {/* YouTube Video */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          className="w-full max-w-3xl mb-8 rounded-lg overflow-hidden shadow-2xl"
        >
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/tUYM5WNdNr8?si=KqG6-YDxYLrjJQtc"
              title="Tiempo Aquel - Rapunzel (Enredados)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center relative"
        >
          {/* Yes button */}
          <button
            onClick={onNext}
            className="px-12 py-4 bg-gradient-to-r from-soft-pink to-lavender text-white font-playfair text-xl md:text-2xl rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-10"
          >
            💜 ¡Sí!
          </button>

          {/* No button that escapes */}
          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            className="px-12 py-4 bg-gray-400 text-white font-playfair text-xl md:text-2xl rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            style={{
              position: noButtonPos.x === 0 && noButtonPos.y === 0 ? 'relative' : 'fixed',
              left: noButtonPos.x === 0 ? 'auto' : `${noButtonPos.x}px`,
              top: noButtonPos.y === 0 ? 'auto' : `${noButtonPos.y}px`,
              transition: 'all 0.3s ease'
            }}
          >
            No
          </button>
        </motion.div>

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 text-white text-center font-dancing text-xl opacity-70"
        >
          (Intenta presionar &quot;No&quot; 😉)
        </motion.p>
      </div>
    </motion.div>
  )
}
