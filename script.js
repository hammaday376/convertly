// Select toggle button
const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

// Initial mode: dark
let darkMode = true;

// Toggle function
toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    // Dark mode styles
    body.style.background = "linear-gradient(135deg, #6a0dad, #0077ff)";
    body.style.color = "#fff";
    toggleBtn.textContent = "🌙"; // Moon icon
  } else {
    // Light mode styles
    body.style.background = "#f5f5f5";
    body.style.color = "#000";
    toggleBtn.textContent = "☀️"; // Sun icon
  }

  // Optional: update all cards and buttons colors for light mode
  const cards = document.querySelectorAll(".feature-card");
  const buttons = document.querySelectorAll(".btn");

  cards.forEach(card => {
    card.style.background = darkMode
      ? "rgba(0, 0, 0, 0.3)"
      : "rgba(255, 255, 255, 0.8)";
    card.style.color = darkMode ? "#fff" : "#000";
  });

  buttons.forEach(btn => {
    btn.style.color = darkMode ? "#000" : "#fff";
  });
});
// Select all navbar links that point to sections
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor jump

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Calculate the position to scroll to (center of screen)
      const sectionTop = targetSection.offsetTop;
      const sectionHeight = targetSection.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollTo = sectionTop - (viewportHeight / 2) + (sectionHeight / 2);

      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }
  });
});
