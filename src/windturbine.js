/*jslint browser: true*/
/*global */

//-----------------------------------------------------------------------

var windTurbine = {

	parent: null,

	//-------------------------------------------------------------------

	init: function (parent) {
		'use strict';

		this.parent = parent;

		var str = '<div class="board-right"><div id="windturbine"></div><div id="windturbinerotor"></div></div>';
		this.parent.html(this.parent.html() + str);
	},

	//-------------------------------------------------------------------

	initEvents: function () {
		'use strict';
	}

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
