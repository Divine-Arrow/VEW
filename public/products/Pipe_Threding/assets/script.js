/* local storage save */

var currentProductName = document.querySelector("#jumbotron h1").textContent;
var targetEnquiry = document.querySelectorAll(".enquiry a");

localStorage.removeItem("product");

for (var i = 0; i < targetEnquiry.length; i++) {
    targetEnquiry[i].addEventListener("click", function () {
        localStorage.setItem("product", currentProductName);
    })
}