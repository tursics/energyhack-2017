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
}

//-----------------------------------------------------------------------

export function setSpeedInMinutes(minutes) {
	speed = minutes * 60;
}

//-----------------------------------------------------------------------
