const menuToggle = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", function () {
  console.log("hello world");
  sideBar.classList.add("show-sidebar");
});
