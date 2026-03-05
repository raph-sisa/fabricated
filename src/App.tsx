import { useEffect, useRef } from 'react'

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', onMove)

    // Cursor color by section
    const colors: Record<string, string> = {
      'hero': '#FFB000',
      'claude-code': '#00AAFF',
      'arduino': '#00FF41',
      'build': '#FFB000',
      'notify': '#00AAFF',
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && cursor) {
          const color = colors[(entry.target as HTMLElement).id] || '#FFB000'
          cursor.style.borderBottomColor = color
        }
      })
    }, { threshold: 0.5 })

    Object.keys(colors).forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Scroll reveal
    const reveals = document.querySelectorAll<HTMLElement>('.scan-panel, .arduino-grid, .projects-grid, .notify-form')
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).style.opacity = '1';
          ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })

    reveals.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      revealObs.observe(el)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      observer.disconnect()
      revealObs.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} id="cursor" />

      {/* NAV */}
      <nav>
        <div className="nav-logo">FABRICATED</div>
        <div className="nav-right">
          <span className="nav-status">SIGNAL ACTIVE</span>
          <span>Long Beach, CA</span>
          <span>Summer 2026</span>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid" />
        <div className="hero-eyebrow">Session 01 · Claude Code + Hardware · Long Beach Makers</div>
        <h1 className="hero-title">
          FAB<span className="sub-word">RICATED</span>
        </h1>
        <p className="hero-descriptor">
          A hands-on build series where AI meets soldering iron.<br />
          You show up, wire something up, talk to it with Claude Code,<br />
          and leave with something that actually works.
        </p>
        <div className="hero-meta">
          <a href="#notify" className="btn-primary">Get Notified</a>
          <span className="hero-tag">📍 Long Beach, CA &nbsp;·&nbsp; Free to attend &nbsp;·&nbsp; All skill levels</span>
        </div>
        <div className="hero-readout">
          <div className="readout-header"><span>SESSION STATUS</span><span>V1.0</span></div>
          <div className="readout-row"><span>EVENT</span><span className="val">FABRICATED</span></div>
          <div className="readout-row"><span>LOCATION</span><span className="val">LGB, CA</span></div>
          <div className="readout-row"><span>SESSION</span><span className="val">01</span></div>
          <div className="readout-row"><span>HARDWARE</span><span className="val green">DETECTED</span></div>
          <div className="readout-row"><span>AI MODEL</span><span className="val green">ONLINE</span></div>
          <div className="readout-row"><span>STATUS</span><span className="val">SUMMER 2026</span></div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {['Build with Claude Code','·','Wire it up','·','Debug in plain English','·','Take it home','·','Long Beach Makers','·','Arduino · Raspberry Pi · ESP32','·','Free to attend','·','Build with Claude Code','·','Wire it up','·','Debug in plain English','·','Take it home','·','Long Beach Makers','·','Arduino · Raspberry Pi · ESP32','·','Free to attend','·'].map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>

      {/* CLAUDE CODE */}
      <section id="claude-code">
        <div className="section-label">What is Claude Code</div>
        <div className="scan-panel">
          <div className="scan-panel-header">
            <span>SYSTEM ANALYSIS · AI AGENT LAYER</span>
            <span>SCAN ACTIVE ▮</span>
          </div>
          <div className="scan-panel-body">
            <div className="scan-col">
              <h3>CLAUDE CODE DETECTED</h3>
              <p>Claude Code is an AI coding agent that lives in your terminal. You describe what you want to build in plain English — and it writes the code, runs it, fixes errors, and keeps going until the thing works.</p>
              <p style={{marginTop:'1rem'}}>No IDE required. No Stack Overflow tab. Just a conversation with an AI that can actually ship code.</p>
            </div>
            <div className="scan-col">
              <div className="terminal">
                <div className="terminal-bar">
                  <div className="t-dot r" /><div className="t-dot y" /><div className="t-dot g" />
                  <span style={{marginLeft:'0.5rem'}}>terminal — claude</span>
                </div>
                <div className="terminal-body">
                  <span className="t-line"><span className="t-prompt">$ </span><span className="t-cmd">claude</span></span>
                  <span className="t-line t-comment"># Claude Code is ready</span>
                  <span className="t-line">&nbsp;</span>
                  <span className="t-line"><span className="t-prompt">&gt; </span><span className="t-cmd">make the LED blink every 500ms</span></span>
                  <span className="t-line t-out">  writing sketch: blink.ino...</span>
                  <span className="t-line t-out">  compiling... done ✓</span>
                  <span className="t-line t-out">  uploading to arduino uno...</span>
                  <span className="t-line t-out">  upload complete ✓</span>
                  <span className="t-line">&nbsp;</span>
                  <span className="t-line"><span className="t-prompt">&gt; </span><span className="t-cursor" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARDUINO */}
      <section id="arduino">
        <div className="section-label green">What is Arduino</div>
        <div className="arduino-grid">
          <pre className="ascii-board">{` ┌───────────────────────────┐
 │   ██████  ARDUINO UNO     │
 │   ██████  REV3            │
 │   ██  ██                  │
 │                           │
 │ ○─○─○─○─○─○─○─○─○─○─○─○ │
 │ D13 D12 D11~ D10~ D9~ D8 │
 │                           │
 │    [USB]     [POWER]      │
 │                           │
 │ ○─○─○─○─○─○              │
 │ A0 A1 A2 A3 A4 A5         │
 │                           │
 │ ● RESET    ◉ LED          │
 └───────────────────────────┘
  DEVICE READY · SERIAL: COM3
  VOLTAGE: 5V  CLOCK: 16MHz`}</pre>
          <div className="arduino-desc">
            <h3>HARDWARE LAYER INITIALIZED</h3>
            <p>Arduino is a tiny open-source computer board about the size of a credit card. It reads sensors, controls motors, lights LEDs, makes sounds — and talks to the physical world in ways your laptop can't.</p>
            <p>At Fabricated, we connect Claude Code to Arduino. You describe what you want your device to do. Claude writes the code. You wire it up and it runs. No prior hardware experience needed.</p>
            <ul className="spec-list">
              <li><span>Microcontroller</span><span className="spec-val">ATmega328P</span></li>
              <li><span>Operating Voltage</span><span className="spec-val">5V</span></li>
              <li><span>Digital I/O Pins</span><span className="spec-val">14</span></li>
              <li><span>Analog Input Pins</span><span className="spec-val">6</span></li>
              <li><span>Connection</span><span className="spec-val">USB → Claude Code</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* BUILD */}
      <section id="build">
        <div className="build-label">What you'll build</div>
        <h2 className="build-header">YOU LEAVE WITH<br /><span>SOMETHING REAL.</span></h2>
        <p className="build-sub">Every session has a theme. You'll arrive with curiosity, leave with a working device — wired, coded, and yours.</p>
        <div className="projects-grid">
          {[
            { num:'01', name:'Motion Sensor Light', desc:'Wire a PIR sensor to an LED strip. Claude Code writes the sketch. Walks you through every step.', tag:'Beginner · Arduino Uno' },
            { num:'02', name:'Talking Sensor', desc:'Connect a temp/humidity sensor. Claude reads the data and narrates it back via your laptop speaker.', tag:'Beginner · DHT22' },
            { num:'03', name:'Bring Your Own Device', desc:'Got an idea? Bring it. Sketch it on a napkin. Claude Code and the room will help you build it.', tag:'Any Level · Open Build' },
          ].map(p => (
            <div className="project-card" key={p.num}>
              <div className="project-num">{p.num}</div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tag">{p.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NOTIFY */}
      <section id="notify">
        <div className="notify-eyebrow">// Join the signal</div>
        <h2 className="notify-title">GET<br /><span>NOTIFIED.</span></h2>
        <p className="notify-sub">Session 01 is coming Summer 2026 in Long Beach, CA. Drop your email and we'll ping you when dates are confirmed.</p>
        <div className="notify-form">
          <input className="notify-input" type="email" placeholder="your@email.com" />
          <button className="notify-btn">Join ▶</button>
        </div>
        <div className="notify-meta">Free to attend · Long Beach, CA · All skill levels welcome</div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">FABRICATED</div>
        <div>Long Beach, CA · Summer 2026 · Claude Code + Hardware</div>
        <div>Session 01 · Free to attend</div>
      </footer>
    </>
  )
}
