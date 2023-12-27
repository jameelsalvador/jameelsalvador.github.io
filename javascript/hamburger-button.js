document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("check");
  var menu = document.getElementById("menu");

  hamburger.addEventListener("change", function () {
    // Toggle the 'active' class on the menu when the side button is clicked
    menu.classList.toggle("active", hamburger.checked);
  });
});
