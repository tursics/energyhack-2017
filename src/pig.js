//-----------------------------------------------------------------------

var parent = null;
var modValue = 7;
var costs = 0;
var costsShowed = 0;

//-----------------------------------------------------------------------

export function init(paramParent) {
	parent = paramParent;

	var str = '<div id="pig"></div><div id="coin"></div>';
	$('.board-bottom', parent).html($('.board-bottom', parent).html() + str);
}

//-----------------------------------------------------------------------

export function initEvents() {
	setInterval(function () {
		if (parseInt(costs / modValue, 10) !== parseInt(costsShowed / modValue, 10)) {
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

		costsShowed = costs;
	}, 500);
}

//-----------------------------------------------------------------------

export function increaseCosts(value) {
	costs += value;
}

//-----------------------------------------------------------------------
