// script.js

// SCROLL TOP

const scrollTopBtn = document.querySelector(".scroll-top");

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ACTIVE NAVBAR

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});


const wrapper = document.getElementById("projectWrapper");

document.getElementById("rightBtn").addEventListener("click", () => {
  wrapper.scrollBy({
    left: 350,
    behavior: "smooth"
  });
});

document.getElementById("leftBtn").addEventListener("click", () => {
  wrapper.scrollBy({
    left: -350,
    behavior: "smooth"
  });
});