// const swiperBanner = new Swiper(".slider-content", {
//   loop: true,
//   speed: 1000,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".slider-content .swiper-button-next",
//     prevEl: ".slider-content .swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

const swiperIntroduce = new Swiper(".introduce-slider-content", {
  loop: true,
  slidesPerView: 2.5,
  spaceBetween: 30,
  speed: 5000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".introduce-slider-content .swiper-button-next",
  },
});
$(document).ready(function () {
  $("#btn-search").click(function () {
    let element = $("#input-search");
    element.toggleClass("hide");
  });
  $("#btn-menu").click(function () {
    let element = $("#menu");
    element.addClass("show");
    $("body").css({
      overflow: "hidden",
    });
  });
  $("#btn-hide-menu").click(function () {
    let element = $("#menu");
    element.removeClass("show");
    $("body").css({
      overflow: "auto",
    });
  });
});
const swiperOutstandingProject = new Swiper(".outstanding-project-slider", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".outstanding-project-slider .swiper-button-next",
    prevEl: ".outstanding-project-slider .swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 24,
  freeMode: true,
});
