import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from 'react'

const COMMANDS: Record<string, { description: string; output: string | string[] }> = {
  help: {
    description: 'Show available commands',
    output: [
      'Available commands:',
      '',
      '  help          Show this message',
      '  about         What is Fabricated?',
      '  projects      See upcoming builds',
      '  location      Where & when',
      '  subscribe     Get notified',
      '  clear         Clear terminal',
      '  theme         Toggle terminal theme',
    ],
  },
  about: {
    description: 'What is Fabricated?',
    output: [
      'FABRICATED is a hands-on hardware build series where',
      'beginners use AI (Claude Code) to build real devices.',
      '',
      'No experience needed. You pick a project, we provide',
      'the parts, and Claude Code guides you through every',
      'step — wiring, coding, and debugging.',
    ],
  },
  projects: {
    description: 'See upcoming builds',
    output: [
      'Upcoming builds:',
      '',
      '  [01] LED Matrix Display    — beginner',
      '  [02] Sensor Weather Station — beginner',
      '  [03] Custom MIDI Controller — intermediate',
      '  [04] Smart Plant Monitor    — beginner',
      '',
      'More projects announced soon. Run `subscribe` to stay posted.',
    ],
  },
  location: {
    description: 'Where & when',
    output: [
      'Location: Long Beach, CA',
      'Date:     Coming soon',
      'Venue:    TBA',
      '',
      'Run `subscribe` to be the first to know.',
    ],
  },
  subscribe: {
    description: 'Get notified',
    output: [
      'Scroll up to the signup form, or visit:',
      'fabricated.inwonder.xyz/#notify',
    ],
  },
}

interface Line {
  type: 'input' | 'output'
  text: string
}

export default function TerminalDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: 'FABRICATED Terminal v1.0' },
    { type: 'output', text: 'Type `help` for available commands.' },
    { type: 'output', text: '' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [lines, scrollToBottom])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  function handleCommand(cmd: string) {
    const trimmed = cmd.trim().toLowerCase()
    const newLines: Line[] = [{ type: 'input', text: `$ ${cmd}` }]

    if (trimmed === 'clear') {
      setLines([])
      return
    }

    if (trimmed === 'theme') {
      newLines.push({ type: 'output', text: 'Theme toggle coming soon.' })
    } else if (COMMANDS[trimmed]) {
      const output = COMMANDS[trimmed].output
      const outputLines = Array.isArray(output) ? output : [output]
      outputLines.forEach((line) => newLines.push({ type: 'output', text: line }))
    } else if (trimmed === '') {
      // empty line
    } else {
      newLines.push({ type: 'output', text: `command not found: ${trimmed}` })
      newLines.push({ type: 'output', text: 'Type `help` for available commands.' })
    }

    newLines.push({ type: 'output', text: '' })
    setLines((prev) => [...prev, ...newLines])
    setHistory((prev) => [cmd, ...prev])
    setHistoryIdx(-1)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const next = Math.min(historyIdx + 1, history.length - 1)
        setHistoryIdx(next)
        setInput(history[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx > 0) {
        const next = historyIdx - 1
        setHistoryIdx(next)
        setInput(history[next])
      } else {
        setHistoryIdx(-1)
        setInput('')
      }
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!open) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 terminal-enter">
      <div className="max-w-full mx-auto bg-[#0A0A08] border-t border-surface-light shadow-2xl">
        {/* Terminal chrome */}
        <div className="flex items-center justify-between px-4 py-2 bg-surface border-b border-surface-light">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] cursor-pointer" onClick={onClose} />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-muted text-xs font-mono">fabricated — terminal</span>
          </div>
          <button
            onClick={onClose}
            className="text-muted hover:text-off-white text-xs font-mono transition-colors"
          >
            ` to close
          </button>
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="h-64 overflow-y-auto p-4 font-mono text-sm"
        >
          {lines.map((line, i) => (
            <div key={i} className={line.type === 'input' ? 'text-teal' : 'text-off-white/80'}>
              {line.text || '\u00A0'}
            </div>
          ))}

          {/* Input line */}
          <div className="flex items-center gap-2">
            <span className="text-teal shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-off-white outline-none font-mono text-sm caret-amber"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
