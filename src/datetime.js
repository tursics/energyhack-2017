//-----------------------------------------------------------------------

export var currentTime = 0;
var speed = 1;

//-----------------------------------------------------------------------

export function initDateTime() {
	currentTime = new Date();
	currentTime.setMilliseconds(0);
	currentTime.setFullYear(2016);
	speed = 1;
}

//-----------------------------------------------------------------------

export function increaseDateTime() {
	currentTime = new Date(currentTime.getTime() + (1000 * speed));

	if (currentTime.getFullYear() > 2016) {
		currentTime.setFullYear(2016);
	}
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

export function setSpeedInHours(hours) {
	speed = hours * 60 * 60;

	currentTime.setMilliseconds(0);
	currentTime.setSeconds(0);
	currentTime.setMinutes(0);
	currentTime.setHours(Math.trunc(currentTime.getHours() / hours) * hours);
}

//-----------------------------------------------------------------------

export function setSpeedInDays(days) {
	speed = days * 60 * 60 * 24;

	currentTime.setMilliseconds(0);
	currentTime.setSeconds(0);
	currentTime.setMinutes(0);
	currentTime.setHours(0);
	currentTime.setDate(Math.trunc(currentTime.getDate() / days) * days);
}

//-----------------------------------------------------------------------
