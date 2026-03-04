import { useState } from 'react'
import { motion } from 'framer-motion'
import TypingAnimation from './TypingAnimation'
import { Breadboard, Arduino, PCB, ClaudeRobot } from './PixelArt'

export default function Hero() {
  const [firstLineDone, setFirstLineDone] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(240,236,228,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(240,236,228,0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Terminal window frame */}
      <motion.div
        className="w-full max-w-3xl relative z-10"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Terminal chrome */}
        <div className="bg-surface rounded-t-lg px-4 py-2 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-4 text-muted text-xs font-mono">fabricated — zsh</span>
        </div>

        {/* Terminal body */}
        <div className="bg-[#0d0d1a] rounded-b-lg p-6 md:p-10 font-mono">
          {/* Wordmark */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-orange tracking-wider mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            FABRICATED
          </motion.h1>

          {/* Tagline with typing animation */}
          <div className="text-lg md:text-xl text-off-white mb-2">
            <span className="text-green">$</span>{' '}
            <TypingAnimation
              text="a hands-on build series where anyone can make something real"
              speed={35}
              delay={800}
              onComplete={() => setFirstLineDone(true)}
            />
          </div>

          {/* Second typing line — location + date */}
          <div className="text-lg md:text-xl text-off-white min-h-[1.75rem]">
            {firstLineDone && (
              <>
                <span className="text-green">$</span>{' '}
                <TypingAnimation
                  text="Long Beach, CA · Summer 2026"
                  speed={40}
                  delay={400}
                  className="text-muted"
                />
              </>
            )}
          </div>

          {/* Subtext */}
          <motion.p
            className="text-muted text-sm mt-6 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: firstLineDone ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Powered by Claude Code
          </motion.p>
        </div>
      </motion.div>

      {/* Pixel art illustrations */}
      <motion.div
        className="flex items-end justify-center gap-6 md:gap-10 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          whileHover={{ scale: 1.08, y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Breadboard className="w-20 md:w-28" />
        </motion.div>
        <motion.div
          className="relative -mb-1"
          whileHover={{ scale: 1.08, y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ClaudeRobot className="w-20 md:w-28" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08, y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Arduino className="w-16 md:w-24" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.08, y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <PCB className="w-20 md:w-28" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <span className="text-muted text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
