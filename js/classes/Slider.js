// global imports
import { addClass, addFilter, getElement, removeClass } from '../utils.js';
// slider actions
export default class {
	constructor(element) {
		this.el = getElement(element);
		this.indicators =
			this.el.querySelectorAll(`${element}-indicators li`) || [];
		this.containers = this.el.querySelectorAll(`${element}-inner .item`) || [];
		this.buttons = this.el.querySelectorAll(`${element}-btn`) || [];
		this.imagePath = '../../imgs/projects/slider.png';
		this.timer = setInterval(this.setTimer.bind(this), this.getSlideInterval());
		this.count = 1;
		// initialization
		this.init();
	}
	init() {
		this.clickIndicator();
		this.clickBtn();
	}
	getSlideInterval() {
		return parseInt(this.el.dataset.interval);
	}
	setTimer() {
		this.count === this.containers.length - 1 ? (this.count = 0) : this.count++;
		this.clearFix();
		addClass(this.containers[this.count], `active`);
		addClass(this.indicators[this.count], `active`);
	}
	clearFix() {
		this.containers.forEach(slide => removeClass(slide, `active`));
		this.indicators.forEach(ind => removeClass(ind, `active`));
	}
	clickIndicator() {
		this.indicators.forEach(indicator =>
			addFilter(indicator, `click`, ({ target, preventDefault }) => {
				preventDefault;
				let id = parseInt(target.dataset.slideTo);
				this.clearFix();
				addClass(this.containers[id], `active`);
				addClass(target, `active`);
				if (id === this.indicators.length - 1) {
					id = -1;
				}
				this.count = id;
				this.interval();
			}),
		);
	}
	searchClass(target, cls) {
		let tgt;
		if (target.classList.contains(cls)) {
			tgt = target;
		} else if (target.parentElement.classList.contains(cls)) {
			tgt = target.parentElement;
		}
		return tgt;
	}
	interval() {
		clearInterval(this.timer);
		this.timer = setInterval(this.setTimer.bind(this), this.getSlideInterval());
	}
	clickBtn() {
		this.buttons.forEach(btn =>
			addFilter(btn, `click`, ({ target, preventDefault }) => {
				preventDefault;
				const prevBtn = this.searchClass(target, `prev-btn`) || false;
				const nextBtn = this.searchClass(target, `next-btn`) || false;
				let id = this.count;
				if (prevBtn) {
					id === 0 ? (id = this.containers.length - 1) : (id -= 1);
					this.clearFix();
					addClass(this.containers[id], `active`);
					addClass(this.indicators[id], `active`);
					this.count = id;
					this.interval();
				} else if (nextBtn) {
					id === this.containers.length - 1 ? (id = 0) : (id += 1);
					this.clearFix();
					addClass(this.containers[id], `active`);
					addClass(this.indicators[id], `active`);
					this.count = id;
					this.interval();
				}
			}),
		);
	}
}
