'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type FormData = {
  name: string
  email: string
  project: string
  message: string
}

const PROJECT_TYPES = [
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Development' },
  { value: 'design', label: 'UI/UX Design' },
  { value: 'cloud', label: 'Cloud & DevOps' },
  { value: 'ai', label: 'AI & Automation' },
  { value: 'custom', label: 'Custom Software' },
  { value: 'other', label: 'Other' },
]

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@coddid.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    label: 'Location',
    value: 'Remote-First, Worldwide',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 hours',
  },
]

function InputField({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = true,
}: {
  label: string
  type?: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-foreground placeholder:text-muted focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', project: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (key: keyof FormData) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
    setForm({ name: '', email: '', project: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="text-sm font-semibold text-brand-green uppercase tracking-[0.2em]">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-6 leading-tight">
              Let&apos;s Build<br />
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              Have a project in mind? We&apos;d love to hear about it. Send us a message and our team
              will get back to you within 24 hours.
            </p>

            <div className="space-y-5 mb-10">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-brand-blue shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Brand accent */}
            <div className="flex gap-2">
              {['#547ec0', '#32a84e', '#e94535', '#f2ba1a'].map((c) => (
                <div
                  key={c}
                  className="h-1.5 flex-1 rounded-full"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField
                  label="Your Name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={set('name')}
                />
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={set('email')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select
                  value={form.project}
                  onChange={(e) => set('project')(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-foreground focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200"
                >
                  <option value="">Select a service…</option>
                  {PROJECT_TYPES.map((pt) => (
                    <option key={pt.value} value={pt.value}>
                      {pt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => set('message')(e.target.value)}
                  placeholder="Describe your project, goals, timeline, and budget…"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-foreground placeholder:text-muted focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading || submitted}
                whileHover={{ scale: loading || submitted ? 1 : 1.02 }}
                whileTap={{ scale: loading || submitted ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  submitted
                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/25'
                    : 'bg-brand-blue text-white shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending…
                  </span>
                ) : submitted ? (
                  "Message Sent! We'll be in touch soon."
                ) : (
                  "Send Message \u2192"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
