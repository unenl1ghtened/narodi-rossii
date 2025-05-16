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

  // хедер
  const useHeader = () => {
    const header = document.querySelector(".header");
    if (!header) return;

    const heroSection = document.querySelector(".hero");
    const headerHeight = header.offsetHeight;
    let lastScrollTop = 0;

    // Задем отступ от .hero т.к. .header выпадает изи потока
    if (heroSection) {
      heroSection.style.marginTop = `${headerHeight}px`;
    } else {
      const nextSection = header.nextElementSibling;

      if (nextSection) {
        nextSection.style.marginTop = `${headerHeight}px`;
      }
    }
  };
  useHeader();

  // слайдер истории

  document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".stories__slider-wrapper");
    const slides = document.querySelectorAll(".stories__slide");

    const swiper = new Swiper(".stories__slider-inner", {
      direction: "horizontal",
      spaceBetween: 21,
      slidesPerView: "auto",
      loop: true,

      navigation: {
        nextEl: ".stories__slider-button--next",
        prevEl: ".stories__slider-button--prev",
      },
      on: {
        init: checkSliderState,
        resize: checkSliderState,
      },
    });

    function checkSliderState() {
      // Ширина видимой части
      const visibleWidth = document.querySelector(
        ".stories__slider-inner"
      ).offsetWidth;
      // Общая ширина всех слайдов
      const totalSlidesWidth = Array.from(slides).reduce((sum, slide) => {
        return sum + slide.offsetWidth + 21; // +21 — пробел между слайдами
      }, 0);

      const isScrollable = totalSlidesWidth > visibleWidth + 20;

      if (isScrollable) {
        wrapper.style.justifyContent = "";
      } else {
        wrapper.style.display = "flex";
        wrapper.style.justifyContent = "center";
      }
    }
  });
})();
