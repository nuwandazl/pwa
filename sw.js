const staticAssets=[
    '.',
    'index.html',
    'img/калькул.jpg',
    'images/icons/icon-128x128.png',
    'images/icons/icon-192x192.png',
    'css/bootstrap.min.css',
    'js/bootstrap.bundle.min.js',
    'app.js'
]
const staticCashName = 'site-static-v3'

// INSTALL
self.addEventListener('install', async evt => {
    self.addEventListener('install',evt =>{
        evt.waitUntil(
            caches.open(staticCashName).then((cache) => {
                console.log('Кэширование ресурсов')
                cache.addAll(assets)
            })
        )
    })
})

// ACTIVATE

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCashName))
                .map(key => caches.delete(key))
        })
    )
})

// FETCH

self.addEventListener('fetch', evt => {
    console.log('FETCH')
    evt.respondWith(caches.match(evt.request).then(cachedResponse => {
        return cachedResponse || fetch(evt.request)
    }))
})