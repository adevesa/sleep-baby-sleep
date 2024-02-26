importScripts('serviceworker-cache-polyfill.js');

self.addEventListener('install', function (event) {
    event.waitUntil(caches.open('simple-sw-1').then((cache) => {
        return cache.addAll(['/background-music.mp3', './', 'style.css']);
    }));
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
