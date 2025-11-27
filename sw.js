self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("hinos-cache-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.webmanifest",
        "./sw.js",
        "./icons/icon-192.png",
        "./icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
