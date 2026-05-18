"use client";

import { motion, Variants } from "framer-motion";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-stack e-commerce platform with real-time inventory management, AI-powered search, and a seamless multi-step checkout — processing 10k+ orders/month.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    accent: "#547ec0",
    gradientFrom: "#1a3560",
    gradientTo: "#0d1a2e",
    symbol: "{ }",
    symbolColor: "#547ec0",
  },
  {
    title: "Healthcare Management System",
    category: "Custom Software",
    description:
      "Enterprise-grade patient management platform with appointment scheduling, electronic health records, and real-time analytics for a network of clinics.",
    tech: ["React", "Node.js", "MongoDB", "HIPAA"],
    accent: "#32a84e",
    gradientFrom: "#0d3320",
    gradientTo: "#060d1a",
    symbol: "< >",
    symbolColor: "#32a84e",
  },
  {
    title: "FinTech Analytics Dashboard",
    category: "UI/UX + Engineering",
    description:
      "Real-time financial data visualisation with interactive D3 charts, portfolio tracking, risk analytics, and an AI-powered insight engine.",
    tech: ["React", "D3.js", "Python", "Redis"],
    accent: "#f2ba1a",
    gradientFrom: "#3d2d00",
    gradientTo: "#1a1000",
    symbol: "=>",
    symbolColor: "#f2ba1a",
  },
  {
    title: "On-Demand Delivery App",
    category: "Mobile Development",
    description:
      "Cross-platform mobile app with live order tracking, restaurant discovery, loyalty rewards, and seamless payment integration — 50k+ active users.",
    tech: ["React Native", "GraphQL", "Node.js", "Maps API"],
    accent: "#e94535",
    gradientFrom: "#3d0d08",
    gradientTo: "#1a0604",
    symbol: ";",
    symbolColor: "#e94535",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="text-sm font-semibold text-brand-red uppercase tracking-[0.2em]">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            A selection of our finest work, showcasing the quality and
            creativity we bring to every engagement.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.22 } }}
              className="group glass-card rounded-2xl overflow-hidden"
            >
              {/* Visual header */}
              <div
                className="h-52 relative overflow-hidden flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
                }}
              >
                {/* Big decorative symbol */}
                <motion.div
                  className="absolute font-mono font-black select-none opacity-10"
                  style={{ fontSize: "9rem", color: project.accent }}
                  animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {project.symbol}
                </motion.div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                    style={{
                      backgroundColor: `${project.accent}22`,
                      color: project.accent,
                      border: `1px solid ${project.accent}40`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-brand-blue">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-surface-2 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-blue/40 text-brand-blue font-semibold text-lg hover:bg-brand-blue/8 transition-colors"
          >
            Start Your Project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
