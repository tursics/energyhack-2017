/*jslint browser: true*/
/*global $*/

//-----------------------------------------------------------------------

var windTurbine = {

	parent: null,

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
	}

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
