import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/modern-normalize.css";
import "../styles/style.css"; /* Global CSS */
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/courses.css";
import "../styles/components/about.css";
import "../styles/components/testimonial.css";
import "../styles/components/features.css";
import "../styles/components/faq.css";
import "../styles/components/cta.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/components/themeSwitcher.css";
import "../styles/components/sign-in.css";
import "../styles/util.css"; /* Utilities CSS */

import mobileNav from "./util/mobileNav";
import animateOnScroll from "./util/animateOnScroll";
import countOnScroll from "./util/countOnScroll";
import themeSwitcher from "./util/themeSwitcher";

(function () {
  mobileNav();
  animateOnScroll();
  countOnScroll();
  themeSwitcher();

  const dropdownContainer = document.querySelector(
    ".header__dropdown-container"
  );
  const headerDropdownBtn = document.querySelector(".header__dropdown-btn");
  const deadSpace = document.querySelector(".header__dropdown-deadSpace");
  const dropdownLink = document.querySelector(".header__dropdown");
  const dropdownBtnLinkIcon = document.querySelector(".header__dropdown-icon");

  if (
    headerDropdownBtn &&
    dropdownContainer &&
    dropdownLink &&
    deadSpace &&
    dropdownBtnLinkIcon
  ) {
    headerDropdownBtn.addEventListener("mouseenter", function () {
      deadSpace.style.display = "block";
      dropdownLink.style.display = "block";
      dropdownBtnLinkIcon.style.transform = "rotate(0deg)";
    });

    dropdownContainer.addEventListener("mouseleave", function () {
      deadSpace.style.display = "none";
      dropdownLink.style.display = "none";
      dropdownBtnLinkIcon.style.transform = "rotate(180deg)";
    });
  }

  const faqBtns = document.querySelectorAll(".faq__btn-question");

  faqBtns.forEach((faqBtn) => {
    faqBtn.addEventListener("click", () => {
      const answer = faqBtn.nextElementSibling;
      const icon = faqBtn.querySelector(".faq__btn-icon");
      const isOpen = faqBtn.getAttribute("aria-expanded") === "true";

      faqBtn.setAttribute("aria-expanded", !isOpen);
      answer.classList.toggle("show");
      answer.hidden = isOpen;

      icon.classList.toggle("lni-plus", isOpen);
      icon.classList.toggle("lni-minus", !isOpen);
    });
  });

  const date = new Date();
  const yearCopyright = document.querySelectorAll(".footer__copyright-year");
  yearCopyright.forEach(function getCurrentYear(elem) {
    elem.textContent = date.getFullYear();
  });

  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    ally: true,
    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
})();
