const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  // Change background color after scrolling down 50px
  if (window.scrollY > 50) { 
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});