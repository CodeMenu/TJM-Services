const menuToggle =
    document.getElementById("menu-toggle");

const sideMenu =
    document.getElementById("sidemenu");

const menuLinks =
    sideMenu.querySelectorAll("a");


/* OPEN / CLOSE MENU */

menuToggle.addEventListener("click", function () {

    const isOpen =
        sideMenu.classList.toggle("open");


    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );


    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );


    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});


/* CLOSE MENU WHEN LINK IS CLICKED */

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        sideMenu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.innerHTML =
            '<i class="fas fa-bars"></i>';

    });

});


/* RESET WHEN RETURNING TO DESKTOP */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        sideMenu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.innerHTML =
            '<i class="fas fa-bars"></i>';

    }

});   