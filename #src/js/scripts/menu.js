let iconMenu = document.querySelector('.icon-menu'),
	menuBody = document.querySelector('.menu__body'),
	body = document.querySelector('body'),
	menuLink = document.querySelectorAll('.menu__link');

iconMenu.onclick = function() {
	iconMenu.classList.toggle('_menu-active');
	menuBody.classList.toggle('_menu-active');
	page.classList.toggle('_lock');
	body.classList.toggle('_lock');
}

menuLink.forEach(function(item) {
	item.addEventListener("click", function() {
		iconMenu.classList.toggle('_menu-active');
		menuBody.classList.toggle('_menu-active');
		page.classList.toggle('_lock');
		body.classList.toggle('_lock');
	})
});