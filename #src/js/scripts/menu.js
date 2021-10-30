let iconMenu = document.querySelector('.icon-menu'),
	menuBody = document.querySelector('.menu__body'),
	body = document.querySelector('body'),
	menuLink = document.querySelectorAll('.menu__link');

iconMenu.onclick = function() {
	iconMenu.classList.toggle('_menu-active');
	
	body.classList.toggle('_lock');
	if (menuBody.classList.contains('_menu-active')) {
		menuBody.classList.toggle('_menu-active');
		setTimeout(() => {
			page.classList.toggle('_lock');
		}, 2000);
	}
	else {
		page.classList.toggle('_lock');
		setTimeout(() => {
			menuBody.classList.toggle('_menu-active');
		}, 2000);
	}
}

menuLink.forEach(function(item) {
	item.addEventListener("click", function() {
		iconMenu.classList.toggle('_menu-active');
		menuBody.classList.toggle('_menu-active');
		page.classList.toggle('_lock');
		body.classList.toggle('_lock');
	})
});