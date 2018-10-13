/*jslint browser: true*/
/*global $,window,waterTank*/

//-----------------------------------------------------------------------

var hexagon = {

	parent: null,
	items: [],

	//-------------------------------------------------------------------

	init: function (parent) {
		'use strict';

		this.parent = parent;

		var i, str = '', selector;

		for (i = 0; i < waterTank.length(); ++i) {
			selector = 'hex' + i;
			this.items.push({
				selector: '#' + selector,
				tank: i
			});

			str += '<div id="' + selector + '" class="hex pumpStation fill0 turbine on3"></div>';
		}

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

		selector = '#hex' + element.attr('id').replace('turbine', '');
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
			line = Math.trunc(i / 2);
			$(this.items[i].selector).css({
				'left': 2 + 2.5 * ((i % 2) + (line % 2) * 0.5) + 'em',
				'top': 2 + 2.15 * (line) + 'em',
				'z-index': 50 + line
			});
		}
	}

	//-------------------------------------------------------------------

};

//-----------------------------------------------------------------------
