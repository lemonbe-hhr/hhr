const CACHE_NAME = 'ai-assistant-v1';
const urlsToCache = ['/', '/index.html', '/icon-192.png'];

// 安装时缓存必要文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 拦截请求，优先从缓存读取
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});