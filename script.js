// Navigation
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Typing Effect
document.addEventListener("DOMContentLoaded", function () {
  let typed = new Typed("#typed", {
    strings: ["Ferdi Pratama"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    startDelay: 1000,
  });

  // Scroll to content
  document.querySelector(".scroll-indicator").addEventListener("click", () => {
    window.scrollBy({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  });

  // Animate tech icons on hover
  const techIcons = document.querySelectorAll(".tech-icons i");
  techIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      anime({
        targets: icon,
        translateY: [-10, 0],
        scale: [1, 1.2],
        duration: 300,
        easing: "easeOutQuad",
      });
    });

    icon.addEventListener("mouseleave", () => {
      anime({
        targets: icon,
        translateY: 0,
        scale: 1,
        duration: 300,
        easing: "easeOutQuad",
      });
    });
  });
});
