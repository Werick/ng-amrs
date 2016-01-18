/*
jshint -W003, -W026, -W117, -W098
*/
(function() {
  'use strict';

  // The SW will be shutdown when not in use to save memory,
  // be aware that any global state is likely to disappear

  if (typeof importScripts === 'function') {
    importScripts('serviceworker-cache-polyfill.js');
  }

  console.log('SW startup');

  // self.addEventListener('install', function(event) {
  //   console.log('SW installed');
  // });

  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('demo-cache').then(function(cache) {
        return cache.put('/', new Response('From the cache!'));
      })
    );
    console.log('SW installed');
  });

  self.addEventListener('activate', function(event) {
    console.log('SW activated');
  });

  // self.addEventListener('fetch', function(event) {
  //   console.log('Caught a fetch!');
  //   event.respondWith(new Response('Hello world!'));
  // });

  self.addEventListener('fetch', function(event) {
    console.log('Caught a fetch!');
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || new Response('Hello world!, Nothing in the cache for this request');
      })
    );
  });
})();
