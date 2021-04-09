// variables to target needed classes
let icon = document.querySelector(".icon");
let close = document.querySelector(".close");
let navLinks = document.querySelector(".nav-links");
let navStyle = navLinks.style;
let iconStyle = icon.style;
let closeStyle = close.style;

// event listener for when hamburger icon is clicked
icon.addEventListener("click", function() {
    if (navStyle.display === "block") {
        navStyle.display = "none";
        iconStyle.display = "none";
        closeStyle.display = "block";
    }
    else {
        navStyle.display = "block";
        iconStyle.display = "none";
        closeStyle.display = "block";
        close.addEventListener("click", function() {
            if (navStyle.display === "block") {
                navStyle.display = "none";
                closeStyle.display = "none";
                iconStyle.display = "block";
            }
        });
    }
});