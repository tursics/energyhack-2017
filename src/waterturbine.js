/*jslint browser: true*/
/*global $,setInterval,pig*/

//-----------------------------------------------------------------------

import * as hexagon from './hexagon';
import * as waterTank from './watertank';

//-----------------------------------------------------------------------

var parent = null;

//-----------------------------------------------------------------------

export function init(paramParent) {
	parent = paramParent;
}

//-----------------------------------------------------------------------

export function next(turbine) {
	if (turbine === null) {
		return;
	}

	if (turbine.hasClass('off')) {
		turbine.removeClass('off').addClass('on1');
	} else if (turbine.hasClass('on1')) {
		turbine.removeClass('on1').addClass('on2');
	} else if (turbine.hasClass('on2')) {
		turbine.removeClass('on2').addClass('on3');
	} else {
		turbine.removeClass('on1').removeClass('on2').removeClass('on3').addClass('off');
	}
}

//-----------------------------------------------------------------------

export function nextProducer(turbine) {
	if (turbine === null) {
		return;
	}

	if (turbine.hasClass('coal')) {
		turbine.removeClass('coal').addClass('gas');
	} else if (turbine.hasClass('gas')) {
		turbine.removeClass('gas').addClass('nuclear');
	} else if (turbine.hasClass('nuclear')) {
		turbine.removeClass('nuclear').addClass('solar');
	} else if (turbine.hasClass('solar')) {
		turbine.removeClass('solar').addClass('wind');
	} else if (turbine.hasClass('wind')) {
		turbine.removeClass('wind').addClass('coal');
	}
}

//-----------------------------------------------------------------------

export function initEvents() {
	var i;

	$('.turbine').on('click', function () {
		next(hexagon.getTankFromElement($(this)));
	});
	$('.producer').on('click', function () {
		nextProducer(hexagon.getTankFromElement($(this)));
	});

	setInterval(function () {
		for (i = 0; i < waterTank.length(); ++i) {
			var turbine = hexagon.getTank(i);
			if (turbine.hasClass('on2')) {
				waterTank.decreaseTank(turbine);
				waterTank.decreaseTank(turbine);
				pig.increaseCosts(2);
			}
		}
	}, 1000);
	setInterval(function () {
		for (i = 0; i < waterTank.length(); ++i) {
			var turbine = hexagon.getTank(i);
			if (turbine.hasClass('on1')) {
				waterTank.decreaseTank(turbine);
				pig.increaseCosts(1);
			} else if (turbine.hasClass('on3')) {
				waterTank.decreaseTank(turbine);
				pig.increaseCosts(1);
			}
		}
	}, 2000);
}

//-----------------------------------------------------------------------
