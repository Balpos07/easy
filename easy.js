function myFunction() {
    var x = document.getElementById("myBanner");
    if (x.className === "banner") {
        x.className += " responsive";
    } else {
        x.className = "banner";
    }
}