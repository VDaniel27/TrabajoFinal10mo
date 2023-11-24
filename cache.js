const CACHE_NAME = 'mi-cache-v1';
const urlsToCache = [
  'Imagenes/hola.JPG',
  '/Imagenes/cachecodigo.JPG',
  'Imagenes/aprogresiva.JPG',
  'Imagenes/aplicacionesmoviles.JPG',
  'Imagenes/holapage.JPG',
  'Imagenes/imagenprueba.JPG',
  'Imagenes/manifest.JPG',
  'Imagenes/manifestheader.JPG',
  'Imagenes/manifestjson.JPG',
  'Imagenes/multiplataforma.JPG',
  'Imagenes/prueba1.JPG',
  'Imagenes/soa.JPG',
  'Imagenes/sw.JPG',
  'Imagenes/swcache.JPG',
  'Imagenes/www.JPG',
  'Imagenes/xamp.JPG',
 ];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("se agrego al cache");
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si la solicitud coincide con un recurso en caché, lo devuelve desde la caché
        return response || fetch(event.request);
      })
  );
});