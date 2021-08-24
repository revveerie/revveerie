//PRELOADER
let page = document.querySelector('.page'),
header = document.querySelector('.header');

window.onload = function() {
	setTimeout(function(){
		page.classList.remove('_lock');
		header.classList.remove('_lock');
	}, 1000);
}

//MENU
let iconMenu = document.querySelector('.icon-menu'),
	menuBody = document.querySelector('.menu__body'),
	body = document.querySelector('body');

iconMenu.onclick = function() {
	iconMenu.classList.toggle('_menu-active');
	menuBody.classList.toggle('_menu-active');
	page.classList.toggle('_lock');
	body.classList.toggle('_lock');
}
















