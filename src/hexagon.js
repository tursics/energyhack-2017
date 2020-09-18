//-----------------------------------------------------------------------

var parent = null;
export var items = [];
var columns = 8;

//-----------------------------------------------------------------------

function addPumpStation(index, tank, level) {
	var selector = 'hex' + index;

	items.push({
		selector: '#' + selector,
		tank: tank,
		level: level
	});

	return '<div id="' + selector + '" class="hex pumpStation fill0 station level' + level + ' turbine on3"></div>';
}

//-----------------------------------------------------------------------

function addGras(index) {
	var selector = 'hex' + index;

	items.push({
		selector: '#' + selector,
		tank: null
	});

	return '<div id="' + selector + '" class="hex"></div>';
}

//-----------------------------------------------------------------------

function addProducer(index, producer) {
	var selector = 'hex' + index;

	items.push({
		selector: '#' + selector,
		tank: null
	});

	return '<div id="' + selector + '" class="hex producer ' + producer + '"></div>';
}

//-----------------------------------------------------------------------

export function init(paramParent) {
	parent = paramParent;

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

	parent.html(parent.html() + str);
}

//-----------------------------------------------------------------------

export function getTank(number) {
	var i;

	for (i = 0; i < items.length; ++i) {
		if (items[i].tank === number) {
			return $(items[i].selector);
		}
	}

	return null;
}

//-----------------------------------------------------------------------

export function getTankFromElement(element) {
	var i, selector;

	selector = '#' + element.attr('id');
	for (i = 0; i < items.length; ++i) {
		if (items[i].selector === selector) {
			return $(items[i].selector);
		}
	}

	return null;
}

//-----------------------------------------------------------------------

export function initEvents() {
	$(window).resize(function () {
		onResize();
	});

	onResize();
}

//-----------------------------------------------------------------------

export function onResize() {
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
			ratio,
			rows = parseInt(items.length / columns, 10);

		itemW = $(items[0].selector)[0].scrollWidth;
		itemH = $(items[0].selector)[0].scrollHeight;
		ratioW = parseInt(width / itemW / (columns + 0.5) * 100, 10) / 100;
		ratioH = parseInt(height / itemH / 0.62 / (rows + 0.33) * 100, 10) / 100;
		ratio = ratioH < ratioW ? ratioH : ratioW;

		$('body').css('font-size', ratio + 'rem');

		for (i = 0; i < items.length; ++i) {
			line = Math.trunc(i / columns);
			$(items[i].selector).css({
				'left': 2.5 * ((i % columns) + (line % 2) * 0.5) + 'em',
				'top': (-0.56 + 2.15 * (line)) + 'em',
				'z-index': 50 + line
			});
		}
	});
}

//-----------------------------------------------------------------------
