/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function makeNavbarResponsive() {
	var navbar = document.getElementById("topnavbar");
	var width = window.innerWidth;
	var x = navbar.className;
	document.getElementById("demo").innerHTML = x;
	if (navbar.className.contains(responsive) {
		navbar.classList.remove("responsive")
	} else {
		navbar.classList.add("responsive")
	}
}