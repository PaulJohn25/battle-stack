function mobileNav() {
  const menuBtn = document.getElementById("header__btn-menu");
  const mobileNav = document.getElementById("mobile-nav");
  const header = document.querySelector(".header");
  const headerContainer = document.querySelector(".header__container");
  const mobileNavLinks = document.querySelectorAll(".mobile__nav-link");

  menuBtn.addEventListener("click", function () {
    const isOpen = mobileNav.classList.toggle("show");
    menuBtn.classList.toggle("open");
    header.classList.toggle("add-background");
    headerContainer.classList.toggle("remove-shadow");
    menuBtn.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  });

  mobileNavLinks.forEach(function closeModileNav(mobileNavLink) {
    mobileNavLink.addEventListener("click", function () {
      mobileNav.classList.remove("show");
      menuBtn.classList.remove("open");
      document.body.style.overflow = "auto";
    });
  });
}

export default mobileNav;
