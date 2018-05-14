/*jslint browser: true*/
/*global $,setInterval,pig,waterTank*/

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

	initEvents: function () {
		'use strict';
		var i,
			that = this;

		$('.turbine').on('click', function () {
			var elem = $(this);

			if (elem.hasClass('off')) {
				elem.removeClass('off').addClass('on1');
			} else if (elem.hasClass('on1')) {
				elem.removeClass('on1').addClass('on2');
			} else if (elem.hasClass('on2')) {
				elem.removeClass('on2').addClass('on3');
			} else {
				elem.removeClass('on1').removeClass('on2').removeClass('on3').addClass('off');
			}
		});

		setInterval(function () {
			for (i = 0; i < that.turbines.length; ++i) {
				var turbine = $('#turbine' + i),
					elem = $('#tank' + i);
				if (turbine.hasClass('on2')) {
					decreaseTank(elem);
					decreaseTank(elem);
					pig.increaseCosts(2);
				}
			}
		}, 1000);
		setInterval(function () {
			for (i = 0; i < that.turbines.length; ++i) {
				var turbine = $('#turbine' + i),
					elem = $('#tank' + i);
				if (turbine.hasClass('on1')) {
					decreaseTank(elem);
					pig.increaseCosts(1);
				} else if (turbine.hasClass('on3')) {
					decreaseTank(elem);
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
