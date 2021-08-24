let page = document.querySelector('.page'),
header = document.querySelector('.header');

window.onload = function() {
	setTimeout(function(){
		page.classList.remove('_lock');
		header.classList.remove('_lock');
	}, 1000);
}