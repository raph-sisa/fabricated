const steps = [
  {
    number: '01',
    title: 'Choose Your Build',
    description:
      'Pick a project that excites you — from LED circuits to sensor arrays to custom controllers. No experience needed.',
    icon: '📐',
  },
  {
    number: '02',
    title: 'Build With AI',
    description:
      'Claude Code guides you through every step: wiring, coding, and debugging. Ask questions in plain English and get real answers.',
    icon: '🤖',
  },
  {
    number: '03',
    title: 'Take It Home',
    description:
      'Walk away with a working device you built yourself — and the confidence to build whatever comes next.',
    icon: '🏠',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="font-mono text-muted text-sm mb-2">
          <span className="text-green">$</span> cat how-it-works.md
        </div>
        <div className="border-t border-surface mb-10" />

        <h2 className="font-mono text-2xl md:text-3xl font-bold text-off-white mb-12">
          How It Works
        </h2>

        <div className="space-y-10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              {/* Step number */}
              <div className="shrink-0 font-mono text-orange text-3xl font-bold opacity-60">
                {step.number}
              </div>

              <div>
                <h3 className="font-mono text-lg font-bold text-off-white mb-2">
                  {step.icon} {step.title}
                </h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-surface mt-12" />
      </div>
    </section>
  )
}
