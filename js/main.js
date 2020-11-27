const menuOpen = document.querySelector('.menu-collapse');
const menuClose = document.querySelector('.menu-close');
const headerMenu = document.querySelector('.header_area .menu_area');

menuOpen.addEventListener('click', function () {
	headerMenu.classList.add('is-open');
});

menuClose.addEventListener('click', function () {
	headerMenu.classList.remove('is-open');
})
document.addEventListener('click', function (event) {
	if (!headerMenu.contains(event.target) && !event.target.matches('.menu-collapse')) {
		headerMenu.classList.remove('is-open');
	}
});