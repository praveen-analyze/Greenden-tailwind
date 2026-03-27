
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")
var menubar = document.getElementById("menubar")

menubar.addEventListener("click", function () {
    sidenav.style.right = "0"
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})
var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function(event) {

    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count++) {

        var productname = productlist[count].querySelector("h2").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        } 
        else {
            productlist[count].style.display = "block"
        }

    }

})