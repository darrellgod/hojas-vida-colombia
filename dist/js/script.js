const btnMenu = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

btnMenu.addEventListener('click', () => {
	btnMenu.classList.toggle('open')
	mobileMenu.classList.toggle('flex')
	mobileMenu.classList.toggle('hidden')
})
