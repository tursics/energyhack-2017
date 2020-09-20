//-----------------------------------------------------------------------

import {currentTime} from '../datetime';

//-----------------------------------------------------------------------

var parent = null;

//-----------------------------------------------------------------------

export function initClockComponent(paramParent) {
	parent = paramParent;

	var str = '<div id="clock"></div>';
	$('.board-bottom', parent).html($('.board-bottom', parent).html() + str);
}

//-----------------------------------------------------------------------

export function updateClockComponent() {
	var str =
		('0' + currentTime.getDate()).slice(-2) + '.' +
		('0' + (currentTime.getMonth() + 1)).slice(-2) + '.' +
		currentTime.getFullYear() + ' ' +
		('0' + currentTime.getHours()).slice(-2) + ':' +
		('0' + currentTime.getMinutes()).slice(-2) + ' ' +
		'Uhr';

	$('#clock').html(str);
}

//-----------------------------------------------------------------------
