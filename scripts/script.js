let bars = document.getElementsByClassName('fa-bars')[0];
let nav = document.getElementsByTagName('nav')[0];

bars.addEventListener('click', (event) => {
	if (!nav.className) {
		nav.className += ' responsive';
	} else {
		nav.className = '';
	}
})