(function () {
  // Бургер

  if (window.innerWidth <= 768) {
    document.addEventListener("click", burgerInit);

    function burgerInit(e) {
      const burgerIcon = e.target.closest(".burger-icon");
      const burgerNavLink = e.target.closest(".nav__link");
      const overflow = document.querySelector(".overflow");

      function closeMenu() {
        document.body.classList.remove("body--opened-menu");
        overflow.classList.remove("active");
      }

      if (!burgerIcon && !burgerNavLink) return;
      if (document.documentElement.clientWidth > 900) return;

      if (!document.body.classList.contains("body--opened-menu")) {
        document.body.classList.add("body--opened-menu");
        overflow.classList.add("active");
      } else {
        closeMenu();
      }

      overflow.addEventListener("click", () => {
        closeMenu();
      });
    }
  }

  // слайдер истории

  const swiper = new Swiper(".stories__slider-inner", {
    direction: "horizontal",
    spaceBetween: 21,
    slidesPerView: "auto",
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".stories__slider-button--next",
      prevEl: ".stories__slider-button--prev",
    },
  });
})();
