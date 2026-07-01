/* ============================================================
   Service Worker — bikin app bisa dibuka offline (PWA)
   ============================================================ */

const CACHE = "bbc-v3";

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

  const isContent = request.url.includes("/content/");

  if (isContent) {
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
