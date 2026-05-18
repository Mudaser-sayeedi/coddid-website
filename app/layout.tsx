import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Coddid — Building Digital Excellence",
    template: "%s | Coddid",
  },
  description:
    "Coddid is a tech company delivering cutting-edge digital solutions — web development, mobile apps, UI/UX design, cloud services, and AI-powered automation.",
  keywords: [
    "Coddid",
    "software development",
    "web development",
    "mobile apps",
    "UI/UX design",
    "cloud solutions",
    "tech company",
  ],
  authors: [{ name: "Coddid", url: "https://coddid.com" }],
  creator: "Coddid",
  metadataBase: new URL("https://coddid.com"),
  openGraph: {
    type: "website",
    url: "https://coddid.com",
    title: "Coddid — Building Digital Excellence",
    description:
      "Cutting-edge digital solutions for modern businesses. Web, mobile, design, cloud and AI.",
    siteName: "Coddid",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coddid — Building Digital Excellence",
    description: "Cutting-edge digital solutions for modern businesses.",
    creator: "@coddid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060d1a" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
