/* hasvalue label-placeholder */

var forms = document.querySelectorAll(".form-control");

for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener("focusout", function () {

        if (this.value.length > 0) {
            this.classList.add("hasValue");
        } else {
            this.classList.remove("hasValue");
        }
    })
}


/* for alert */

var allInput = document.querySelectorAll("input, textarea");
var alert = document.querySelector(".required");
var greet = document.querySelector(".greet");
var send = document.querySelector(".animate_area button");

for (var i = 0; i < allInput.length; i++) {
    allInput[i].addEventListener("click", function () {
        alert.classList.add("show");
    })
}

send.addEventListener("click", function () {
    checker = inputValid();
    if (checker) {
        alert.classList.remove("show");
        greet.classList.add("show");
    }
})

/* for button animation */
target = document.querySelector("button")
targetPara = document.querySelector("button p");
checker = false;

var inputValid = function () {
    for (var i = 0; i < allInput.length; i++) {
        if (allInput[i].validity.valid) {} else {
            return false;
        }
    }
    return true;
};


target.addEventListener("click", function () {
    checker = inputValid();
    if (checker) {
        this.classList.toggle('clicked');
        targetPara.innerHTML = "Sent";
        localStorage.setItem("isSent", true);
    }

});


target.addEventListener("mouseover", function () {

    checker = inputValid();
    if (!checker) {
        alert.classList.add("show");
        alert.classList.add("anim");
    } else {
        alert.classList.remove("show");
        alert.classList.remove("anim");
    }
});

target.addEventListener("mouseout", function () {

    checker = inputValid();
    if (!checker) {
        alert.classList.add("show");
        alert.classList.remove("anim");
    } else {
        alert.classList.remove("show");
        alert.classList.remove("anim");
    }
});



/* send thanks */

var isEnquirySent = localStorage.getItem("isSent");
/*localStorage.removeItem("isSent");*/

window.addEventListener("load", function () {
    if (isEnquirySent) {
        greet.classList.add("show");
        console.log("enquiry is been sended");
    } else {
        console.log("enquiry is not sended");
        greet.classList.remove("show");
    }
});
