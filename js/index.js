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
		str += '<div id="worker' + i + '" class="worker" style="top: ' + (i * 2.2) + 'em"></div>';
	}

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initEnd(parent) {
	'use strict';
	var i, str = '';

	str += '<div class="end">Leider verloren</div>';

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initEndEvent(parent) {
	'use strict';

	$('#worker0').on('click', function () {
		$('.end').show();
	});
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
		str += '<div id="turbine' + i + '" class="turbine off" style="top: ' + (i * 2.2) + 'em"></div>';
		gTurbines.push(0);
	}

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function increaseTank(node) {
	'use strict';

	if (node.hasClass('fill0')) {
		node.removeClass('fill0').addClass('fill1');
	} else if (node.hasClass('fill1')) {
		node.removeClass('fill1').addClass('fill2');
	} else if (node.hasClass('fill2')) {
		node.removeClass('fill2').addClass('fill3');
	} else if (node.hasClass('fill3')) {
		node.removeClass('fill3').addClass('fill4');
	} else if (node.hasClass('fill4')) {
		node.removeClass('fill4').addClass('fill5');
	} else if (node.hasClass('fill5')) {
		node.removeClass('fill5').addClass('fill6');
	} else if (node.hasClass('fill6')) {
		node.removeClass('fill6').addClass('crash');
	}
}

//-----------------------------------------------------------------------

function decreaseTank(node) {
	'use strict';

	if (node.hasClass('fill6')) {
		node.removeClass('fill6').addClass('fill5');
	} else if (node.hasClass('fill5')) {
		node.removeClass('fill5').addClass('fill4');
	} else if (node.hasClass('fill4')) {
		node.removeClass('fill4').addClass('fill3');
	} else if (node.hasClass('fill3')) {
		node.removeClass('fill3').addClass('fill2');
	} else if (node.hasClass('fill2')) {
		node.removeClass('fill2').addClass('fill1');
	} else if (node.hasClass('fill1')) {
		node.removeClass('fill1').addClass('fill0');
	}
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

	setInterval(function () {
		for (i = 0; i < gTurbines.length; ++i) {
			var turbine = $('#turbine' + i),
				elem = $('#tank' + i);
			if (turbine.hasClass('on2')) {
				decreaseTank(elem);
				decreaseTank(elem);
			}
		}
	}, 1000);
	setInterval(function () {
		for (i = 0; i < gTurbines.length; ++i) {
			var turbine = $('#turbine' + i),
				elem = $('#tank' + i);
			if (turbine.hasClass('on1')) {
				decreaseTank(elem);
			} else if (turbine.hasClass('on3')) {
				decreaseTank(elem);
			}
		}
	}, 2000);
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
		str += '<div id="tank' + i + '" class="tank fill0" style="top: ' + (i * 2.2) + 'em;background-size: ' + measure[i][1] + 'em 2.1em;left: ' + measure[i][0] + 'em;"></div>';
	}

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initTankEvents(parent) {
	'use strict';

	setInterval(function () { increaseTank($('#tank' + 0)); }, 3000);
	setInterval(function () { increaseTank($('#tank' + 1)); }, 5000);
	setInterval(function () { increaseTank($('#tank' + 2)); }, 3000);
	setInterval(function () { increaseTank($('#tank' + 3)); }, 3000);
	setInterval(function () { increaseTank($('#tank' + 4)); }, 6000);
	setInterval(function () { increaseTank($('#tank' + 5)); }, 7000);
	setInterval(function () { increaseTank($('#tank' + 6)); }, 3000);
	setInterval(function () { increaseTank($('#tank' + 7)); }, 4000);
	setInterval(function () { increaseTank($('#tank' + 8)); }, 6000);
	setInterval(function () { increaseTank($('#tank' + 9)); }, 4000);
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
	initEnd(node);

	initTankEvents(node);
	initTurbineEvents(node);
	initEndEvent(node);
}

initScreen();

//-----------------------------------------------------------------------
