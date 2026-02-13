'use client'

import { motion } from 'framer-motion'

interface Screen1Props {
  onNext: () => void
}

export default function Screen1({ onNext }: Screen1Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full bg-gradient-to-b from-dark-night to-deep-purple overflow-hidden flex items-center justify-center"
    >
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Fireflies */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-warm-gold rounded-full animate-pulse-glow animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Tower silhouette */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:w-48">
        <svg viewBox="0 0 200 400" className="w-full h-auto opacity-60">
          <defs>
            <linearGradient id="towerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#2C3E50', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#1A1A2E', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          
          {/* Tower body */}
          <rect x="50" y="100" width="100" height="300" fill="url(#towerGradient)" />
          
          {/* Tower top */}
          <polygon points="50,100 100,20 150,100" fill="#34495E" />
          
          {/* Window with light */}
          <ellipse cx="100" cy="150" rx="15" ry="20" fill="#F1C40F" opacity="0.7" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl font-dancing text-white mb-12"
        >
          Tatis... tengo algo que decirte
        </motion.h1>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-8 py-4 bg-gradient-to-r from-lavender to-deep-purple text-white font-playfair text-lg md:text-xl rounded-full shadow-lg animate-glow hover:shadow-2xl transition-all duration-300"
        >
          ✨ Abrir la carta
        </motion.button>
      </div>
    </motion.div>
  )
}
