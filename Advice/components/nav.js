// Dynamically load navbar
fetch("/components/nav.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(() => menu.classList.add("opacity-100"), 10);
  } else {
    menu.classList.remove("opacity-100");
    setTimeout(() => menu.classList.add("hidden"), 300);
  }
}

