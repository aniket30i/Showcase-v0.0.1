const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  var elemC = document.querySelector(".elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  // var elem1 = document.querySelector(".elem");
  // elem1.addEventListener("mouseenter", function () {
  //   var image = elem1.getAttribute("data-image");
  //   fixed.style.backgroundImage = `url(${image})`;
  // });

  var elemsk = document.querySelectorAll(".elem");
  elemsk.forEach((e) => {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 200,
  });
}

function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}

function pageLoader() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 3800);
}

swiperAnimation();
page4Animation();
menuAnimation();
pageLoader();
