/*jslint browser: true*/
/*global $,setInterval,pig,waterTank,hexagon*/

//-----------------------------------------------------------------------

var waterTurbine = {

	parent: null,
	turbines: [],

	//-------------------------------------------------------------------

	init: function (parent) {
		'use strict';
		var i, str = '';

		this.parent = parent;

		for (i = 0; i < 10; ++i) {
			str += '<div id="turbine' + i + '" class="turbine on3" style="top: ' + (i * 2.2) + 'em"></div>';
			this.turbines.push(0);
		}

		this.parent.html(this.parent.html() + str);
	},

	//-------------------------------------------------------------------

	next: function (turbine) {
		'use strict';

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

	initEvents: function () {
		'use strict';
		var i;

		$('.turbine').on('click', function () {
			waterTurbine.next($(this));
			waterTurbine.next(hexagon.getTankFromElement($(this)));
		});

		setInterval(function () {
			for (i = 0; i < waterTurbine.turbines.length; ++i) {
				var turbine = $('#turbine' + i);
				if (turbine.hasClass('on2')) {
					waterTank.decreaseTank($('#tank' + i));
					waterTank.decreaseTank($('#tank' + i));
					waterTank.decreaseTank(hexagon.getTank(i));
					waterTank.decreaseTank(hexagon.getTank(i));
					pig.increaseCosts(2);
				}
			}
		}, 1000);
		setInterval(function () {
			for (i = 0; i < waterTurbine.turbines.length; ++i) {
				var turbine = $('#turbine' + i);
				if (turbine.hasClass('on1')) {
					waterTank.decreaseTank($('#tank' + i));
					waterTank.decreaseTank(hexagon.getTank(i));
					pig.increaseCosts(1);
				} else if (turbine.hasClass('on3')) {
					waterTank.decreaseTank($('#tank' + i));
					waterTank.decreaseTank(hexagon.getTank(i));
					pig.increaseCosts(1);
				}
			}
		}, 2000);
	},

	//-------------------------------------------------------------------

	length: function () {
		'use strict';

		return waterTank.length();
	}

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
