let nav = document.getElementsByTagName('nav')[0];
let bars = document.getElementsByClassName('fa-bars')[0];
let ul = document.getElementsByTagName('ul')[0];
let lis = document.getElementsByTagName('li');
let header = document.getElementsByTagName('header')[0];
let closeBtn = document.getElementsByClassName('fa-times-circle')[0];
let sections = document.getElementsByTagName('section');
let containers = document.getElementsByClassName('container');
let bodyRect = document.body.getBoundingClientRect();

bars.addEventListener('click', (event) => {
	if (!ul.style.width) {
		ul.style.width = '20%';
		header.style.marginLeft = '20%';
		for (let section of sections) {
    	section.style.marginLeft = '20%';
		}
	}
})

closeBtn.addEventListener('click', (event) => {
	ul.style.width = '';
	header.style.marginLeft = '';
	for (let section of sections) {
  	section.style.marginLeft = '';
	}
})

for (let li of lis) {
	li.addEventListener('click', () => {
		let id = li.firstChild.nodeValue;

		window.scroll({
		  top: document.getElementById(id).offsetTop,
		  behavior: 'smooth',
		});	
	})
}

function inView(el) {
	return el.offsetTop + 150 < window.innerHeight + window.pageYOffset;
}

function updateInView(event) {
	for (let container of containers) {
		if (inView(container)) {
			container.classList.add('fadeIn');
		}
	}
}

window.addEventListener('scroll', updateInView);

updateInView();