const CACHE_NAME = 'if-hardware-selector-v7';
const ASSETS = [
  './',
  './index.html',
  './couplings-data.js',
  './xlsx.full.min.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './battery-dial.png',
  './battery-dial-1.png',
  './battery-dial-2.png',
  './battery-dial-3.png',
  './battery-dial-4.png',
  './battery-dial-5.png',
  './battery-dial-6.png',
  './battery-dial-7.png',
  './battery-dial-8.png',
  './battery-dial-9.png',
  './battery-dial-10.png',
  './battery-dial-11.png',
  './battery-dial-12.png',
  './ispl-15.png',
  './ispl-30.png',
  './ispl-60.png',
  './ispl-125.png',
  './ispl-250.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
