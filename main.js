const hamburgare = document.querySelector(".hamburgare");
const navMenu = document.querySelector(".nav-menu");

hamburgare.addEventListener("click", () => {
  hamburgare.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document
  .querySelectorAll(".nav-link")
  .forEach((n) => n.addEventListener("click", () => {
    hamburgare.classList.remove("active");
    navMenu.classList.remove("active");
  }));