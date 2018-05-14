/*jslint browser: true*/
/*global $,setInterval*/

//-----------------------------------------------------------------------

var gTurbines = [],
	measure = [
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

var waterTurbine = {

	parent: null,

	//-------------------------------------------------------------------

	init: function (parent) {
		'use strict';
		var i, str = '';

		this.parent = parent;

		for (i = 0; i < 10; ++i) {
			str += '<div id="turbine' + i + '" class="turbine on3" style="top: ' + (i * 2.2) + 'em"></div>';
			gTurbines.push(0);
		}

		this.parent.html(this.parent.html() + str);
	},

	//-------------------------------------------------------------------

	initEvents: function () {
		'use strict';
		var i;

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
			for (i = 0; i < gTurbines.length; ++i) {
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
			for (i = 0; i < gTurbines.length; ++i) {
				var turbine = $('#turbine' + i),
					elem = $('#tank' + i);
				if (turbine.hasClass('on1')) {
					decreaseTank(elem);
					increaseCosts(1);
				} else if (turbine.hasClass('on3')) {
					decreaseTank(elem);
					pig.increaseCosts(1);
				}
			}
		}, 2000);
	}

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
