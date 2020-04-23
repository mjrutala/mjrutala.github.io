window.onscroll = function(){makeNavbarSticky()};
var navbar = document.getElementById("topnavbar");
var sticky = navbar.offsetTop;
function makeNavbarSticky() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}
