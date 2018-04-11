/* for button animation */
target = document.querySelector("button")
targetPara = document.querySelector("button p");

target.addEventListener("click" , function() {
    this.classList.add('clicked');
    targetPara.innerHTML = "Sent";
})


/* hasvalue label-placeholder */

var forms = document.querySelectorAll(".form-control");

for(var i=0; i<forms.length; i++) {
    forms[i].addEventListener("focusout", function() {
        
        if(this.value.length > 0) {
            this.classList.add("hasValue");
        }
        else {
            this.classList.remove("hasValue");
        }
    })
}


/* for alert */

var allInput = document.querySelectorAll("input, textarea");
var alert = document.querySelector(".required");
var greet = document.querySelector(".greet");
var send = document.querySelector(".animate_area button");

for(var i=0; i<allInput.length; i++) {
    allInput[i].addEventListener("click", function() {
        alert.classList.add("show");
    })
}

send.addEventListener("click", function() {
    alert.classList.remove("show");
    greet.classList.add("show");
})
