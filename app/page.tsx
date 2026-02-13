'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Screen1 from '@/components/Screen1'
import Screen2 from '@/components/Screen2'
import Screen3 from '@/components/Screen3'
import Screen4 from '@/components/Screen4'

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(1)

  return (
    <main className="min-h-screen w-full">
      <AnimatePresence mode="wait">
        {currentScreen === 1 && (
          <Screen1 key="screen1" onNext={() => setCurrentScreen(2)} />
        )}
        {currentScreen === 2 && (
          <Screen2 key="screen2" onNext={() => setCurrentScreen(3)} />
        )}
        {currentScreen === 3 && (
          <Screen3 key="screen3" onNext={() => setCurrentScreen(4)} />
        )}
        {currentScreen === 4 && (
          <Screen4 key="screen4" />
        )}
      </AnimatePresence>
    </main>
  )
}
