// Initialize WOW.js

new WOW().init();


// assets/js/custom.js
document.addEventListener("DOMContentLoaded", function () {
  // Isotope Filter Gallery
  const grid = document.querySelector(".project-grid");
  if (grid) {
    // Wait for all images to load before initializing Isotope
    imagesLoaded(grid, function () {
      const iso = new Isotope(grid, {
        itemSelector: ".project-item",
        layoutMode: "fitRows",
      });

      const filterButtons = document.querySelectorAll("#project-filters button");
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");

          const filterValue = button.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });
        });
      });
    });
  }
});

