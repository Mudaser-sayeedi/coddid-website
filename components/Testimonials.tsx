'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures Inc.',
    initials: 'SJ',
    color: '#547ec0',
    quote:
      "Coddid transformed our vision into a stunning digital product. Their attention to detail, technical excellence, and genuine dedication to our success exceeded every expectation. I'd work with them again without hesitation.",
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'CTO, HealthCore Systems',
    initials: 'MW',
    color: '#32a84e',
    quote:
      "Working with Coddid was a game-changer. They delivered our complex healthcare platform on time and on budget, with exceptional code quality and thoughtful architecture that has scaled perfectly.",
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Founder, ShopEase',
    initials: 'PP',
    color: '#f2ba1a',
    quote:
      'The e-commerce platform Coddid built for us has been outstanding. Our conversion rate jumped 40% in the first quarter after launch. Their team is responsive, talented, and a joy to work with.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Product Director, FinFlow',
    initials: 'DC',
    color: '#e94535',
    quote:
      'Exceptional team, exceptional results. The real-time dashboard handles complex financial data beautifully. Our users consistently comment on how intuitive and fast the interface is.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length)

  const t = TESTIMONIALS[current]

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${t.color} 0%, transparent 70%)`,
          transition: 'background 0.5s ease',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="text-sm font-semibold text-brand-blue uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="glass-card rounded-2xl p-8 sm:p-12"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-brand-yellow"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed text-center mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted hover:text-brand-blue hover:border-brand-blue/50 transition-colors"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-brand-blue w-6' : 'bg-border w-2'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted hover:text-brand-blue hover:border-brand-blue/50 transition-colors"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
