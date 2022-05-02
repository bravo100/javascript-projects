'use strict';
// globals
import { addFilter } from '../utils.js';
// object oriented
import Slider from '../classes/Slider.js';

const init = () => new Slider(`.carousel`);

addFilter(window, `DOMContentLoaded`, init);
