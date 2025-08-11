const CACHE_NAME = 'funko-tracker-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './dragonball.html',
  './manifest.json',
  './style.css', // se usi un css esterno
  // aggiungi altri file come immagini o js
];

// Installa il service worker e fai il caching dei file
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Rispondi con la cache, oppure vai in rete
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
