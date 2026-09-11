/* =========================================
   TRINITYTECH PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   1. SELECT HTML ELEMENTS
========================================= */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");


/* =========================================
   2. MOBILE MENU
========================================= */

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================================
   3. CLOSE MENU WHEN A LINK IS CLICKED
========================================= */

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});