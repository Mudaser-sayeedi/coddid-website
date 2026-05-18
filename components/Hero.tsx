"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Floating code symbols matching the brand logo
const SYMBOLS = [
  {
    text: "{ }",
    x: "4%",
    y: "22%",
    delay: 0,
    color: "#547ec0",
    size: "text-xl",
    mobileHide: false,
  },
  {
    text: "< >",
    x: "88%",
    y: "16%",
    delay: 0.6,
    color: "#32a84e",
    size: "text-xl",
    mobileHide: true,
  },
  {
    text: ";",
    x: "14%",
    y: "68%",
    delay: 1.1,
    color: "#e94535",
    size: "text-2xl",
    mobileHide: false,
  },
  {
    text: "▶",
    x: "82%",
    y: "62%",
    delay: 1.6,
    color: "#f2ba1a",
    size: "text-lg",
    mobileHide: true,
  },
  {
    text: "()",
    x: "52%",
    y: "82%",
    delay: 2.0,
    color: "#547ec0",
    size: "text-base",
    mobileHide: true,
  },
  {
    text: "//",
    x: "6%",
    y: "46%",
    delay: 0.9,
    color: "#32a84e",
    size: "text-sm",
    mobileHide: false,
  },
  {
    text: "[]",
    x: "88%",
    y: "40%",
    delay: 1.4,
    color: "#f2ba1a",
    size: "text-base",
    mobileHide: true,
  },
  {
    text: "=>",
    x: "68%",
    y: "28%",
    delay: 0.4,
    color: "#e94535",
    size: "text-sm",
    mobileHide: true,
  },
  {
    text: "fn()",
    x: "26%",
    y: "14%",
    delay: 1.8,
    color: "#547ec0",
    size: "text-xs",
    mobileHide: false,
  },
  {
    text: "**",
    x: "44%",
    y: "90%",
    delay: 0.2,
    color: "#32a84e",
    size: "text-sm",
    mobileHide: true,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-background hero-grid" />

      {/* Radial glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-150 opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 0%, #547ec0 0%, transparent 70%)",
        }}
      />
      {/* Radial glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-125 h-100 opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 0% 100%, #32a84e 0%, transparent 70%)",
        }}
      />

      {/* ── Floating symbols ── */}
      {SYMBOLS.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute font-mono font-bold pointer-events-none select-none ${s.size}${s.mobileHide ? " hidden sm:block" : ""}`}
          style={{ left: s.x, top: s.y, color: s.color }}
          animate={{ y: [0, -16, 0], opacity: [0.25, 0.65, 0.25] }}
          transition={{
            duration: 4 + i * 0.3,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.text}
        </motion.div>
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              Crafting Digital Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl"
          >
            Building <span className="gradient-text">Digital</span>
            <br />
            <span className="gradient-text">Excellence</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-10"
          >
            We craft beautiful, high-performance digital experiences that
            transform businesses and delight users — from blazing-fast web apps
            to native mobile solutions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-20"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(84,126,192,0.35)",
              }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-xl bg-brand-blue text-white font-semibold text-lg shadow-lg shadow-brand-blue/25 transition-all"
            >
              Start Your Project →
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 rounded-xl border border-border bg-surface/60 backdrop-blur-sm text-foreground font-semibold text-lg hover:border-brand-blue/50 transition-colors"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-x-8 gap-y-6 sm:gap-14"
          >
            {[
              { value: "50+", label: "Projects Delivered", color: "#547ec0" },
              { value: "30+", label: "Happy Clients", color: "#32a84e" },
              { value: "5+", label: "Years Experience", color: "#f2ba1a" },
              { value: "15+", label: "Tech Experts", color: "#e94535" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="text-xs text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-border/60 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-brand-blue"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
