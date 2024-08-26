let currentSlide = 0;
let slides = document.querySelectorAll(".carousel-item");
let indicators = document.querySelectorAll(".indicator");

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

setInterval(nextSlide, 3000);

updateCarousel();

var $j = jQuery.noConflict();
$j(".hero-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});

$j(".company-slider").slick({
  dots: false,
  infinite: true,
  speed: 900,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$j(".company-slider-reverse").slick({
  dots: false,
  infinite: true,
  speed: 900,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  rtl: true,
});

$j(".testimonial-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  if (drawer.style.left === "0px") {
    drawer.style.left = "-250px";
  } else {
    drawer.style.left = "0px";
  }
}
