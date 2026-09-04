// Money Map keeps this service worker for PWA installation and future push notifications.
// Static files are intentionally not cached here: GitHub Pages always serves the latest app build.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
