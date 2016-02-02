
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', function(event) {
      console.log(event.data);
    });

  navigator.serviceWorker.register('worker.js').then(function(amrs) {
      console.log('Yo! service worker working.', amrs.scope);
    }).catch(function(err) {
      alert('No Yo! service worker not working');
      console.log('No Yo! service worker not working', err);
    });
}
