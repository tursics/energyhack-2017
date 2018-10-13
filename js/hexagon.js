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

		function addPumpStation(index, tank, level) {
			var selector = 'hex' + index;

			hexagon.items.push({
				selector: '#' + selector,
				tank: tank,
				level: level
			});

			return '<div id="' + selector + '" class="hex pumpStation fill0 station level' + level + ' turbine on3"></div>';
		}

		function addGras(index) {
			var selector = 'hex' + index;

			hexagon.items.push({
				selector: '#' + selector,
				tank: null
			});

			return '<div id="' + selector + '" class="hex"></div>';
		}

		function addProducer(index, producer) {
			var selector = 'hex' + index;

			hexagon.items.push({
				selector: '#' + selector,
				tank: null
			});

			return '<div id="' + selector + '" class="hex producer ' + producer + '"></div>';
		}

		this.parent = parent;

		var i = 0, str = '';

		str += addPumpStation(i++, 0, 0);
		str += addGras(i++);
		str += addPumpStation(i++, 1, 0);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addProducer(i++, 'gas');
		str += addProducer(i++, 'coal');
		str += addPumpStation(i++, 2, 0);
		str += addPumpStation(i++, 3, 0);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addProducer(i++, 'coal');
		str += addProducer(i++, 'coal');
		str += addProducer(i++, 'nuclear');
		str += addPumpStation(i++, 4, 0);
		str += addGras(i++);
		str += addPumpStation(i++, 5, 0);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addProducer(i++, 'solar');
		str += addProducer(i++, 'coal');
		str += addGras(i++);
		str += addPumpStation(i++, 6, 4);
		str += addPumpStation(i++, 7, 4);
		str += addGras(i++);
		str += addGras(i++);
		str += addProducer(i++, 'coal');
		str += addProducer(i++, 'wind');
		str += addProducer(i++, 'coal');
		str += addPumpStation(i++, 8, 0);
		str += addGras(i++);
		str += addPumpStation(i++, 9, 0);
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
