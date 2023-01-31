const links = document.querySelectorAll(".like-this");


links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});