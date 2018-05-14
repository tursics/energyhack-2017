/*jslint browser: true*/
/*global $,setInterval*/

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
	var str = '';

	str += '<div class="end">Leider verloren</div>';

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

//function initEndEvent(parent) {
function initEndEvent() {
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

//function initTankEvents(parent) {
function initTankEvents() {
	'use strict';

	setInterval(function () { increaseTank($('#tank')); }, 3000);
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
	waterTurbine.init(node);
	windTurbine.init(node);
	initPipes(node);
	initTanks(node);
	initWorker(node);
	initEnd(node);

	initTankEvents(node);
	waterTurbine.initEvents();
	windTurbine.initEvents();
	initEndEvent(node);
}

initScreen();

//-----------------------------------------------------------------------
