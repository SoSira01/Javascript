let topHeader = document.querySelector('.top-header');

let lastScrollY = 0;

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    topHeader.classList.add('hide');
  }
  else {
    topHeader.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});


// let scrollinfo  = document.querySelector('.scroll-info');
// window.addEventListener('scroll', () => {
//  let infoText = 'X :'+window.scrollX;
//  infoText += 'Y :'+window.scrollY;
//  scrollinfo.innerHTML = infoText;
// });