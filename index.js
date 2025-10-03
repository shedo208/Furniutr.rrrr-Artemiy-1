const burger = document.querySelector(".mobile-menu-toggle");
const nav = document.querySelector(".nav-links");


burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("open");
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("open");
  });
});


burger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    nav.classList.toggle("active");
    burger.classList.toggle("open");
  }
});