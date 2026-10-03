
const CACHE_NAME = 'kice-55-v1';
const urlsToCache = [
  './kice_55_core_compressed.html',
  './manifest.json',
  './images/go1.png',
  './images/go2.jpg',
  './images/go3.png',
  './images/go4.jpg',
  './images/go5.jpg',
  './images/cheer3.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
