'use strict';
// globals
import { addFilter } from './utils.js';
// procedual
import { action, setTimer } from './slider.js';
// object oriented
import Slider from './classes/Slider.js';

const init = async () => {
	// object oriented
	new Slider(`.carousel`);
	// procedual
	// setTimer();
	// action();
};

addFilter(window, `DOMContentLoaded`, init);
