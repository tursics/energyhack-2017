/*jslint browser: true*/
/*global $,setInterval*/

//-----------------------------------------------------------------------

var windTurbine = {

	parent: null,
	modValue: 7,
	costs: 0,
	costsShowed: 0,

	//-------------------------------------------------------------------

	init: function (parent) {
		'use strict';
		var str = '';

		this.parent = parent;

		str = '<div class="board-right"><div id="windturbine"></div><div id="windturbinerotor"></div></div>';
		this.parent.html(this.parent.html() + str);

		str = '<div id="pig"></div><div id="coin"></div>';
		$('.board-bottom', this.parent).html($('.board-bottom', this.parent).html() + str);
	},

	//-------------------------------------------------------------------

	initEvents: function () {
		'use strict';

		var that = this;

		setInterval(function () {
			if (parseInt(that.costs / that.modValue, 10) !== parseInt(that.costsShowed / that.modValue, 10)) {
				if (!$('#pig').hasClass('eat')) {
					$('#pig').addClass('eat');
					$('#coin').addClass('eat');
				}
			} else {
				if ($('#pig').hasClass('eat')) {
					$('#pig').removeClass('eat');
					$('#coin').removeClass('eat');
				}
			}

			that.costsShowed = that.costs;
		}, 500);
	},

	//-------------------------------------------------------------------

	increaseCosts: function (value) {
		'use strict';

		this.costs += value;
	}

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
