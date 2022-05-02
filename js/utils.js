// get dom element
const getElement = selector => {
	const element = document.querySelector(selector);
	if (element) return element;
	throw new Error(`${element} not found`);
};
// get all elements
const getElements = selector => {
	const elements = [...document.querySelectorAll(selector)];
	if (elements) return elements;
	throw new Error(`${elements} not found`);
};
// add a class to an element
const addClass = (selector, cls) => selector.classList.add(cls);
// remove a class from an element
const removeClass = (selector, cls) => selector.classList.remove(cls);
// add event listener
const addFilter = (selector, action, fn) =>
	selector.addEventListener(action, fn);
let count = 1;
export { getElement, getElements, addClass, removeClass, addFilter, count };
