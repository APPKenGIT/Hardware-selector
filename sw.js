const CACHE_NAME = 'if-hardware-selector-v26';
const ASSETS = [
  './',
  './index.html',
  './couplings-data.js',
  './xlsx.full.min.js',
  './manifest.json',
  './favicon.ico',
  './favicon-32.png',
  './favicon-16.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './bearing-pillow-block.png',
  './impulse-connect.png',
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
  './ispl-250.png',
  './pulsar-m-60.png',
  './pulsar-m-125.png',
  './pulsar-m-250.png',
  './pulsar-m-500.png',
  './pulsar-bt.png',
  './pulsar-msp.png',
  './pulsar-plc.png',
  './pulsar-ol500.png',
  './pulsarlube-thumb.png',
  './Brochure_Interflon_Single_Point_Lubricators-NL.pdf'
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
  // Network-first voor index.html en navigatie zodat updates onmiddellijk doorkomen
  if (e.request.mode === 'navigate' || e.request.url.endsWith('index.html') || e.request.url.endsWith('/') || e.request.url.includes('couplings-data.js')) {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
