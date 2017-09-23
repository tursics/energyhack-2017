/*jslint browser: true*/
/*global $*/

//-----------------------------------------------------------------------

function initWorker(parent) {
	'use strict';
	var i, str = '';

	for (i = 0; i < 10; ++i) {
		str += '<div class="worker" style="top: ' + (i * 2.2) + 'em"></div>';
	}

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initBoard(parent) {
	'use strict';
	var str = '';

	str += '<div class="board-bottom"></div>';

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

function initScreen() {
	'use strict';

	var node = $('#start'),
		str = '';

	str = 'Hallo Welt';
	node.html(str);

	initBoard(node);
	initWorker(node);
}

initScreen();

//-----------------------------------------------------------------------
