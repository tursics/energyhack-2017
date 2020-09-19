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
	currentTime = new Date(currentTime.getTime() + (1000 * speed));

	console.log(currentTime.toString());
}

//-----------------------------------------------------------------------
