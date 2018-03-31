var navISO = document.querySelector("#iso");
var navTarget = document.querySelector("nav");
var logo = document.querySelector(".logo-brand img");
var navigation = document.querySelector(".navigation");

window.addEventListener("scroll", function() {
    if (scrollY < 15) {
        navISO.classList.remove("IsoEffect");
        navTarget.classList.remove("navEffect");
        /* increasing logo padding */
        logo.style.padding = "10px 0px";
        /* nav margin remove */
        navigation.style.marginTop = "0px";
    } else if (scrollY > 15) {
        navISO.classList.add("IsoEffect");
        navTarget.classList.add("navEffect");
        /* decreasing logo padding */
        logo.style.padding = "6px 0px";
        /* nav margin add */
        navigation.style.marginTop = "-4px";
    }
});


