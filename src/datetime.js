//-----------------------------------------------------------------------

export var currentTime = 0;
var speed = 1;

//-----------------------------------------------------------------------

export function initDateTime() {
	currentTime = new Date();
	currentTime.setMilliseconds(0);
}

//-----------------------------------------------------------------------

export function increaseDateTime() {
	var sec = currentTime.getSeconds();

	sec += speed;

	currentTime.setSeconds(sec);

	console.log(currentTime.toString());
}

//-----------------------------------------------------------------------
