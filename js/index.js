/*jslint browser: true*/
/*global $,waterTurbine,hexagon,waterTank*/

//-----------------------------------------------------------------------

function initWorker(parent) {
	'use strict';
	var i, str = '';

	for (i = 0; i < waterTurbine.length(); ++i) {
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

//	str += '<div class="board-left"></div>';
//	str += '<div class="board-bottom"></div>';

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initScreen() {
	'use strict';

	var node = $('#start');

	initBoard(node);
	hexagon.init(node);
	waterTurbine.init(node);
//	pig.init(node);
//	windTurbine.init(node);
	waterTank.init(node);
//	initWorker(node);
	initEnd(node);

	hexagon.initEvents();
	waterTank.initEvents();
	waterTurbine.initEvents();
//	pig.initEvents();
//	windTurbine.initEvents();
	initEndEvent(node);
}

initScreen();

//-----------------------------------------------------------------------
