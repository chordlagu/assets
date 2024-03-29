var cacheName = 'hello-pwa'; 
var filesToCache = [
'/',    
'https://content.chordlagu.id/transpose.js',    
'https://content.chordlagu.id/tooltip.js',  
'https://content.chordlagu.id/main.js'  ];  
self.addEventListener('install', function(e) { 
e.waitUntil(
caches.open(cacheName).then(function(cache) { 
return cache.addAll(filesToCache);   
})    
);  
}); 
/* Serve cached content when offline */ 
self.addEventListener('fetch', function(e) {  
e.respondWith(      caches.match(e.request).then(function(response) {  
return response || fetch(e.request);
})   
);  
});
