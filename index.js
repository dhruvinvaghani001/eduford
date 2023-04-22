const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", function () {
  navList.style.display = "inline-block";
  menu.style.display = "none";
  close.style.display = "inline-block";
});

close.addEventListener("click", function () {
  navList.style.display = "none";
  menu.style.display = "inline-block";
  close.style.display = "none";
});
