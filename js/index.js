/*jslint browser: true*/
/*global $*/

//-----------------------------------------------------------------------

var gTurbines = [],
	measure = [
		[12, 3],
		[9, 6],
		[11, 4],
		[8, 7],
		[12, 3],
		[13, 2],
		[10, 5],
		[9, 6],
		[11, 4],
		[10, 5]
	];

//-----------------------------------------------------------------------

function initWorker(parent) {
	'use strict';
	var i, str = '';

	for (i = 0; i < gTurbines.length; ++i) {
		str += '<div class="worker" style="top: ' + (i * 2.2) + 'em"></div>';
	}

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initBoard(parent) {
	'use strict';
	var str = '';

	str += '<div class="board-left"></div>';
	str += '<div class="board-bottom"></div>';

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initTurbines(parent) {
	'use strict';
	var i, str = '';

	for (i = 0; i < 10; ++i) {
		str += '<div class="turbine off" style="top: ' + (i * 2.2) + 'em"></div>';
		gTurbines.push(0);
	}

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initTurbineEvents(parent) {
	'use strict';
	var i;

	$('.turbine').on('click', function () {
		var elem = $(this);

		if (elem.hasClass('off')) {
			elem.removeClass('off').addClass('on1');
		} else if (elem.hasClass('on1')) {
			elem.removeClass('on1').addClass('on2');
		} else if (elem.hasClass('on2')) {
			elem.removeClass('on2').addClass('on3');
		} else {
			elem.removeClass('on1').removeClass('on2').removeClass('on3').addClass('off');
		}
	});
}

//-----------------------------------------------------------------------

function initPipes(parent) {
	'use strict';
	var i, str = '';

	for (i = 0; i < gTurbines.length; ++i) {
		str += '<div class="pipes" style="top: ' + (i * 2.2) + 'em"></div>';
	}

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initTanks(parent) {
	'use strict';
	var i, str = '';

	for (i = 0; i < gTurbines.length; ++i) {
		str += '<div class="tank fill0" style="top: ' + (i * 2.2) + 'em;background-size: ' + measure[i][1] + 'em 2.1em;left: ' + measure[i][0] + 'em;"></div>';
	}

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initScreen() {
	'use strict';

	var node = $('#start');

	initBoard(node);
	initTurbines(node);
	initPipes(node);
	initTanks(node);
	initWorker(node);

	initTurbineEvents(node);
}

initScreen();

//-----------------------------------------------------------------------
