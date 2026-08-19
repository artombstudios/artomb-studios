/* =========================================================
   ARTOMB STUDIOS
   Main JavaScript
   ========================================================= */


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("pageLoader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loaded");

        }, 700);

    }

});



/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.getElementById("siteHeader");


function handleHeaderScroll() {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    handleHeaderScroll,
    { passive: true }
);


handleHeaderScroll();



/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


function toggleMobileMenu() {

    if (!menuButton || !mobileMenu) return;

    menuButton.classList.toggle("active");

    mobileMenu.classList.toggle("open");

    document.body.classList.toggle("menu-open");

}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        toggleMobileMenu
    );

}



/* =========================
   CLOSE MOBILE MENU
========================= */

if (mobileMenu) {

    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");

            mobileMenu.classList.remove("open");

            document.body.classList.remove("menu-open");

        });

    });

}



/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            if (
                mobileMenu &&
                mobileMenu.classList.contains("open")
            ) {

                menuButton.classList.remove("active");

                mobileMenu.classList.remove("open");

                document.body.classList.remove("menu-open");

            }

        }

    }
);



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section-padding > *, " +
        ".art-card, " +
        ".service-item, " +
        ".process-card, " +
        ".gallery-item, " +
        ".contact-content"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal",
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add(
            "reveal",
            "visible"
        );

    });

}



/* =========================
   SMOOTH ANCHOR NAVIGATION
========================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    headerHeight
                    -
                    10;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });



/* =========================
   CURRENT YEAR
========================= */

const yearElements =
    document.querySelectorAll(
        ".current-year"
    );


yearElements.forEach((element) => {

    element.textContent =
        new Date().getFullYear();

});



/* =========================
   PREVENT BROKEN IMAGE SPACE
========================= */

document
    .querySelectorAll("img")
    .forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.style.display = "none";

            }
        );

    });



/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "Artomb Studios — Website loaded successfully."
);
