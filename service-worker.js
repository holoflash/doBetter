let coreAssets = [
    'index.html',
    'bundle.js',
    'icon.png',
    'icon192.png',
    'bigicon.png',
];

self.addEventListener('install', function (event) {
    event.waitUntil(caches.open('app').then(function (cache) {
        for (let asset of coreAssets) {
            cache.add(new Request(asset));
        }
        return cache;
    }));
});

self.addEventListener('fetch', function (event) {
    let request = event.request;
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

    if (request.headers.get('Accept').includes('text/html')) {
        event.respondWith(
            fetch(request).then(function (response) {
                let copy = response.clone();
                event.waitUntil(caches.open('app').then(function (cache) {
                    return cache.put(request, copy);
                }));
                return response;
            }).catch(function () {
                return caches.match(request).then(function (response) {
                    return response || caches.match('/offline.html');
                });
            })
        );
    }
    else if (request.headers.get('Accept').includes('text/css') || request.headers.get('Accept').includes('text/javascript')) {
        event.respondWith(
            caches.match(request).then(function (response) {
                return response || fetch(request);
            })
        );
        return;
    }
    else if (request.headers.get('Accept').includes('image')) {
        event.respondWith(
            caches.match(request).then(function (response) {
                return response || fetch(request).then(function (response) {
                    let copy = response.clone();
                    event.waitUntil(caches.open('app').then(function (cache) {
                        return cache.put(request, copy);
                    }));
                    return response;
                });
            })
        );
    }
});
