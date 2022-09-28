const sliderBox = document.querySelector('.slider__box');
const leftBtn = document.querySelector('.btn__left');
const rightBtn = document.querySelector('.btn__right');
const carouselImg = document.querySelectorAll('.slider__img');
const carouselWidth = 800;
const carouselspeed = 3000;
let index = 0;

const handleCarousel = () => {
	index++;
	changeImage();
};

let startCarousel = setInterval(handleCarousel, carouselspeed);

const changeImage = () => {
	if (index > carouselImg.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = carouselImg.length - 1;
	}
	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;
};
const handleRightArrow = () => {
	index++;
	resetInterval();
};
const handleLeftArrow = () => {
	index--;
	resetInterval();
};

const resetInterval = () => {
	changeImage();
	clearInterval(startCarousel);
	startCarousel = setInterval(handleCarousel, carouselspeed);
};

rightBtn.addEventListener('click', handleRightArrow);
leftBtn.addEventListener('click', handleLeftArrow);
