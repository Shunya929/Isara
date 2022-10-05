'use strict';

{
  const pagetop = document.getElementById('page-top');
  const requestdocument = document.getElementById('request-document');
  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  const dts = document.querySelectorAll('dt');

  function onScrollCallback(entries){
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        pagetop.classList.add('scrolled');
      } else {
        pagetop.classList.remove('scrolled');
      }
    });
  }

  onScrollObserver.observe(document.getElementById('target'));

  pagetop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');
      dt.parentNode.parentNode.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if(dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}
