'use client'
import { useRef, useEffect, useState } from 'react'

export default function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const playAudio = async () => {
      try {
        await ref.current?.play()
      } catch (error) {
        console.error('Error al reproducir la música automáticamente:', error)
        setError(true)
      }
    }

    playAudio()
  }, [])

  const handlePlay = () => {
    ref.current?.play().catch(() => {
      setError(true)
    })
  }

  return (
    <>
      <audio
        ref={ref}
        src="/tiempo-aquel.mp3"
        loop
        autoPlay
        controls={false}
        style={{ display: 'none' }}
        onPlay={() => setError(false)}
      />
      {error && (
        <div className="fixed bottom-16 left-4 text-red-500">
          ⚠️ Haz clic en el botón para reproducir la música.
        </div>
      )}
      <button
        onClick={handlePlay}
        className="fixed bottom-4 left-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-yellow-300 hover:via-pink-400 hover:to-purple-500 transition-transform transform hover:scale-110"
      >
        🎵 Reproducir Música
      </button>
    </>
  )
}