/* ===========================
   PORTFOLIO SLIDER
=========================== */

const track = document.querySelector(".portfolio-track");
const prevBtn = document.querySelector(".slider-btn-prev");
const nextBtn = document.querySelector(".slider-btn-next");

const scrollAmount = 452;

nextBtn.addEventListener("click", () => {
    track.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

prevBtn.addEventListener("click", () => {
    track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});


/* ===========================
   MOBILE MENU
=========================== */

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");

if (openMenu && closeMenu && navMenu) {

    openMenu.addEventListener("click", () => {
        navMenu.classList.add("visible");
        openMenu.classList.add("hide");
    });

    closeMenu.addEventListener("click", () => {
        navMenu.classList.remove("visible");
        openMenu.classList.remove("hide");
    });

}
/* ===========================
   HEADER ON SCROLL
=========================== */

// Aquí el efecto del header al hacer scroll


/* ===========================
   ANIMATIONS
=========================== */

// Aquí futuras animaciones