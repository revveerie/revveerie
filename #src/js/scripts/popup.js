const popupLinks = document.querySelectorAll('.portfolio__grid-link');

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive);
		}
		document.body.classList.toggle('_lock');
        document.querySelector('.page').classList.toggle('_lock');
        document.querySelector('.header').classList.toggle('_lock');
        setTimeout(() => {
            curentPopup.classList.add('open');
            curentPopup.classList.add('active');
            if (document.querySelector('.popup.open').classList.contains('museum')) {
                document.querySelector('.dot_one').classList.add('_museum');
                document.querySelector('.dot_two').classList.add('_museum');
                document.querySelector('.dot_three').classList.add('_museum');
            }
            else if (document.querySelector('.popup.open').classList.contains('space')) {
                document.querySelector('.dot_one').classList.add('_space');
                document.querySelector('.dot_two').classList.add('_space');
                document.querySelector('.dot_three').classList.add('_space');
            }
            else if (document.querySelector('.popup.open').classList.contains('music')) {
                document.querySelector('.dot_one').classList.add('_music');
                document.querySelector('.dot_two').classList.add('_music');
                document.querySelector('.dot_three').classList.add('_music');
            }
            else if (document.querySelector('.popup.open').classList.contains('photo')) {
                document.querySelector('.dot_one').classList.add('_photo');
                document.querySelector('.dot_two').classList.add('_photo');
                document.querySelector('.dot_three').classList.add('_photo');
            }
            else if (document.querySelector('.popup.open').classList.contains('alarm')) {
                document.querySelector('.dot_one').classList.add('_alarm');
                document.querySelector('.dot_two').classList.add('_alarm');
                document.querySelector('.dot_three').classList.add('_alarm');
            }
            else if (document.querySelector('.popup.open').classList.contains('weather')) {
                document.querySelector('.dot_one').classList.add('_weather');
                document.querySelector('.dot_two').classList.add('_weather');
                document.querySelector('.dot_three').classList.add('_weather');
            }
        }, 2000);
	}
}

function popupClose(popupActive) {
	popupActive.classList.remove('open');
    setTimeout(() => {
        document.body.classList.toggle('_lock');
        document.querySelector('.page').classList.toggle('_lock');
        document.querySelector('.header').classList.toggle('_lock');
        if (document.querySelector('.popup.active').classList.contains('museum')) {
            document.querySelector('.dot_one').classList.remove('_museum');
            document.querySelector('.dot_two').classList.remove('_museum');
            document.querySelector('.dot_three').classList.remove('_museum');
            document.querySelector('.popup.active').classList.remove('active');
        }
        else if (document.querySelector('.popup.active').classList.contains('space')) {
            document.querySelector('.dot_one').classList.remove('_space');
            document.querySelector('.dot_two').classList.remove('_space');
            document.querySelector('.dot_three').classList.remove('_space');
            document.querySelector('.popup.active').classList.remove('active');
        }
        else if (document.querySelector('.popup.active').classList.contains('music')) {
            document.querySelector('.dot_one').classList.remove('_music');
            document.querySelector('.dot_two').classList.remove('_music');
            document.querySelector('.dot_three').classList.remove('_music');
            document.querySelector('.popup.active').classList.remove('active');
        }
        else if (document.querySelector('.popup.active').classList.contains('photo')) {
            document.querySelector('.dot_one').classList.remove('_photo');
            document.querySelector('.dot_two').classList.remove('_photo');
            document.querySelector('.dot_three').classList.remove('_photo');
            document.querySelector('.popup.active').classList.remove('active');
        }
        else if (document.querySelector('.popup.active').classList.contains('alarm')) {
            document.querySelector('.dot_one').classList.remove('_alarm');
            document.querySelector('.dot_two').classList.remove('_alarm');
            document.querySelector('.dot_three').classList.remove('_alarm');
            document.querySelector('.popup.active').classList.remove('active');
        }
        else if (document.querySelector('.popup.active').classList.contains('weather')) {
            document.querySelector('.dot_one').classList.remove('_weather');
            document.querySelector('.dot_two').classList.remove('_weather');
            document.querySelector('.dot_three').classList.remove('_weather');
            document.querySelector('.popup.active').classList.remove('active');
        }
    }, 2000);
}