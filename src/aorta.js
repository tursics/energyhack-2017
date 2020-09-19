//-----------------------------------------------------------------------

import {increaseDateTime} from './datetime';

//-----------------------------------------------------------------------

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
var requestId = undefined;
var start = undefined;
var lastTick = undefined;

//-----------------------------------------------------------------------

function pulse() {
	increaseDateTime();
}

//-----------------------------------------------------------------------

function step(timestamp) {
	if (start === undefined) {
		start = timestamp;
	}

	var elapsed = Math.trunc((timestamp - start) / 1000);
	if (elapsed !== lastTick) {
		lastTick = elapsed;
		pulse();
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
