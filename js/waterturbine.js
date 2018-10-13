/*jslint browser: true*/
/*global $,setInterval,pig,waterTank,hexagon*/

//-----------------------------------------------------------------------

var waterTurbine = {

	parent: null,

	//-------------------------------------------------------------------

	init: function (parent) {
		'use strict';

		this.parent = parent;
	},

	//-------------------------------------------------------------------

	next: function (turbine) {
		'use strict';

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
	},

	//-------------------------------------------------------------------

	nextProducer: function (turbine) {
		'use strict';

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
	},

	//-------------------------------------------------------------------

	initEvents: function () {
		'use strict';
		var i;

		$('.turbine').on('click', function () {
			waterTurbine.next(hexagon.getTankFromElement($(this)));
		});
		$('.producer').on('click', function () {
			waterTurbine.nextProducer(hexagon.getTankFromElement($(this)));
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

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
