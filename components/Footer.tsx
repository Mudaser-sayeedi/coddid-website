import Image from "next/image";
import Link from "next/link";

const SERVICES_LINKS = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Cloud & DevOps",
  "AI & Automation",
  "Custom Software",
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-brand-blue via-brand-green to-brand-yellow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/company logos/HeaderLogo.svg"
              alt="Coddid"
              width={140}
              height={40}
              className="h-8 w-auto mb-5"
            />
            <p className="text-sm text-muted leading-relaxed mb-6">
              Building digital excellence through innovative software solutions
              that transform businesses and delight users.
            </p>
            <div className="flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted hover:text-brand-blue hover:border-brand-blue/40 transition-colors duration-200"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-sm text-muted hover:text-brand-blue transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-brand-blue transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-5">
              Start a Project
            </h4>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Ready to build something amazing? Let&apos;s talk about your
              vision.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-light transition-colors shadow-md shadow-brand-blue/20"
            >
              Get in Touch →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {year} Coddid. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-sm text-muted hover:text-brand-blue transition-colors duration-200"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
