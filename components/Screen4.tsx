'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Screen4() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-gradient-to-br from-deep-purple via-lavender to-soft-pink overflow-hidden relative flex items-center justify-center"
    >
      {/* Falling lilies */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {mounted && [...Array(20)].map((_, i) => (
          <div
            key={`lily-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-100px',
              animation: `fall ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path d="M50,20 Q30,40 50,80 Q70,40 50,20" fill="#7DCEA0" opacity="0.8" />
              <path d="M50,30 Q40,45 50,70 Q60,45 50,30" fill="#98D8B8" opacity="0.9" />
              <circle cx="50" cy="50" r="8" fill="#F1C40F" />
            </svg>
          </div>
        ))}
      </div>

      {/* Rising lanterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(8)].map((_, i) => (
          <div
            key={`lantern-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-100px',
              animation: `lantern-float ${12 + Math.random() * 8}s ease-in infinite`,
              animationDelay: `${Math.random() * 3}s`,
              '--drift': `${(Math.random() - 0.5) * 80}px`,
            } as React.CSSProperties}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-warm-gold rounded-full blur-xl opacity-50" style={{ width: '35px', height: '55px' }} />
              <svg width="35" height="55" viewBox="0 0 40 60">
                <defs>
                  <linearGradient id={`finalLantern${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#F1C40F', stopOpacity: 0.9 }} />
                    <stop offset="50%" style={{ stopColor: '#F39C12', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#E67E22', stopOpacity: 0.9 }} />
                  </linearGradient>
                </defs>
                <rect x="10" y="5" width="20" height="3" fill="#C0392B" />
                <ellipse cx="20" cy="30" rx="12" ry="20" fill={`url(#finalLantern${i})`} />
                <line x1="8" y1="15" x2="32" y2="15" stroke="#E67E22" strokeWidth="0.5" />
                <line x1="8" y1="25" x2="32" y2="25" stroke="#E67E22" strokeWidth="0.5" />
                <line x1="8" y1="35" x2="32" y2="35" stroke="#E67E22" strokeWidth="0.5" />
                <rect x="15" y="50" width="10" height="2" fill="#C0392B" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {mounted && [...Array(15)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-50px',
              animation: `rise ${8 + Math.random() * 4}s ease-in infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            💜
          </div>
        ))}
      </div>

      {/* Golden sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && [...Array(30)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-warm-gold rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              filter: 'drop-shadow(0 0 3px rgba(241, 196, 15, 0.8))',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-dancing text-white mb-6 drop-shadow-2xl">
            ¡Te amo, Tatis! 💜
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-2xl md:text-4xl font-playfair text-white mb-4 drop-shadow-lg">
            Eres y serás siempre mi Rapunzel 🏮
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8"
        >
          <p className="text-xl md:text-2xl font-dancing text-white drop-shadow-lg">
            Para Kemberly Tatiana Moreno Guzmán
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: 'spring' }}
          className="mt-12 flex justify-center items-center gap-8"
        >
          <div className="text-6xl animate-pulse-glow">🌺</div>
          <div className="text-6xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}>💜</div>
          <div className="text-6xl animate-pulse-glow" style={{ animationDelay: '1s' }}>🏮</div>
        </motion.div>

        {/* Message from the music */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-12"
        >
          <p className="text-lg md:text-xl font-playfair text-white italic opacity-90">
            &quot;Y al fin puedo ver la luz, y al fin la vi llegar...&quot; ✨
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
