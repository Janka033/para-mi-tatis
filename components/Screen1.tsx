'use client'
import { useState, useEffect } from 'react'

interface Star {
  left: string
  top: string
  animationDelay: string
}

interface Screen1Props {
  onNext: () => void;
}

export default function Screen1({ onNext }: Screen1Props) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    setStars([...Array(50)].map(() => ({
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      animationDelay: Math.random() * 2 + 's',
    })))
  }, [])

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-b from-purple-800 via-purple-600 to-yellow-300">
        <h1 className="text-5xl font-extrabold text-yellow-200 drop-shadow-lg mb-6">
          Tatis... tengo algo que decirte
        </h1>
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