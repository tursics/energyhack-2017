/*jslint browser: true*/
/*global $,window*/

//-----------------------------------------------------------------------

var hexagon = {

	parent: null,
	items: [],
	columns: 8,

	//-------------------------------------------------------------------

	init: function (parent) {
		'use strict';

		function addPumpStation(index, tank) {
			var selector = 'hex' + index;

			hexagon.items.push({
				selector: '#' + selector,
				tank: tank
			});

			return '<div id="' + selector + '" class="hex pumpStation fill0 turbine on3"></div>';
		}

		function addGras(index) {
			var selector = 'hex' + index;

			hexagon.items.push({
				selector: '#' + selector,
				tank: null
			});

			return '<div id="' + selector + '" class="hex"></div>';
		}

		this.parent = parent;

		var i = 0, str = '';

		str += addPumpStation(i++, 0);
		str += addGras(i++);
		str += addPumpStation(i++, 1);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addPumpStation(i++, 2);
		str += addPumpStation(i++, 3);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addPumpStation(i++, 4);
		str += addGras(i++);
		str += addPumpStation(i++, 5);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addPumpStation(i++, 6);
		str += addPumpStation(i++, 7);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addPumpStation(i++, 8);
		str += addGras(i++);
		str += addPumpStation(i++, 9);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);

		this.parent.html(this.parent.html() + str);
	},

	//-------------------------------------------------------------------

	getTank: function (number) {
		'use strict';

		var i;

		for (i = 0; i < this.items.length; ++i) {
			if (this.items[i].tank === number) {
				return $(this.items[i].selector);
			}
		}

		return null;
	},

	//-------------------------------------------------------------------

	getTankFromElement: function (element) {
		'use strict';

		var i, selector;

		selector = '#' + element.attr('id');
		for (i = 0; i < this.items.length; ++i) {
			if (this.items[i].selector === selector) {
				return $(this.items[i].selector);
			}
		}

		return null;
	},

	//-------------------------------------------------------------------

	initEvents: function () {
		'use strict';

		$(window).resize(function () {
			hexagon.onResize();
		});

		hexagon.onResize();
	},

	//-------------------------------------------------------------------

	onResize: function () {
		'use strict';

		var i, line;

		for (i = 0; i < this.items.length; ++i) {
			line = Math.trunc(i / this.columns);
			$(this.items[i].selector).css({
				'left': 2 + 2.5 * ((i % this.columns) + (line % 2) * 0.5) + 'em',
				'top': 0.5 + 2.15 * (line) + 'em',
				'z-index': 50 + line
			});
		}
	}

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
