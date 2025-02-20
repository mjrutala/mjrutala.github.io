// Get the root
var root = document.documentElement;
const globalMargin_def = root.style.getPropertyPriority("--global-margin")
var elem = document.getElementById("mySidenav");
var def = elem.style.width;

// On resize, check the window size and fix menu text 
function checkWindowSize() {
    if (window.innerWidth > 768) {
        root.style.setProperty("--menu-visibility", "visible")
        root.style.setProperty("--global-margin", globalMargin_def)
    } else {
        root.style.setProperty("--menu-visibility", "hidden")
        root.style.setProperty("--global-margin", "50px")
        elem.style.width=def
    }
}

checkWindowSize(); // Check on page load
window.addEventListener("resize", checkWindowSize); // Check on window resize

function toggleNav() {
    if ( elem.style.width==def ) {
        elem.style.width="300px";
        root.style.setProperty('--menu-visibility', "visible");
    } else {
        elem.style.width=def;
        root.style.setProperty('--menu-visibility', "hidden");
    }
}   


