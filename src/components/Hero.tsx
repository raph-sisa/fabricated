import TypingAnimation from './TypingAnimation'
import { Breadboard, Arduino, PCB, ClaudeRobot } from './PixelArt'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-amber pulse-dot" />
      <div className="absolute top-40 right-[15%] w-1.5 h-1.5 rounded-full bg-teal pulse-dot" style={{ animationDelay: '0.8s' }} />
      <div className="absolute bottom-32 left-[20%] w-1.5 h-1.5 rounded-full bg-copper pulse-dot" style={{ animationDelay: '1.6s' }} />

      <div className="w-full max-w-3xl">
        {/* Wordmark */}
        <h1 className="font-display text-6xl md:text-8xl text-amber tracking-widest mb-6">
          FABRICATED
        </h1>

        {/* Tagline */}
        <div className="text-base md:text-lg text-off-white/90 mb-3 font-mono">
          <span className="text-teal">$</span>{' '}
          <TypingAnimation
            text="a hands-on build series where anyone can make something real"
            speed={30}
            delay={600}
          />
        </div>

        {/* Subtext */}
        <p className="text-muted text-sm mt-8 font-mono">
          Powered by Claude Code · Coming to Long Beach, CA
        </p>

        {/* Divider */}
        <div className="mt-10 border-t border-surface-light" />
      </div>

      {/* Pixel art illustrations */}
      <div className="flex items-end justify-center gap-6 md:gap-10 mt-14 opacity-70">
        <Breadboard className="w-20 md:w-28" />
        <ClaudeRobot className="w-16 md:w-24" />
        <Arduino className="w-16 md:w-24" />
        <PCB className="w-20 md:w-28" />
      </div>
    </section>
  )
}
