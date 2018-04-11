/* local storage save */

var currentProductName = document.querySelector("#jumbotron h1").textContent;

localStorage.setItem("product", currentProductName);