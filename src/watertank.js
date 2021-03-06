//-----------------------------------------------------------------------

import * as board from './board';
import * as hexagon from './hexagon';

//-----------------------------------------------------------------------

var parent = null;
var measure = [
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

export function init(paramParent) {
	parent = paramParent;
}

//-----------------------------------------------------------------------

export function increaseTank(node) {
	if (null === node) {
		return;
	}

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

		setTimeout(function () {
			$('.end').show();
		}, 1000);
	}

	board.updateTacho();
}

//-----------------------------------------------------------------------

export function decreaseTank(node) {
	if (null === node) {
		return;
	}

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

	board.updateTacho();
}

//-----------------------------------------------------------------------

export function initEvents() {
	setInterval(function () {
		increaseTank(hexagon.getTank(0));
	}, 3000);
	setInterval(function () {
		increaseTank(hexagon.getTank(1));
	}, 5000);
	setInterval(function () {
		increaseTank(hexagon.getTank(2));
	}, 3000);
	setInterval(function () {
		increaseTank(hexagon.getTank(3));
	}, 3000);
	setInterval(function () {
		increaseTank(hexagon.getTank(4));
	}, 6000);
	setInterval(function () {
		increaseTank(hexagon.getTank(5));
	}, 7000);
	setInterval(function () {
		increaseTank(hexagon.getTank(6));
	}, 3000);
	setInterval(function () {
		increaseTank(hexagon.getTank(7));
	}, 4000);
	setInterval(function () {
		increaseTank(hexagon.getTank(8));
	}, 6000);
	setInterval(function () {
		increaseTank(hexagon.getTank(9));
	}, 4000);
}

//-----------------------------------------------------------------------

export function length() {
	return measure.length;
}

//-----------------------------------------------------------------------
