var navISO = document.querySelector("#iso");
var navTarget = document.querySelector("nav");
var logo = document.querySelector(".logo-brand img");
var navigation = document.querySelector(".navigation");
var nav = document.querySelector("nav .container");
var logo = document.querySelector(".logo-brand img");
var hoverNav = document.querySelectorAll(".navigation ul li");
var navText = document.querySelectorAll(".navigation ul li a");
var menu = document.querySelectorAll(".menu span");

window.addEventListener("scroll", function () {
    if (scrollY < 40) {
        navISO.classList.remove("IsoEffect");
        navTarget.classList.remove("navEffect");
        /* increasing logo padding */
        logo.style.padding = "10px 0px";
        /* nav margin remove */
        navigation.style.marginTop = "0px";
        nav.classList.remove("allWidth");
        logo.classList.remove("imgEffect");

        for (var i = 0; i < navText.length; i++) {
            navText[i].style.color = '#292929';
        }
        
        /* menu span color */
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.backgroundColor = "#4285f4";
        }
        
    } else if (scrollY > 40) {
        navISO.classList.add("IsoEffect");
        navTarget.classList.add("navEffect");
        /* decreasing logo padding */
        logo.style.padding = "6px 0px";
        /* nav margin add */
        navigation.style.marginTop = "-5px";
        nav.classList.add("allWidth");
        logo.classList.add("imgEffect");
        for (var i = 0; i < navText.length; i++) {
            navText[i].style.color = "#fff";
        }
        for (var i = 0; i < menu.length; i++) {
            menu[i].style.backgroundColor = "#fff";
        }
        /* nav hover color */
        for (var i = 0; i < hoverNav.length; i++) {
            hoverNav[i].addEventListener('mouseover', function() {
                this.style.backgroundColor = "#2984e7";
            });
            hoverNav[i].addEventListener('mouseout', function() {
                this.style.backgroundColor = "transparent";
            });
        }
    }
});




/* navbar menu buttob */

var clicked = true;
var menuButton = document.querySelector(".menu");
var navigationBar = document.querySelector(".navigation");
var menuSpan = document.querySelectorAll(".menu span");


var showNav = function() {
    if(clicked) {
        navigationBar.classList.toggle("showNav");
    }
    for(var i=0; i<menuSpan.length; i++) {
        menuSpan[i].classList.toggle("menuColor");
    }
    !clicked;
}


menuButton.addEventListener("click", showNav);





