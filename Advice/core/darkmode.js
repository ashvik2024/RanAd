// core/darkmode.js

const toggle = document.getElementById("themeToggle");
const html = document.documentElement;

// On load — check localStorage
if (localStorage.getItem("theme") === "light") {
  html.classList.remove("dark");
  toggle.textContent = "🌙";
} else {
  html.classList.add("dark"); // Default dark
  toggle.textContent = "☀️";
}

// Toggle theme
toggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
