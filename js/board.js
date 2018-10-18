/*jslint browser: true*/
/*global $,hexagon*/

//-----------------------------------------------------------------------

var board = {

	parent: null,

	//-------------------------------------------------------------------

	init: function (parent) {
		'use strict';

		this.parent = parent;

		var str = '';

//		str += '<div class="board-left"></div>';
		str += '<div class="board-bottom">';
		str += '<div id="speed-marker"></div>';
		str += '</div>';

		parent.html(parent.html() + str);
	},

	//-------------------------------------------------------------------

	initEvents: function () {
		'use strict';

		this.setSpeed(1);
	},

	//-------------------------------------------------------------------

	updateTacho: function () {
		'use strict';

		var i, tank, sum = 0, sum2 = 0;

		for (i = 0; i < waterTank.length(); ++i) {
			tank = hexagon.getTank(i);

			if ($(tank).hasClass('on1')) {
				sum += 1;
			}
			if ($(tank).hasClass('on2')) {
				sum += 2;
			}
			if ($(tank).hasClass('on3')) {
				sum += 1;
			}
		}

		for (i = 0; i < hexagon.items.length; ++i) {
			tank = $(hexagon.items[i].selector);
			
			if ($(tank).hasClass('coal')) {
				sum2 += 1.4;
			}
			if ($(tank).hasClass('gas')) {
				sum2 += 1.4;
			}
			if ($(tank).hasClass('nuclear')) {
				sum2 += 1.4;
			}
			if ($(tank).hasClass('solar')) {
				sum2 += 0;
			}
			if ($(tank).hasClass('wind')) {
				sum2 += 0;
			}
		}

		$('#speed-marker').css({'transform' : 'rotate(' + (-60 + 120 * (sum / 20)) + 'deg)'});
		this.setSpeed(1 + Math.trunc(sum2 / 3));
	},

	//-------------------------------------------------------------------

	setSpeed: function (speed) {
		'use strict';

		$('.board-bottom').removeClass('speed1').removeClass('speed2').removeClass('speed3').removeClass('speed4').removeClass('speed5').addClass('speed' + speed);
	}

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
