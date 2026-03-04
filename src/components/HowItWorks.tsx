import { motion } from 'framer-motion'
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal'

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
    <section className="py-24 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <ScrollReveal>
          <div className="font-mono text-muted text-sm mb-2">
            <span className="text-green">$</span> cat how-it-works.md
          </div>
          <div className="border-t border-surface mb-10" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-mono text-2xl md:text-3xl font-bold text-off-white mb-12">
            How It Works
          </h2>
        </ScrollReveal>

        <StaggerContainer stagger={0.15} className="space-y-10">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <motion.div
                className="flex gap-6 group cursor-default"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {/* Step number */}
                <div className="shrink-0 font-mono text-orange text-3xl font-bold opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {step.number}
                </div>

                <div>
                  <h3 className="font-mono text-lg font-bold text-off-white mb-2">
                    {step.icon} {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="border-t border-surface mt-12" />
        </ScrollReveal>
      </div>
    </section>
  )
}
