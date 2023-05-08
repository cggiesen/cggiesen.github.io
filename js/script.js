const navbarToggler = document.querySelector(".navbar-toggler");
const body = document.querySelector("body");

navbarToggler.addEventListener("click", function () {
  body.classList.toggle("sidebar-open");
});
