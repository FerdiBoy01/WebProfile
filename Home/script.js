const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Menambahkan efek typing menggunakan Typed.js
  var typed = new Typed("#typed", {
    strings: ["Ferdi Pratama Setia"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: false,
    showCursor: true,
    cursorChar: "|",
  });

  // Animasi dengan Anime.js untuk efek masuk gambar dan teks
  anime({
    targets: ".main-content",
    opacity: [0, 1],
    translateY: [50, 0],
    easing: "easeOutQuad",
    duration: 1500,
  });

  anime({
    targets: "#foto-profil",
    opacity: [0, 1],
    translateY: [20, 0],
    easing: "easeOutQuad",
    duration: 1000,
    delay: 1000,
  });
});
