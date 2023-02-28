let search=document.querySelector('.search-box');
document.querySelector('#search-icon').onclick=()=>{
	search.classList.toggle('active');
	cart.classList.remove('active');
	user.classList.remove('active');
	navbar.classList.remove('active');
}
let cart=document.querySelector('.cart');
document.querySelector('#cart-icon').onclick=()=>{
	cart.classList.toggle('active');
	search.classList.remove('active');
	user.classList.remove('active');
	navbar.classList.remove('active');
}

let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () => {
	user.classList.toggle('active');
	search.classList.remove('active');
	cart.classList.remove('active');
	navbar.classList.remove('active');
}
let navbar=document.querySelector('.navbar');
document.querySelector('#user-icon').onclick=()=>{
	navbar.classList.toggle('active');
	search.classList.remove('active');
	cart.classList.remove('active');
	user.classList.remove('active');
}
window.onscroll = () => {
	navbar.classList.remove('active');
	search.classList.remove('active');
	cart.classList.remove('active');
	user.classList.remove('active');
}
//Navbar scroll
let header = document.querySelector('header');
window.addEventListener('scroll',() => {
	header.classList.toggle('shadow',window.scrollY > 0);
});

//swipper
var swiper=new Swiper(".new-arrival",{
	spaceBetween: 20,
	loop:true,
	autoplay:{
		delay:5500,
		disableOnInteraction: false,
	},
	centeredSlides:true,
	breakpoints:{
		0:{
			slidesPerview:0,
		},
		568:{
			slidesPerview:2,
		},
		768:{
			slidesPerview:2,
		},
		1020:{
			slidesPerview:3,
		},
	},
});