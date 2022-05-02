import {
	addClass,
	addFilter,
	getElement,
	getElements,
	removeClass,
} from './utils.js';

const slider = getElement(`.carousel`);
const sliderIndicators = getElements(`.carousel-indicators li`);
const sliderContainers = getElements(`.carousel-inner .item`);
let count = 1;

function getSlideInterval() {
	return parseInt(slider.dataset.interval);
}

function setTimer() {
	setInterval(function () {
		clearFix();
		addClass(sliderContainers[count], `active`);
		addClass(sliderIndicators[count], `active`);
		count === sliderContainers.length - 1 ? (count = 0) : count++;
	}, getSlideInterval());
}

function clearFix() {
	sliderContainers.forEach(slide => removeClass(slide, `active`));
	sliderIndicators.forEach(ind => removeClass(ind, `active`));
}

function action() {
	sliderIndicators.forEach(indicator =>
		addFilter(indicator, `click`, ({ target, preventDefault }) => {
			preventDefault;
			let slide = parseInt(target.dataset.slideTo);
			clearFix();
			addClass(sliderContainers[slide], `active`);
			addClass(target, `active`);
			count = slide;
		}),
	);
}

export { setTimer, action };
