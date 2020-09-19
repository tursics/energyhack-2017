//-----------------------------------------------------------------------

import {initAorta} from './aorta';
import * as board from './board';
import {initDateTime} from './datetime';
import * as hexagon from './hexagon';
import * as pig from './pig';
import * as waterTank from './watertank';
import * as waterTurbine from './waterturbine';

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
	pig.init(node);
	waterTank.init(node);
//	initWorker(node);
	initEnd(node);
	initDateTime();

	board.initEvents();
	hexagon.initEvents();
	waterTank.initEvents();
	waterTurbine.initEvents();
	pig.initEvents();
	initEndEvent(node);

	initAorta();
}

initScreen();

//-----------------------------------------------------------------------
