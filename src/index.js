/*jslint browser: true*/
/*global $,waterTurbine,hexagon,waterTank*/

//-----------------------------------------------------------------------

import * as board from './board';
import * as hexagon from './hexagon';

//-----------------------------------------------------------------------

/*function initWorker(parent) {
	'use strict';
	var i, str = '';

	for (i = 0; i < waterTurbine.length(); ++i) {
		str += '<div id="worker' + i + '" class="worker" style="top: ' + (i * 2.2) + 'em"></div>';
	}

	parent.html(parent.html() + str);
}*/

//-----------------------------------------------------------------------

function initEnd(parent) {
	'use strict';
	var str = '';

	str += '<div class="end">Leider verloren</div>';

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initEndEvent() {
	'use strict';

/*	$('#worker0').on('click', function () {
		$('.end').show();
	});*/
}

//-----------------------------------------------------------------------

function initScreen() {
	'use strict';

	var node = $('#start');

	board.init(node);
	hexagon.init(node);
	waterTurbine.init(node);
//	pig.init(node);
//	windTurbine.init(node);
	waterTank.init(node);
//	initWorker(node);
	initEnd(node);

	board.initEvents();
	hexagon.initEvents();
	waterTank.initEvents();
	waterTurbine.initEvents();
//	pig.initEvents();
//	windTurbine.initEvents();
	initEndEvent(node);
}

initScreen();

//-----------------------------------------------------------------------
