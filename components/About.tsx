'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Animated number counter
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let startTime: number | null = null
    const duration = 1800

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(to * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, to])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const STATS = [
  { to: 50, suffix: '+', label: 'Projects Delivered', color: '#547ec0' },
  { to: 30, suffix: '+', label: 'Happy Clients', color: '#32a84e' },
  { to: 5, suffix: '+', label: 'Years Experience', color: '#f2ba1a' },
  { to: 15, suffix: '+', label: 'Team Members', color: '#e94535' },
]

const VALUES = [
  {
    icon: '⚡',
    title: 'Performance First',
    description: 'We obsess over speed. Every solution we build is optimised for peak performance from day one.',
  },
  {
    icon: '🔒',
    title: 'Security by Design',
    description: 'Security is never an afterthought. We bake it into the architecture from the very beginning.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    description: "We don't just execute briefs — we collaborate deeply to understand and solve your real challenges.",
  },
  {
    icon: '🚀',
    title: 'Ship Fast, Ship Right',
    description: 'Agile delivery with rigorous quality gates so you get working software quickly without cutting corners.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top — story + stats */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="text-sm font-semibold text-brand-yellow uppercase tracking-[0.2em]">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6 leading-tight">
              Passion for{' '}
              <span className="gradient-text">Code</span>,<br />
              Driven by{' '}
              <span className="gradient-text">Results</span>
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              Coddid is a team of passionate developers, designers, and strategists united by a
              single mission: building exceptional digital experiences. We believe great software
              has the power to transform businesses and improve lives.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              From ambitious startups to established enterprises, we partner with visionary
              companies to bring their boldest ideas to life — with clean code, beautiful design,
              and architecture that scales.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:shadow-lg hover:shadow-brand-blue/25 transition-shadow"
              >
                Work With Us
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:border-brand-blue/50 transition-colors"
              >
                Our Portfolio
              </motion.a>
            </div>
          </motion.div>

          {/* Right: stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-7 text-center"
              >
                <div
                  className="text-4xl sm:text-5xl font-extrabold mb-2 tabular-nums"
                  style={{ color: stat.color }}
                >
                  <Counter to={stat.to} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom — values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl sm:text-4xl font-bold">
            How We <span className="gradient-text">Work</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{v.icon}</div>
              <h4 className="font-bold mb-2">{v.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
