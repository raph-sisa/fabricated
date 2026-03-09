import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'
import TerminalDrawer from './components/TerminalDrawer'

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false)

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === '`' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const target = e.target as HTMLElement
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return
        e.preventDefault()
        setTerminalOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div className="min-h-screen bg-bg-dark">
      <Hero />
      <HowItWorks />
      <EmailCapture />
      <Footer />

      {/* Terminal hint */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setTerminalOpen((prev) => !prev)}
          className="bg-surface hover:bg-surface-light border border-surface-light text-muted hover:text-off-white font-mono text-xs px-3 py-1.5 rounded transition-colors"
        >
          <span className="text-amber">`</span> terminal
        </button>
      </div>

      <TerminalDrawer open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  )
}
