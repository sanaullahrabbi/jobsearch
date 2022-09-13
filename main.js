const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	console.log("clicked");
	menuMobile.classList.toggle("open");
}

AOS.init();

window.addEventListener("scroll", function () {
	console.log(window.scrollY);
	nav.classList.toggle("sticky-header", window.scrollY > 0);
});
