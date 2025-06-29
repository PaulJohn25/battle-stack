function animateOnScroll() {
  const observeOptions = {
    rootMargin: "0px 0px -30px 0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((elem) => {
    observer.observe(elem);
  }, observeOptions);
}

export default animateOnScroll;
