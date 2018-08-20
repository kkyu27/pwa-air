var CACHE_NAME = 'pwa-cache-v1';
var urlsToCache = [
  '/',
  // '/styles/main.css',
  '/src/main.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = ['pwa-cache-v1'];
  event.waitUntil(
    caches.keys().then(function(CACHE_NAME) {
      return Promise.all(
        CACHE_NAME.map(function(CACHE_NAME) {
          if (cacheWhitelist.indexOf(CACHE_NAME) === -1) {
            return caches.delete(CACHE_NAME);
          }
        })
      );
    })
  );
});