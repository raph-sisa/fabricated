const PIXEL = 4

function rect(x: number, y: number, w: number, h: number, fill: string) {
  return (
    <rect
      key={`${x}-${y}-${fill}`}
      x={x * PIXEL}
      y={y * PIXEL}
      width={w * PIXEL}
      height={h * PIXEL}
      fill={fill}
    />
  )
}

function pixel(x: number, y: number, fill: string) {
  return rect(x, y, 1, 1, fill)
}

export function Breadboard({ className = '' }: { className?: string }) {
  const board = '#e8e0d0'
  const hole = '#8b8b9e'
  const wire = '#e8662a'
  const wireBlue = '#4a9eff'

  return (
    <svg viewBox="0 0 120 80" className={className} aria-label="Breadboard pixel art">
      {/* Board body */}
      <rect x="4" y="8" width="112" height="64" rx="2" fill={board} />
      {/* Center divider */}
      <rect x="4" y="38" width="112" height="4" fill="#c8c0b0" />
      {/* Hole rows */}
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={`top-${i}`}>
          <rect x={14 + i * 8} y={16} width={3} height={3} rx={1} fill={hole} />
          <rect x={14 + i * 8} y={24} width={3} height={3} rx={1} fill={hole} />
          <rect x={14 + i * 8} y={32} width={3} height={3} rx={1} fill={hole} />
        </g>
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={`bot-${i}`}>
          <rect x={14 + i * 8} y={46} width={3} height={3} rx={1} fill={hole} />
          <rect x={14 + i * 8} y={54} width={3} height={3} rx={1} fill={hole} />
          <rect x={14 + i * 8} y={62} width={3} height={3} rx={1} fill={hole} />
        </g>
      ))}
      {/* Wires */}
      <line x1="23" y1="17" x2="23" y2="47" stroke={wire} strokeWidth="2" />
      <line x1="55" y1="25" x2="55" y2="55" stroke={wireBlue} strokeWidth="2" />
      {/* LED */}
      <circle cx="39" cy="17" r="3" fill="#4ade80" opacity="0.9" />
      <circle cx="39" cy="17" r="5" fill="#4ade80" opacity="0.2" />
    </svg>
  )
}

export function Arduino({ className = '' }: { className?: string }) {
  const board = '#008184'
  const pin = '#c0c0c0'
  const chip = '#2a2a3e'
  const usb = '#888'

  return (
    <svg viewBox="0 0 100 120" className={className} aria-label="Arduino pixel art">
      {/* Board */}
      <rect x="8" y="8" width="84" height="104" rx="3" fill={board} />
      {/* USB port */}
      <rect x="35" y="4" width="20" height="14" rx="1" fill={usb} />
      <rect x="38" y="6" width="14" height="10" fill="#666" />
      {/* Main chip */}
      <rect x="30" y="50" width="32" height="36" rx="1" fill={chip} />
      <circle cx="38" cy="56" r="2" fill="#444" />
      {/* Chip pins */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={`chip-pin-${i}`}>
          <rect x={26} y={52 + i * 4} width={4} height={2} fill={pin} />
          <rect x={62} y={52 + i * 4} width={4} height={2} fill={pin} />
        </g>
      ))}
      {/* Header pins top */}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={`top-pin-${i}`} x={14 + i * 7} y={24} width={4} height={4} fill={pin} />
      ))}
      {/* Header pins bottom */}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={`bot-pin-${i}`} x={14 + i * 7} y={96} width={4} height={4} fill={pin} />
      ))}
      {/* Power LED */}
      <circle cx="20" cy="40" r="3" fill="#4ade80" opacity="0.9" />
      <circle cx="20" cy="40" r="5" fill="#4ade80" opacity="0.15" />
      {/* Reset button */}
      <rect x="68" y="34" width="10" height="8" rx="1" fill="#c8c8c8" />
      <rect x="70" y="36" width="6" height="4" rx="1" fill="#999" />
    </svg>
  )
}

