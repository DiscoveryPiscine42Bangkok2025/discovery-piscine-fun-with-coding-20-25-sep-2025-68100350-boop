document.addEventListener("DOMContentLoaded", () => {
  const selectScreen = document.getElementById("select-screen");
  const portfolioScreen = document.getElementById("portfolio");
  const profiles = document.querySelectorAll(".profile-choice");
  const backBtn = document.getElementById("back-btn");

  let activeProfile = null;

  // Show portfolio when profile is clicked
  profiles.forEach(choice => {
    choice.addEventListener("click", () => {
      activeProfile = choice.dataset.person;

      // Hide start
      selectScreen.classList.remove("active-screen");
      selectScreen.style.display = "none";

      // Show portfolio
      portfolioScreen.classList.add("active-screen");

      // Toggle profile pages
      document.querySelectorAll(".profile-page").forEach(p => p.style.display = "none");
      document.getElementById(activeProfile).style.display = "block";
      portfolioScreen.scrollTop = 0;
    });
  });

  // Back button
  backBtn.addEventListener("click", e => {
    e.preventDefault();
    portfolioScreen.classList.remove("active-screen");
    selectScreen.classList.add("active-screen");
    selectScreen.style.display = "flex";
  });

  // Smooth scroll
  document.querySelectorAll(".navbar a:not(#back-btn)").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(`#${activeProfile} ${targetId}`);
      if (target) {
        const offsetTop = target.offsetTop - 60;
        portfolioScreen.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });
});
