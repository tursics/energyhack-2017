/*jslint browser: true*/
/*global $,setInterval*/

//-----------------------------------------------------------------------

var waterTank = {

	parent: null,
	measure: [
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
	],

	//-------------------------------------------------------------------

	init: function (parent) {
		'use strict';

		this.parent = parent;

		var i, str = '';

		for (i = 0; i < this.length(); ++i) {
			str += '<div class="pipes" style="top: ' + (i * 2.2) + 'em"></div>';
		}

		for (i = 0; i < this.length(); ++i) {
			str += '<div id="tank' + i + '" class="tank fill0" style="top: ' + (i * 2.2) + 'em;background-size: ' + this.measure[i][1] + 'em 2.1em;left: ' + this.measure[i][0] + 'em;"></div>';
		}

		this.parent.html(this.parent.html() + str);
	},

	//-------------------------------------------------------------------

	increaseTank: function (node) {
		'use strict';

		if (node.hasClass('fill0')) {
			node.removeClass('fill0').addClass('fill1');
		} else if (node.hasClass('fill1')) {
			node.removeClass('fill1').addClass('fill2');
		} else if (node.hasClass('fill2')) {
			node.removeClass('fill2').addClass('fill3');
		} else if (node.hasClass('fill3')) {
			node.removeClass('fill3').addClass('fill4');
		} else if (node.hasClass('fill4')) {
			node.removeClass('fill4').addClass('fill5');
		} else if (node.hasClass('fill5')) {
			node.removeClass('fill5').addClass('fill6');
		} else if (node.hasClass('fill6')) {
			node.removeClass('fill6').addClass('crash');
		}
	},

	//-------------------------------------------------------------------

	decreaseTank: function (node) {
		'use strict';

		if (node.hasClass('fill6')) {
			node.removeClass('fill6').addClass('fill5');
		} else if (node.hasClass('fill5')) {
			node.removeClass('fill5').addClass('fill4');
		} else if (node.hasClass('fill4')) {
			node.removeClass('fill4').addClass('fill3');
		} else if (node.hasClass('fill3')) {
			node.removeClass('fill3').addClass('fill2');
		} else if (node.hasClass('fill2')) {
			node.removeClass('fill2').addClass('fill1');
		} else if (node.hasClass('fill1')) {
			node.removeClass('fill1').addClass('fill0');
		}
	},

	//-------------------------------------------------------------------

	initEvents: function () {
		'use strict';

		var that = this;

		setInterval(function () {
			that.increaseTank($('#tank' + '0'));
		}, 3000);
		setInterval(function () {
			that.increaseTank($('#tank' + 1));
		}, 5000);
		setInterval(function () {
			that.increaseTank($('#tank' + 2));
		}, 3000);
		setInterval(function () {
			that.increaseTank($('#tank' + 3));
		}, 3000);
		setInterval(function () {
			that.increaseTank($('#tank' + 4));
		}, 6000);
		setInterval(function () {
			that.increaseTank($('#tank' + 5));
		}, 7000);
		setInterval(function () {
			that.increaseTank($('#tank' + 6));
		}, 3000);
		setInterval(function () {
			that.increaseTank($('#tank' + 7));
		}, 4000);
		setInterval(function () {
			that.increaseTank($('#tank' + 8));
		}, 6000);
		setInterval(function () {
			that.increaseTank($('#tank' + 9));
		}, 4000);
	},

	//-------------------------------------------------------------------

	length: function () {
		'use strict';

		return this.measure.length;
	}

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
