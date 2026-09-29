const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll('#mainNav a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      const current = document.querySelector(`#mainNav a[href="#${entry.target.id}"]`);
      if (current) current.classList.add("active");
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });

sections.forEach(section => observer.observe(section));

document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const success = document.getElementById("formSuccess");
  success.style.display = "block";
  e.target.reset();
});
