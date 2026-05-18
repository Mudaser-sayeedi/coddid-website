import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Coddid — Building Digital Excellence",
    short_name: "Coddid",
    description:
      "A tech company delivering cutting-edge digital solutions — web development, mobile apps, UI/UX design, and cloud services.",
    start_url: "/",
    display: "standalone",
    background_color: "#060d1a",
    theme_color: "#547ec0",
    orientation: "portrait-primary",
    categories: ["productivity", "business", "developer tools"],
    icons: [
      {
        src: "/company logos/collapseLogo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/desktop.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
        label: "Coddid Desktop Homepage",
      },
    ],
  };
}
