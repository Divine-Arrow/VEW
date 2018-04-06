var navISO = document.querySelector("#iso");
var navTarget = document.querySelector("nav");
var logo = document.querySelector(".logo-brand img");
var navigation = document.querySelector(".navigation");
var nav = document.querySelector("nav .container");
var logo = document.querySelector(".logo-brand img");
var hoverNav = document.querySelectorAll(".navigation ul li");
var navText = document.querySelectorAll(".navigation ul li a");

/* navbar menu buttob */

var clicked = false;
var menuButton = document.querySelector(".menu");
var navigationBar = document.querySelector(".navigation");
var navigationBackground = document.querySelector(".navigation_background");
var menuSpan = document.querySelectorAll(".menu span");

window.addEventListener("scroll", function () {
    if (scrollY < 40 && !clicked) {
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
        for (var i = 0; i < menuSpan.length; i++) {
            menuSpan[i].style.backgroundColor = "#4285f4";
        }

        /* menu fix increasing top px to default*/

        menuSpan[0].parentNode.style.top = '17px';

    } else if (scrollY > 40 && !clicked) {
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
        for (var i = 0; i < menuSpan.length; i++) {
            menuSpan[i].style.backgroundColor = "#fff";
        }
        /* nav hover color */
        for (var i = 0; i < hoverNav.length; i++) {
            hoverNav[i].addEventListener('mouseover', function () {
                this.style.backgroundColor = "#2984e7";
            });
            hoverNav[i].addEventListener('mouseout', function () {
                this.style.backgroundColor = "transparent";
            });
        }

        /* menu fix decreasing top px */

        menuSpan[0].parentNode.style.top = '13px';
    }
});

/************ for menu side bar ***********/
var showNav = function () {
    clicked = !clicked;
    if (clicked) {
        window.addEventListener("scroll", stopScroll);
        /* for show */
        navigationBar.classList.toggle("showNav");
        navigationBackground.classList.toggle("navBackActive");
        /* top restore menu cross to hamburger */
        menuButton.classList.toggle("activeMenu");
        /* menu color toggle white and normal */
        for (var i = 0; i < menuSpan.length; i++) {
            menuSpan[i].classList.toggle("menuColor");
        }
    } else {
        window.removeEventListener("scroll", stopScroll);
        /* for hide */
        navigationBar.classList.toggle("showNav");
        navigationBackground.classList.toggle("navBackActive");
        /* top restore menu cross to hamburger */
        menuButton.classList.toggle("activeMenu");
        /* menu color toggle white and normal */
        for (var i = 0; i < menuSpan.length; i++) {
            menuSpan[i].classList.toggle("menuColor");
        }
    }

    /* saving scroll position  */
    xAxis = scrollX;
    yAxis = scrollY;
}

var stopScroll = function () {
    window.scroll(xAxis, yAxis);
}

/* loader animation removal */
var loader = function () {
    document.querySelector(".loader_container").style.top = "-100vh";
    document.querySelector(".loader_container").style.opacity = "0.5";
    clicked = !clicked;
    window.removeEventListener("scroll", stopScroll);
}

/* loader listener */
window.addEventListener("load", function () {
    xAxis = 0;
    yAxis = 0;
    clicked = !clicked;
    window.addEventListener("scroll", stopScroll);
    /*setTimeout(loader, 2500);*/
    setTimeout(loader,0);
});

/* menu listener */
menuButton.addEventListener("click", showNav);

/*
for (var i = 0; i < navText; i++) {
    navText.addEventListener("click", function () {
        console.log("clicked");
    });
}
*/