export function PCB({ className = '' }: { className?: string }) {
  const board = '#1a5c1a'
  const trace = '#c8a832'
  const comp = '#2a2a3e'

  return (
    <svg viewBox="0 0 100 80" className={className} aria-label="PCB pixel art">
      {/* Board */}
      <rect x="4" y="4" width="92" height="72" rx="2" fill={board} />
      {/* Mounting holes */}
      <circle cx="12" cy="12" r="3" fill="#1a1a2e" stroke={trace} strokeWidth="1.5" />
      <circle cx="88" cy="12" r="3" fill="#1a1a2e" stroke={trace} strokeWidth="1.5" />
      <circle cx="12" cy="68" r="3" fill="#1a1a2e" stroke={trace} strokeWidth="1.5" />
      <circle cx="88" cy="68" r="3" fill="#1a1a2e" stroke={trace} strokeWidth="1.5" />
      {/* Traces */}
      <path d="M20 30 H45 V50 H70" stroke={trace} strokeWidth="1.5" fill="none" />
      <path d="M20 45 H35 V60 H60" stroke={trace} strokeWidth="1.5" fill="none" />
      <path d="M50 20 V35 H75 V55" stroke={trace} strokeWidth="1.5" fill="none" />
      {/* IC chip */}
      <rect x="55" y="25" width="24" height="16" rx="1" fill={comp} />
      <circle cx="60" cy="30" r="1.5" fill="#444" />
      {Array.from({ length: 5 }).map((_, i) => (
        <g key={`ic-${i}`}>
          <rect x={57 + i * 4} y={22} width={2} height={3} fill="#c0c0c0" />
          <rect x={57 + i * 4} y={41} width={2} height={3} fill="#c0c0c0" />
        </g>
      ))}
      {/* Resistors */}
      <rect x="24" y="22" width="12" height="5" rx="1" fill="#8B6914" />
      <rect x="22" y="23.5" width={2} height="2" fill="#c0c0c0" />
      <rect x="36" y="23.5" width={2} height="2" fill="#c0c0c0" />
      {/* Capacitor */}
      <circle cx="40" cy="55" r="5" fill={comp} />
      <text x="37.5" y="57.5" fontSize="5" fill="#888">C</text>
      {/* LED */}
      <circle cx="80" cy="58" r="3" fill="#e8662a" opacity="0.9" />
      <circle cx="80" cy="58" r="5" fill="#e8662a" opacity="0.15" />
    </svg>
  )
}

export function ClaudeRobot({ className = '' }: { className?: string }) {
  const body = '#e8662a'
  const accent = '#f4945e'
  const eye = '#f0ece4'
  const dark = '#1a1a2e'

  return (
    <svg viewBox="0 0 80 96" className={className} aria-label="Claude Code robot pixel art">
      {/* Antenna */}
      <rect x="36" y="0" width="8" height="4" fill={accent} />
      <rect x="38" y="4" width="4" height="8" fill={body} />
      {/* Head */}
      <rect x="16" y="12" width="48" height="36" rx="4" fill={body} />
      {/* Eyes */}
      <rect x="26" y="22" width="8" height="10" rx="2" fill={eye} />
      <rect x="46" y="22" width="8" height="10" rx="2" fill={eye} />
      <rect x="28" y="26" width="4" height="4" rx="1" fill={dark} />
      <rect x="48" y="26" width="4" height="4" rx="1" fill={dark} />
      {/* Mouth / terminal screen */}
      <rect x="24" y="36" width="32" height="8" rx="2" fill={dark} />
      <rect x="27" y="38" width="3" height="4" fill="#4ade80" />
      <rect x="32" y="38" width="8" height="4" fill="#4ade80" opacity="0.5" />
      <rect x="42" y="38" width="5" height="4" fill="#4ade80" opacity="0.3" />
      {/* Body */}
      <rect x="20" y="52" width="40" height="28" rx="4" fill={body} />
      {/* Chest detail */}
      <rect x="30" y="58" width="20" height="12" rx="2" fill={dark} />
      <rect x="33" y="60" width="4" height="2" fill="#4ade80" />
      <rect x="33" y="64" width="8" height="2" fill={accent} />
      {/* Arms */}
      <rect x="8" y="54" width="10" height="6" rx="2" fill={accent} />
      <rect x="62" y="54" width="10" height="6" rx="2" fill={accent} />
      {/* Hands */}
      <rect x="4" y="60" width="10" height="8" rx="2" fill={body} />
      <rect x="66" y="60" width="10" height="8" rx="2" fill={body} />
      {/* Legs */}
      <rect x="26" y="82" width="10" height="10" rx="2" fill={accent} />
      <rect x="44" y="82" width="10" height="10" rx="2" fill={accent} />
      {/* Feet */}
      <rect x="22" y="88" width="14" height="6" rx="2" fill={body} />
      <rect x="44" y="88" width="14" height="6" rx="2" fill={body} />
    </svg>
  )
}
