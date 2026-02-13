'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Star {
  left: string;
  top: string;
  animationDelay: string;
}
interface Firefly {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

interface Screen1Props {
  onNext: () => void;
}

export default function Screen1({ onNext }: Screen1Props) {
  const [stars, setStars] = useState<Star[]>([])
  const [fireflies, setFireflies] = useState<Firefly[]>([])

  useEffect(() => {
    setStars(
      [...Array(50)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
      }))
    )
    setFireflies(
      [...Array(15)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }))
    )
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-dark-night to-deep-purple overflow-hidden flex items-center justify-center">
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star: Star, i: number) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>
      {/* Fireflies */}
      <div className="absolute inset-0">
        {fireflies.map((fly: Firefly, i: number) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-warm-gold rounded-full animate-pulse-glow animate-float"
            style={{
              left: fly.left,
              top: fly.top,
              animationDelay: fly.animationDelay,
              animationDuration: fly.animationDuration,
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
        <button
          className="bg-yellow-500 text-purple-900 px-8 py-4 rounded-full text-2xl font-bold shadow-2xl hover:bg-yellow-400 transition-transform transform hover:scale-105"
          onClick={onNext}
        >
          ✨ Abrir la carta
        </button>
      </div>
    </div>
  )
}