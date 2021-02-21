var cacheName = "petStore-v1";
var cacheFiles = [
    "index.html",
    "products.js",
    "rainbow.png",
    "petstore.webmanifest"
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});