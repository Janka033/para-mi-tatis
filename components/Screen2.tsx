'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Screen2Props {
  onNext: () => void
}

const letterText = `Mi Tatis, mi Kem, mi vida entera...

No sé en qué momento dejaste de ser una persona más en mi mundo para convertirte en MI mundo. Pero pasó. Y desde entonces, cada día que amanezco y sé que existes, siento que la vida tiene sentido.

Eres como Rapunzel, ¿sabes? No solo porque eres hermosa, sino porque iluminaste todo lo que estaba oscuro en mí. Antes de ti, yo estaba en esa torre... y llegaste tú con tu luz, con tu risa, con esa forma tuya de hacerme sentir que todo va a estar bien.

Me encanta llamarte Tatis. Me encanta llamarte Kem. Me encanta llamarte amor. Pero lo que más me encanta es que tú me dejes ser parte de tu vida.

Eres mi lirio más bonito en un jardín lleno de flores. Eres mi linterna flotando en la noche más oscura. Eres lo que no sabía que necesitaba, pero ahora no puedo vivir sin ti.

Literal eres mi vida, Kemberly Tatiana Moreno Guzmán. Y no es exageración. Es que cuando te veo, el corazón se me sale. Cuando me hablas, el mundo se detiene. Cuando me abrazas, siento que estoy en casa.

Y hoy, 14 de febrero, no quiero solo decirte que te amo. Quiero que lo SIENTAS. Porque el amor que siento por ti no cabe en palabras, pero aquí estoy, intentándolo.

Te amo con todo lo que soy, con todo lo que tengo, y con todo lo que seré.

Siempre tuyo,
Tu amor 💜`

export default function Screen2({ onNext }: Screen2Props) {
  const [displayedText, setDisplayedText] = useState('')
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= letterText.length) {
        setDisplayedText(letterText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowButton(true), 500)
      }
    }, 30) // Type speed

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 overflow-auto py-8 px-4"
    >
      {/* Envelope animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className="max-w-4xl mx-auto"
      >
        {/* Decorative lilies */}
        <div className="absolute top-4 left-4 md:left-8 opacity-60">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path d="M50,20 Q30,40 50,80 Q70,40 50,20" fill="#7DCEA0" opacity="0.6" />
            <path d="M50,30 Q40,45 50,70 Q60,45 50,30" fill="#98D8B8" opacity="0.8" />
            <circle cx="50" cy="50" r="8" fill="#F1C40F" />
          </svg>
        </div>
        <div className="absolute top-4 right-4 md:right-8 opacity-60">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path d="M50,20 Q30,40 50,80 Q70,40 50,20" fill="#7DCEA0" opacity="0.6" />
            <path d="M50,30 Q40,45 50,70 Q60,45 50,30" fill="#98D8B8" opacity="0.8" />
            <circle cx="50" cy="50" r="8" fill="#F1C40F" />
          </svg>
        </div>

        {/* Letter paper */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-amber-50 rounded-lg shadow-2xl p-8 md:p-12 border-4 border-warm-gold relative"
          style={{
            background: 'linear-gradient(to bottom, #FFF8DC, #FAEBD7)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 0 30px rgba(241,196,15,0.1)'
          }}
        >
          {/* Decorative border */}
          <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-warm-gold opacity-30 rounded-lg pointer-events-none" />
          
          {/* Envelope fold decoration */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[30px] border-b-amber-200" />

          {/* Letter content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-dancing text-deep-purple text-center mb-8">
              💌 Carta de Amor 💌
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="font-playfair text-gray-800 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                {displayedText}
              </p>
            </div>

            {/* Continue button */}
            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <button
                  onClick={onNext}
                  className="px-8 py-3 bg-gradient-to-r from-lavender to-deep-purple text-white font-playfair text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Continuar... 💜
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Bottom decorative lilies */}
        <div className="absolute bottom-4 left-4 md:left-8 opacity-60 animate-float">
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path d="M50,20 Q30,40 50,80 Q70,40 50,20" fill="#7DCEA0" opacity="0.6" />
            <circle cx="50" cy="50" r="6" fill="#F1C40F" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-4 md:right-8 opacity-60 animate-float" style={{ animationDelay: '1s' }}>
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path d="M50,20 Q30,40 50,80 Q70,40 50,20" fill="#7DCEA0" opacity="0.6" />
            <circle cx="50" cy="50" r="6" fill="#F1C40F" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  )
}
