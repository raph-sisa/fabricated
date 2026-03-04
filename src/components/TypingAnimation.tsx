import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  text: string
  speed?: number
  delay?: number
  onComplete?: () => void
  className?: string
}

export default function TypingAnimation({
  text,
  speed = 40,
  delay = 500,
  onComplete,
  className = '',
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
          onComplete?.()
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, speed, delay, onComplete])

  return (
    <span className={className}>
      {displayed}
      <span className={`cursor-blink ${done ? 'opacity-100' : ''}`}>_</span>
    </span>
  )
}
