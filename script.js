// Atendimento demonstrativo: substitua pelo número oficial antes de publicar.
const WHATSAPP_NUMBER = "5511987654321";
const DEFAULT_MESSAGE = "Olá! Gostaria de conhecer a NEXT BUSINESS FUTURE e a plataforma NBF.";
document.querySelectorAll("[data-whatsapp]").forEach(link => {
  const plan = link.dataset.plan;
  const message = plan ? `Olá! Tenho interesse no plano ${plan} da NEXT BUSINESS FUTURE. Poderiam me passar mais informações?` : DEFAULT_MESSAGE;
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll(".solution-card,.purpose-card,.journey-line article,.competitor,.plan-card,.story-copy,.section-heading,.feature-band,.differential").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
