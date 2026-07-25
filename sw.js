// Service worker mínimo: solo lo necesario para que el navegador
// permita instalar la app. No cachea nada (la app siempre necesita
// internet para conectarse a la base de datos).
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
