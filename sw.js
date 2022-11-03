const staticAssets=[
    './',
    './index.html',
    './img/калькул.jpg',
    './images/icons/icon-128x128.png',
    './images/icons/icon-192x192.png',
    './css/bootstrap.min.css',
    './js/bootstrap.bundle.min.js',
    './app.js'
]
const staticCashName = 'site-static-v1'

// INSTALL
self.addEventListener('install', async evt => {
    const cache = await caches.open(staticCashName)
    await cache.addAll(staticAssets)
    console.log('INSTALL')
})

// ACTIVATE

self.addEventListener('activate', evt => {
    console.log('ACTIVATE')
})

// FETCH

self.addEventListener('fetch', evt => {
    console.log('FETCH')
    evt.respondWith(caches.match(evt.request).then(cachedResponse => {
        return cachedResponse || fetch(evt.request)
    }))
})