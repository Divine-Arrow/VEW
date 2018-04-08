/*
$('button').click(function () {
    $(this).toggleClass('clicked');
    $('button p').text(function (i, text) {
        return text === "Sent!" ? "Send" : "Sent!";
    });
});
*/



target = document.querySelector("button")
targetPara = document.querySelector("button p");

target.addEventListener("click" , function() {
    this.classList.add('clicked');
    targetPara.innerHTML = "Sent";
})
