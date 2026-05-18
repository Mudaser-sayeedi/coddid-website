const CACHE_NAME = "coddid-v1";
const STATIC_ASSETS = [
  "/",
  "/company logos/HeaderLogo.svg",
  "/company logos/collapseLogo.svg",
];

// ── Install ────────────────────────────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)),
  );
  self.skipWaiting();
});

// ── Activate ───────────────────────────────────────────────
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});

// ── Fetch (Network-first for HTML, Cache-first for assets) ─
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    // Network-first for navigation
    event.respondWith(fetch(request).catch(() => caches.match("/")));
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request)),
  );
});

// ── Push Notifications ────────────────────────────────────
self.addEventListener("push", (event) => {
  if (!event.data) return;
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: "/company logos/collapseLogo.svg",
    badge: "/company logos/collapseLogo.svg",
    vibrate: [100, 50, 100],
    data: { dateOfArrival: Date.now(), primaryKey: "1" },
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("https://coddid.com"));
});
