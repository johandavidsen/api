// Use a cacheName for cache versioning
let cacheName = 'v1:static'

self.addEventListener('install', (event) => {
  // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.allAll([
        './',
        './css/api.css'
      ])
      .then(() => {
        self.skipWaiting()
      })
    })
  )
})

// when the browser fetches a URL…
// self.addEventListener('fetch', (event) => {
    // … either respond with the cached object or go ahead and fetch the actual URL
    // event.respondWith(
    //     caches.match(event.request).then(function(response) {
    //         if (response) {
    //             // retrieve from cache
    //             return response
    //         }
    //         // fetch as normal
    //         return fetch(event.request)
    //     })
    // )
// })
