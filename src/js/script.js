// Scroll To Top
window.onscroll = function () {
  const navbar = document.querySelector('#navbar');
  const fixedNav = navbar.offsetTop;
  const toTop = document.querySelector('.to-top');

  if (window.pageYOffset > fixedNav) {
    navbar.classList.add('bg-light', 'shadow', 'fixed-top');
    toTop.classList.remove('d-none');
  } else {
    navbar.classList.remove('bg-light', 'shadow', 'fixed-top');
    toTop.classList.add('d-none');
  }
};
