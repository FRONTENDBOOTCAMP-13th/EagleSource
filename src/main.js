import "./style.css"
import "./js/main-header.js"
import "./js/sub-header.js"
import "./js/footer.js"

// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-mobile .bi-list').closest('div');
  const menuLists = document.querySelector('.menu-lists');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('-left-[100%]');
    mobileMenu.classList.add('left-0');
  });
  
  menuLists.addEventListener('click', function() {
    mobileMenu.classList.remove('left-0');
    mobileMenu.classList.add('-left-[100%]');
  });
});

// Event - review
var swiper = new Swiper("#event-review", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000, 
    disableOnInteraction: false, 
  },
  speed: 3000
});
