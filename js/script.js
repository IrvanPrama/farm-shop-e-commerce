let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
	searchForm.classList.toggle("active");
	shoppingCart.classList.remove("active");
	loginForm.classList.remove("active");
	navbar.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
	checkout.classList.remove("active");
	loginForm.classList.toggle("active");
	searchForm.classList.remove("active");
	shoppingCart.classList.remove("active");
	navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
	checkout.classList.remove("active");
	shoppingCart.classList.toggle("active");
	searchForm.classList.remove("active");
	loginForm.classList.remove("active");
	navbar.classList.remove("active");
};

let checkout = document.querySelector(".checkout-form");

document.querySelector("#checkout-btn").onclick = () => {
	checkout.classList.toggle("active");
	shoppingCart.classList.remove("active");
	searchForm.classList.remove("active");
	loginForm.classList.remove("active");
	navbar.classList.remove("active");
};

let bayar = document.querySelector(".bayar-form");

document.querySelector("#bayar-btn").onclick = () => {
	bayar.classList.toggle("active");
	shoppingCart.classList.remove("active");
	searchForm.classList.remove("active");
	loginForm.classList.remove("active");
	navbar.classList.remove("active");
};

let done = document.querySelector(".success-message");

document.querySelector("#btn-selesai").onclick = () => {
	done.classList.toggle("active");
	bayar.classList.remove("active");
	checkout.classList.remove("active");
	shoppingCart.classList.remove("active");
	searchForm.classList.remove("active");
	loginForm.classList.remove("active");
	navbar.classList.remove("active");
};

let oke = document.querySelector(".btn-done");

document.querySelector("#btn-oke").onclick = () => {
	done.classList.remove("active");
	bayar.classList.remove("active");
	checkout.classList.remove("active");
	shoppingCart.classList.remove("active");
	searchForm.classList.remove("active");
	loginForm.classList.remove("active");
	navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
	checkout.classList.remove("active");
	navbar.classList.toggle("active");
	searchForm.classList.remove("active");
	shoppingCart.classList.remove("active");
	loginForm.classList.remove("active");
};

window.onscroll = () => {
	checkout.classList.remove("active");
	searchForm.classList.remove("active");
	shoppingCart.classList.remove("active");
	loginForm.classList.remove("active");
	navbar.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
	loop: true,
	spaceBetween: 20,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1020: {
			slidesPerView: 3,
		},
	},
});

var swiper = new Swiper(".review-slider", {
	loop: true,
	spaceBetween: 20,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	centeredSlides: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1020: {
			slidesPerView: 3,
		},
	},
});

var sound = new Audio();
sound.src = "sounds/sound.wav";
