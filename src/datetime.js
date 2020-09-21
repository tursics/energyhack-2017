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

function addSecondsWithoutDayLightSaving(seconds) {
	const calculatedTime = new Date(currentTime.getTime() + 1000 * seconds);

	const sec = currentTime.getSeconds() + seconds;
	const min = currentTime.getMinutes() + Math.trunc(sec / 60);
	const hours = (currentTime.getHours() + Math.trunc(min / 60)) % 24;

	if (calculatedTime.getHours() === hours) {
		currentTime = calculatedTime;
	} else {
		const diff = calculatedTime.getHours() - hours;

		if (diff === 23) {
			currentTime = new Date(currentTime.getTime() + 1000 * seconds + 3600000);
		} else if (diff === -1) {
			currentTime = new Date(currentTime.getTime() + 1000 * seconds + 3600000);
		} else if (diff === 1) {
			currentTime = new Date(currentTime.getTime() + 1000 * seconds - 3600000);
		} else if (diff === -23) {
			currentTime = new Date(currentTime.getTime() + 1000 * seconds - 3600000);
		} else {
			currentTime = calculatedTime;
		}
	}
}

//-----------------------------------------------------------------------

export function increaseDateTime() {
	addSecondsWithoutDayLightSaving(speed);

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
