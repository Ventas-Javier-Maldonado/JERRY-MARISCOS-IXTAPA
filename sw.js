const CACHE_NAME = 'mariscos-jerry-v7';
const APP_FILES = ['./', './index.html', './css/styles.css', './js/app.js', './manifest.webmanifest', './images/jerry-icon-192.png', './images/jerry-icon-512.png', './images/menu-platillos.png', './images/menu-mariscos.png', './images/perfil-negocio.png', './images/platillos/platillo-01.jpg', './images/platillos/platillo-02.jpg', './images/platillos/platillo-03.jpg', './images/platillos/platillo-04.jpg', './images/platillos/platillo-05.jpg', './images/platillos/platillo-06.jpg', './images/platillos/platillo-07.jpg', './images/platillos/platillo-08.jpg', './images/platillos/platillo-09.jpg', './images/platillos/platillo-10.jpg', './images/platillos/platillo-11.jpg'];
self.addEventListener('install', (event) => { event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES))); self.skipWaiting(); });
self.addEventListener('activate', (event) => { event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith('mariscos-jerry-') && key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;
  if (request.mode === 'navigate') { event.respondWith(fetch(request).then((response) => { const copy = response.clone(); caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', copy)); return response; }).catch(() => caches.match('./index.html'))); return; }
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => { if (response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)); } return response; })));
});
