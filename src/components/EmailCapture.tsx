import { useState, type FormEvent } from 'react'

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
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-surface rounded-md border-t-2 border-amber p-8 md:p-12">
          {/* Terminal prompt */}
          <div className="font-mono text-muted text-sm mb-6">
            <span className="text-teal">$</span> subscribe --notify-me
          </div>

          <h2 className="font-display text-3xl md:text-4xl text-amber mb-4">
            Get Notified
          </h2>
          <p className="text-muted text-sm mb-8">
            Be the first to know when registration opens. No spam, just signal.
          </p>

          {status === 'success' ? (
            <div className="font-mono text-green text-sm">
              <span className="text-green">&#10003;</span> subscription confirmed. you're on the list.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-teal font-mono text-sm">
                  &gt;
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  aria-label="Email address"
                  className="w-full bg-bg-dark border border-muted/30 rounded-md py-3 pl-8 pr-4 text-off-white font-mono text-sm placeholder:text-muted/50 focus:outline-none focus:border-amber transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-amber hover:bg-amber-light text-bg-dark font-mono font-bold py-3 px-6 rounded-md transition-colors disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? 'sending...' : 'notify me'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="font-mono text-sm text-red-400 mt-3">
              something went wrong. try again?
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
