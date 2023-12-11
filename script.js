document.addEventListener("DOMContentLoaded", () => {
  // Ejemplo de animación simple
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transition = "opacity 2s";
  });

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) {
        section.style.opacity = "1";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1, // Ajusta este valor según tus preferencias
    }
  );

  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => observer.observe(section));
});
