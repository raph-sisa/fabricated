import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const CONVERTKIT_FORM_ID = '9163144'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const res = await fetch(
        `https://app.convertkit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email_address: email }),
        }
      )

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <motion.div
            className="bg-surface rounded-lg p-8 md:p-12 relative overflow-hidden"
            whileHover={{ boxShadow: '0 0 40px rgba(232, 102, 42, 0.06)' }}
            transition={{ duration: 0.4 }}
          >
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04]"
              style={{
                background: 'radial-gradient(circle at top right, var(--color-orange), transparent 70%)',
              }}
            />

            {/* Terminal prompt */}
            <div className="font-mono text-muted text-sm mb-6">
              <span className="text-green">$</span> subscribe --notify-me
            </div>

            <h2 className="font-mono text-2xl md:text-3xl font-bold text-off-white mb-4">
              Get Notified
            </h2>
            <p className="text-muted mb-8">
              Be the first to know when registration opens. No spam, just signal.
            </p>

            {status === 'success' ? (
              <motion.div
                className="font-mono text-green"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-green">✓</span> subscription confirmed. you're on the list.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green font-mono text-sm">
                    &gt;
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    aria-label="Email address"
                    className="w-full bg-bg-dark border border-muted/30 rounded-md py-3 pl-8 pr-4 text-off-white font-mono text-sm placeholder:text-muted/50 focus:outline-none focus:border-orange focus:shadow-[0_0_12px_rgba(232,102,42,0.15)] transition-all duration-300"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-orange hover:bg-orange-light text-bg-dark font-mono font-bold py-3 px-6 rounded-md transition-colors disabled:opacity-50 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'loading' ? 'sending...' : 'notify me'}
                </motion.button>
              </form>
            )}

            {status === 'error' && (
              <motion.p
                className="font-mono text-sm text-red-400 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                something went wrong. try again?
              </motion.p>
            )}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
