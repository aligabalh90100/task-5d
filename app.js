const toggleButton = document.querySelector(".toggle-button");
const navListItems = document.querySelector("ul");
const navButton = document.querySelector("nav button");

toggleButton.addEventListener("click", () => {
  navButton.classList.toggle("open");
  navListItems.classList.toggle("open");
});
