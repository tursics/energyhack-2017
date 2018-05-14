/*jslint browser: true*/
/*global $,setInterval*/

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

	str += '<div class="board-left"></div>';
	str += '<div class="board-bottom"></div>';

	parent.html(parent.html() + str);
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

	for (i = 0; i < waterTurbine.length(); ++i) {
		str += '<div class="pipes" style="top: ' + (i * 2.2) + 'em"></div>';
	}

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initScreen() {
	'use strict';

	var node = $('#start');

	initBoard(node);
	waterTurbine.init(node);
	pig.init(node);
	windTurbine.init(node);
	initPipes(node);
	waterTank.init(node);
	initWorker(node);
	initEnd(node);

	waterTank.initEvents();
	waterTurbine.initEvents();
	pig.initEvents();
	windTurbine.initEvents();
	initEndEvent(node);
}

initScreen();

//-----------------------------------------------------------------------
