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


/* for alertSection */

var allInput = document.querySelectorAll("input, textarea");
var alertSection = document.querySelector(".required");
var send = document.querySelector(".animate_area button");

for (var i = 0; i < allInput.length; i++) {
    allInput[i].addEventListener("click", function () {
        alertSection.classList.add("show");
    });

    /* updating  */
    allInput[i].addEventListener("change", function () {
        if (this.value.length > 0) {
            this.classList.add("hasValue");
        } else {
            this.classList.remove("hasValue");
        }
    })
}

send.addEventListener("click", function () {
    checker = inputValid();
    if (checker) {
        alertSection.classList.remove("show");
    };
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

var clearFields = function () {
    for (var i = 0; i < allInput.length; i++) {
        allInput[i].value = "";
    }

    target.classList.remove('clicked');
    for (var i = 0; i < forms.length; i++) {
        forms[i].classList.remove("hasValue");
    }
}

target.addEventListener("click", function () {
    checker = inputValid();
    if (checker) {
        this.classList.add('clicked');
        targetPara.innerHTML = "Sent";
        localStorage.removeItem("product");
        setTimeout(clearFields, 1000);
    }

});


target.addEventListener("mouseover", function () {

    checker = inputValid();
    if (!checker) {
        alertSection.classList.add("show");
        alertSection.classList.add("anim");
    } else {
        alertSection.classList.remove("show");
        alertSection.classList.remove("anim");
    }
});

target.addEventListener("mouseout", function () {

    checker = inputValid();
    if (!checker) {
        alertSection.classList.add("show");
        alertSection.classList.remove("anim");
    } else {
        alertSection.classList.remove("show");
        alertSection.classList.remove("anim");
    }
});



/* product data  */




window.addEventListener("load", function () {

    var name = localStorage.getItem("product");
    var productName = document.querySelectorAll(".productName p");
    var productNameInp = document.querySelector(".productNameInp");
    
    if (name) {
        productNameInp.value = name.toUpperCase();
    } else if (name == null) {
        productNameInp.parentNode.removeChild(productNameInp);
        console.log("this runs");
    }
    
    localStorage.removeItem("product");
});
