//-----------------------------------------------------------------------

export var currentTime = 0;
var speed = 1;

//-----------------------------------------------------------------------

export function initDateTime() {
	currentTime = new Date();
	currentTime.setMilliseconds(0);
	speed = 1;
}

//-----------------------------------------------------------------------

export function increaseDateTime() {
	currentTime = new Date(currentTime.getTime() + (1000 * speed));
}

//-----------------------------------------------------------------------

export function setSpeedInSeconds(seconds) {
	speed = seconds;

	currentTime.setMilliseconds(0);
	currentTime.setSeconds(Math.trunc(currentTime.getSeconds() / seconds) * seconds);
}

//-----------------------------------------------------------------------

export function setSpeedInMinutes(minutes) {
	speed = minutes * 60;

	currentTime.setMilliseconds(0);
	currentTime.setSeconds(0);
	currentTime.setMinutes(Math.trunc(currentTime.getMinutes() / minutes) * minutes);
}

//-----------------------------------------------------------------------
