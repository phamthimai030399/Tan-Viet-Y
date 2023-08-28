const swiperBanner = new Swiper(".slider-content", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".slider-content .swiper-button-next",
    prevEl: ".slider-content .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperIntroduce = new Swiper(".introduce-slider-content", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 5000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".introduce-slider-content + .swiper-button-next",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2.5,
    },
  },
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
  slidesPerView: 1,
  spaceBetween: 24,
  freeMode: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

const swiperProduct = new Swiper(".slider-product", {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".slider-product .swiper-button-next",
    prevEl: ".slider-product .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
  $(".video-item").click(function () {
    let videoSrc = $(this).data("src");
    $("#video").attr(
      "src",
      videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#myModal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", "");
  });
});

var box1 = document.querySelector('.product-img');
var box1Width = box1.offsetWidth;
var box1Height = box1.offsetHeight;

// Tính toán giá trị top cho .box2
var box2 = document.querySelector('.test');
box2.style.top = (box1Height + 30) + 'px';