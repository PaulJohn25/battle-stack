function countOnScroll() {
  const counters = document.querySelectorAll(".about__item2-count");

  const observerOptions = {
    rootMargin: "0px 0px -30px 0px",
    threshold: 0.5,
  };

  function animationCount(element) {
    const target = parseInt(element.dataset.count);
    const increment = Math.ceil(target / 100);
    let current = 0;

    function update() {
      current += increment;
      if (current >= target) {
        current = target;
        element.textContent = current.toLocaleString();
        return;
      }
      element.textContent = current.toLocaleString();
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (!el.dataset.hasAnimated) {
          el.dataset.hasAnimated = "true";
          animationCount(el);
        }
      }
    });
  }, observerOptions);

  counters.forEach((counter) => observer.observe(counter));
}

export default countOnScroll;
