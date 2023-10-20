const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-items");
// const navLis = document.querySelectorAll(".nav-items li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// nav.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(event.target.tagName);
//   if (event.target.tagName === "LI") {
//     navLis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     event.target.classList.add("active");
//   }
// });

const newsletterButton = document.querySelectorAll(".newsletter");
const modal = document.querySelector(".modal");
newsletterButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    modal.classList.add("show");
  });
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  modal.classList.remove("show");
});

const accordions = document.querySelectorAll(".accordions .title");
accordions.forEach((accordion) => {
  accordion.addEventListener("click", (event) => {
    event.target.classList.toggle("active");
    event.target.nextElementSibling.classList.toggle("active");
  });
});

function updateCarousel() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: window.innerWidth < 960 ? 1 : 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });
}

updateCarousel();

window.onresize = () => {
  console.log(window.innerWidth);
  updateCarousel();
};
