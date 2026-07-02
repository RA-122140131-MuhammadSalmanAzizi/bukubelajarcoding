/* ============================================================
   Service Worker — bikin app bisa dibuka offline (PWA)
   ============================================================ */

const CACHE = "bbc-v18";

// Berkas inti yang dipracache saat install
const CORE = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./js/markdown.js",
  "./js/content-index.js",
  "./manifest.json",
  "./aset/logo.png",
  "./aset/icon-192.png",
  "./aset/icon-512.png",
  "./aset/apple-touch-icon.png",
  "./aset/logos/python.svg",
  "./aset/logos/javascript.svg",
  "./aset/logos/cpp.svg",
  "./aset/logos/php.svg",
  "./aset/logos/go.svg",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Strategi: network-first untuk materi (biar update kebaca),
// fallback ke cache saat offline. Berkas lain: cache-first.
self.addEventListener("fetch", (e) => {
  const { request } = e;
  if (request.method !== "GET") return;
  if (new URL(request.url).origin !== self.location.origin) return; // biarkan browser tangani font eksternal

  // Materi & manifest pakai network-first agar selalu terbaru
  const netFirst = request.url.includes("/content/") || request.url.includes("manifest.json");

  if (netFirst) {
    e.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() => caches.match(request))
    );
  } else {
    e.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(request, copy));
        return res;
      }))
    );
  }
});
