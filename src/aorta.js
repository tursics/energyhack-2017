//-----------------------------------------------------------------------

import {increaseDateTime} from './datetime';
import {updateClockComponent} from './component/clock';

//-----------------------------------------------------------------------

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
var requestId = undefined;
var start = undefined;
var lastTick = undefined;

//-----------------------------------------------------------------------

function pulseEverySecond() {
	increaseDateTime();
	updateClockComponent();
}

//-----------------------------------------------------------------------

function step(timestamp) {
	if (start === undefined) {
		start = timestamp;
	}

	var elapsed = Math.trunc((timestamp - start) / 1000);
	if (elapsed !== lastTick) {
		lastTick = elapsed;
		pulseEverySecond();
	}

	requestId = requestAnimationFrame(step);
}

//-----------------------------------------------------------------------

export function initAorta() {
	requestId = requestAnimationFrame(step);
}

//-----------------------------------------------------------------------

export function stopAorta() {
	cancelAnimationFrame(requestId);
	requestId = undefined;
}

//-----------------------------------------------------------------------
