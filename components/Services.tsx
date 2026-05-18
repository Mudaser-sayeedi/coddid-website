"use client";

import { motion, Variants } from "framer-motion";

const SERVICES = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Modern, blazing-fast web applications built with React, Next.js, and TypeScript. From landing pages to complex SaaS platforms.",
    color: "#547ec0",
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and high performance.",
    color: "#32a84e",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "Pixel-perfect, user-centered interfaces designed with psychology and accessibility in mind to maximize engagement and conversions.",
    color: "#f2ba1a",
    tags: ["Figma", "Design Systems", "Prototyping", "Accessibility"],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure, CI/CD pipelines, containerisation, and DevOps practices to keep your systems resilient and fast.",
    color: "#e94535",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: "AI & Automation",
    description:
      "Intelligent solutions powered by machine learning to automate processes, extract insights, and unlock competitive advantages.",
    color: "#547ec0",
    tags: ["OpenAI", "LangChain", "Python", "ML Pipelines"],
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Custom Software",
    description:
      "Tailor-made enterprise software built precisely around your business workflows — APIs, integrations, and internal tools.",
    color: "#32a84e",
    tags: ["API Development", "Integrations", "Enterprise", "SaaS"],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      {/* Subtle section separator */}
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
          <span className="text-sm font-semibold text-brand-blue uppercase tracking-[0.2em]">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            End-to-end digital solutions designed to accelerate your business
            growth and deliver measurable results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.22 } }}
              className="group glass-card rounded-2xl p-7 flex flex-col cursor-default"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${service.color}18`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-brand-blue">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed flex-1 mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{
                      backgroundColor: `${service.color}14`,
                      color: service.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
