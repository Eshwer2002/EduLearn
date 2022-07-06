let navbar = document.querySelector(".navbar");

let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = function() {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active')
}
// Initialize Swiper
var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
