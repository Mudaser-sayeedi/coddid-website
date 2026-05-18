'use client'

import { motion } from 'framer-motion'

const TECHNOLOGIES = [
  { name: 'React', color: '#61dafb', letter: 'R' },
  { name: 'Next.js', color: '#ffffff', letter: 'N' },
  { name: 'TypeScript', color: '#3178c6', letter: 'TS' },
  { name: 'Node.js', color: '#6cc24a', letter: 'No' },
  { name: 'Python', color: '#3776ab', letter: 'Py' },
  { name: 'PostgreSQL', color: '#336791', letter: 'PG' },
  { name: 'MongoDB', color: '#47a248', letter: 'M' },
  { name: 'AWS', color: '#ff9900', letter: 'AW' },
  { name: 'Docker', color: '#2496ed', letter: 'D' },
  { name: 'Figma', color: '#f24e1e', letter: 'F' },
  { name: 'GraphQL', color: '#e535ab', letter: 'GQ' },
  { name: 'Redis', color: '#dc382d', letter: 'Re' },
  { name: 'Kubernetes', color: '#326ce5', letter: 'K8' },
  { name: 'Tailwind', color: '#38bdf8', letter: 'TW' },
]

function TechBadge({ name, color, letter }: { name: string; color: string; letter: string }) {
  return (
    <div className="glass-card shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-xl hover:border-brand-blue/30 transition-colors duration-200">
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
        style={{ backgroundColor: color === '#ffffff' ? '#1a1a2e' : color }}
      >
        {letter}
      </div>
      <span className="text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function TechStack() {
  const doubled = [...TECHNOLOGIES, ...TECHNOLOGIES]

  return (
    <section id="tech" className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="text-sm font-semibold text-brand-green uppercase tracking-[0.2em]">
            Technology
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            We choose the best tools for every project to deliver fast, scalable, and
            maintainable solutions.
          </p>
        </motion.div>

        {/* Infinite scroll rows */}
        <div className="relative">
          {/* Row 1 — scroll left */}
          <div className="overflow-hidden mb-4">
            <motion.div
              className="flex gap-4"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              {doubled.map((tech, i) => (
                <TechBadge key={`r1-${i}`} {...tech} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 — scroll right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              {[...doubled].reverse().map((tech, i) => (
                <TechBadge key={`r2-${i}`} {...tech} />
              ))}
            </motion.div>
          </div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
