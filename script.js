const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
    if (menuLeft < 0) {
        menu.classList.add("show");
    }
});
closeNav.addEventListener("click", () => {
    if (menuLeft < 0) {
        menu.classList.remove("show");
    }
});

const slider1 = document.getElementById("glide1");

if (slider1)
    new Glide(slider1, {
        type: "carousel",
        startAt: 0,
        perView: 5,
        hoverpause: false,
        autoplay: 2000,
        animationDuration: 800,
        animationTimingFunc: "linear",
        breakpoints: {
            1200: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
        },
    }).mount();