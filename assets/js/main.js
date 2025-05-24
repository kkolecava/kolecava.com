document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".row.g-4");
  const tiles = Array.from(container.querySelectorAll(".project-tile"));

  // -- Shuffle tiles --
  tiles.sort(() => Math.random() - 0.5);
  tiles.forEach(tile => container.appendChild(tile));

  // -- Animate them in one-by-one --
  tiles.forEach((tile, i) => {
    setTimeout(() => {
      tile.classList.add("visible");
    }, i * 200); // 100ms stagger (0.2s between each)
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.querySelector(".logo-icon");

  if (logoContainer) {
    setInterval(() => {
      logoContainer.classList.add("active");
      setTimeout(() => {
        logoContainer.classList.remove("active");
      }, 2000); // stay flipped for 2 seconds
    }, 4000); // flip every 4 seconds total
  }
});