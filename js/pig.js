/*jslint browser: true*/
/*global $,setInterval*/

//-----------------------------------------------------------------------

var pig = {

	parent: null,
	modValue: 7,
	costs: 0,
	costsShowed: 0,

	//-------------------------------------------------------------------

	init: function (parent) {
		'use strict';

		this.parent = parent;

		var str = '<div id="pig"></div><div id="coin"></div>';
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
