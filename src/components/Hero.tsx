import TypingAnimation from './TypingAnimation'
import { Breadboard, Arduino, PCB, ClaudeRobot } from './PixelArt'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Terminal window frame */}
      <div className="w-full max-w-3xl">
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
          <h1 className="text-4xl md:text-6xl font-bold text-orange tracking-wider mb-8">
            FABRICATED
          </h1>

          {/* Tagline with typing animation */}
          <div className="text-lg md:text-xl text-off-white mb-2">
            <span className="text-green">$</span>{' '}
            <TypingAnimation
              text="a hands-on build series where anyone can make something real"
              speed={35}
              delay={800}
            />
          </div>

          {/* Subtext */}
          <p className="text-muted text-sm mt-6 font-sans">
            Powered by Claude Code &middot; Coming to Long Beach, CA
          </p>
        </div>
      </div>

      {/* Pixel art illustrations */}
      <div className="flex items-end justify-center gap-6 md:gap-10 mt-12 opacity-80">
        <Breadboard className="w-20 md:w-28" />
        <ClaudeRobot className="w-16 md:w-24" />
        <Arduino className="w-16 md:w-24" />
        <PCB className="w-20 md:w-28" />
      </div>
    </section>
  )
}
