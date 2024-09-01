/*import {bindScrollToLinks} from './gsap.js';
import {setupMobileMenu} from "./mobileMenu.js";

bindScrollToLinks();
setupMobileMenu();*/

document.querySelectorAll('[data-dropdown-btn]').forEach((btn) => {
  const listDropdown = btn.nextElementSibling;

  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    listDropdown.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!listDropdown.contains(event.target) && !btn.contains(event.target)) {
      listDropdown.classList.remove('active');
    }
  });
});

new Swiper('.swiper-benefits', {
  loop: true,
  slidesPerView: 1,
  speed: 1600,
  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  },
  keyboard: {
    enabled: true,
  },
});