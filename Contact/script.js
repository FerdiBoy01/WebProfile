document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Menu (konsisten dengan halaman lain)
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Form Validation & Submission
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validasi sederhana
    if (!email || !message) {
      alert("Please fill all fields!");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email!");
      return;
    }

    // Simulasi pengiriman (ganti dengan AJAX/Fetch jika perlu)
    alert(`Message sent!\nEmail: ${email}\nMessage: ${message}`);
    contactForm.reset();
  });
});
