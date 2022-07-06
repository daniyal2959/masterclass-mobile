document.querySelectorAll('[data-open]').forEach( item => {
   item.addEventListener('click', () => {
      item.parentElement.querySelector('[data-overlay]').classList.add('open');
   });
} );

document.querySelectorAll('[data-close]').forEach( item => {
   item.addEventListener('click', () => {
      item.closest('[data-overlay]').classList.remove('open');
   });
} );