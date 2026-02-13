'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Lily {
  left: string
  animation: string
  animationDelay: string
}

interface Lantern {
  left: string
  animation: string
  animationDelay: string
}

interface Heart {
  left: string
  animation: string
  animationDelay: string
}

interface Sparkle {
  left: string
  top: string
  animationDelay: string
}

interface Elements {
  lilies: Lily[]
  lanterns: Lantern[]
  hearts: Heart[]
  sparkles: Sparkle[]
}

export default function Screen4() {
  const [elements, setElements] = useState<Elements>({
    lilies: [],
    lanterns: [],
    hearts: [],
    sparkles: [],
  })

  useEffect(() => {
    setElements({
      lilies: [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        animation: `fall ${5 + Math.random() * 5}s linear infinite`,
        animationDelay: `${Math.random() * 5}s`,
      })),
      lanterns: [...Array(8)].map(() => ({
        left: `${Math.random() * 100}%`,
        animation: `lantern-float ${12 + Math.random() * 8}s ease-in infinite`,
        animationDelay: `${Math.random() * 3}s`,
      })),
      hearts: [...Array(15)].map(() => ({
        left: `${Math.random() * 100}%`,
        animation: `rise ${8 + Math.random() * 4}s ease-in infinite`,
        animationDelay: `${Math.random() * 4}s`,
      })),
      sparkles: [...Array(30)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
      })),
    })
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
      {elements.lilies.map((lily: Lily, i: number) => (
        <div key={`lily-${i}`} style={{ ...lily }} />
      ))}

      {/* Rising lanterns */}
      {elements.lanterns.map((lantern: Lantern, i: number) => (
        <div key={`lantern-${i}`} style={{ ...lantern }} />
      ))}

      {/* Floating hearts */}
      {elements.hearts.map((heart: Heart, i: number) => (
        <div key={`heart-${i}`} style={{ ...heart }} />
      ))}

      {/* Golden sparkles */}
      {elements.sparkles.map((sparkle: Sparkle, i: number) => (
        <div key={`sparkle-${i}`} style={{ ...sparkle }} />
      ))}

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
