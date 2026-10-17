
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const currentYear = document.querySelector("#currentYear");

// Menu navigasi mobile
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu" : "Buka menu"
  );
});

// Tutup menu setelah tautan navigasi dipilih
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  });
});

// Tahun footer otomatis
currentYear.textContent = new Date().getFullYear();
