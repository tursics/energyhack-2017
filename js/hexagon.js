/*jslint browser: true*/
/*global $,window,requestAnimationFrame*/

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

		str += addPumpStation(i++, 0, 1);
		str += addGras(i++);
		str += addPumpStation(i++, 1, 0);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addProducer(i++, 'gas');
		str += addProducer(i++, 'coal');
		str += addPumpStation(i++, 2, 0);
		str += addPumpStation(i++, 3, 1);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addProducer(i++, 'coal');
		str += addProducer(i++, 'coal');
		str += addProducer(i++, 'nuclear');
		str += addPumpStation(i++, 4, 2);
		str += addGras(i++);
		str += addPumpStation(i++, 5, 1);
		str += addGras(i++);
		str += addGras(i++);
		str += addGras(i++);
		str += addProducer(i++, 'solar');
		str += addProducer(i++, 'coal');
		str += addGras(i++);
		str += addPumpStation(i++, 6, 3);
		str += addPumpStation(i++, 7, 4);
		str += addGras(i++);
		str += addGras(i++);
		str += addProducer(i++, 'coal');
		str += addProducer(i++, 'wind');
		str += addProducer(i++, 'coal');
		str += addPumpStation(i++, 8, 3);
		str += addGras(i++);
		str += addPumpStation(i++, 9, 1);
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

		$('body').css('font-size', '1rem');

		requestAnimationFrame(function () {
			var i,
				line,
				width = window.innerWidth,
				height = window.innerHeight,
				itemW,
				itemH,
				ratioW,
				ratioH,
				rows = parseInt(hexagon.items.length / hexagon.columns, 10);

			itemW = $(hexagon.items[0].selector)[0].scrollWidth;
			itemH = $(hexagon.items[0].selector)[0].scrollHeight;
			ratioW = parseInt(width / itemW / (hexagon.columns + 0.5) * 100, 10) / 100;
			ratioH = parseInt(height / itemH / 0.62 / (rows + 0.33) * 100, 10) / 100;

			$('body').css('font-size', (ratioH < ratioW ? ratioH : ratioW) + 'rem');

			for (i = 0; i < hexagon.items.length; ++i) {
				line = Math.trunc(i / hexagon.columns);
				$(hexagon.items[i].selector).css({
					'left': 2.5 * ((i % hexagon.columns) + (line % 2) * 0.5) + 'em',
					'top': (-0.56 + 2.15 * (line)) + 'em',
					'z-index': 50 + line
				});
			}
		});
	}

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
