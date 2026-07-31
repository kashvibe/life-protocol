const CACHE_NAME = 'protocol-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './daily_routine_dashboard.html',
  './grocery_planner.html',
  './meal_prep_dashboard.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
