const toggleButton = document.querySelector(".toggle-button");
const navListItems = document.querySelector("ul");
const navButton = document.querySelector("nav button");

toggleButton.addEventListener("click", () => {
  navButton.classList.toggle("open");
  navListItems.classList.toggle("open");
});
const home = document.querySelector("#homelink");
const skills = document.querySelector("#skilllink");
const portfolio = document.querySelector("#portfoliolink");

let hash = "/";
home.classList.add("activeLink");
window.addEventListener("hashchange", () => {
  hash = window.location.hash;
  if (hash == "/" || hash == "#home") {
    home.classList.add("activeLink");
    skills.classList.remove("activeLink");
    portfolio.classList.remove("activeLink");
  } else if (hash == "#skills") {
    skills.classList.add("activeLink");
    home.classList.remove("activeLink");
    portfolio.classList.remove("activeLink");
  } else {
    skills.classList.remove("activeLink");
    home.classList.remove("activeLink");
    portfolio.classList.add("activeLink");
  }
});
