//----------------------------
// https://www.stromnetz.berlin/globalassets/dokumente/opendata/erlaeuterungen-livedaten-zugriff-stromnetz-berlin-smeter_engine.pdf
//----------------------------

function getDataFromStromnetze(options, next, reject) {
	var https = require('https');
	var requestOptions = {
		host: 'smeterengine.stromnetz.berlin',
		path: options.path /*+ 'mobile'*/,
		method: 'POST',
		headers: {
			'Content-Type': 'text/xml;charset=UTF-8',
			'Content-Length': options.xmlData.length,
		}
	};

	var request = https.request(requestOptions, function (res) {
		var data = '';
		res.on('data', function (chunk) {
			data += chunk;
		});
		res.on('end', function () {
			next(data);
		});
	});

	request.on('error', function (e) {
		reject(e.message);
	});
	request.write(options.xmlData);
	request.end();
}

//----------------------------

function getEnergyData(date, next, reject) {
	// <district name='Spandau'>

	var dateBegin = date.getFullYear() + '-' + ('0' + date.getMonth()).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + ' 00:00:00';
	var dateEnd = date.getFullYear() + '-' + ('0' + date.getMonth()).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + ' 23:59:59';
	var options = {
		path: '/SmeterEngine/networkcontrol',
		xmlData:`
			<smeterengine>
				<scale>DAY</scale>
				<city>BERLIN</city>
				<district>
					<time_period begin="${dateBegin}" end="${dateEnd}" time_zone='CET'/>
				</district>
			</smeterengine>`,
	};
	getDataFromStromnetze(options, next, reject);
}

//----------------------------

function getWeatherData(date, next, reject) {
	var dateBegin = date.getFullYear() + '-' + ('0' + date.getMonth()).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + 'T00:00:00';
	var dateEnd = date.getFullYear() + '-' + ('0' + date.getMonth()).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + 'T23:59:59';
	var options = {
		path: '/SmeterEngine/energyProjection',
		xmlData: `
			<smeterengine start="${dateBegin}" end="${dateEnd}">
				<cities>
					<city>BERLIN</city>
					<latitude>52.30</latitude>
					<longitude>13.25</longitude>
				</cities>
			</smeterengine>`,
	};
	getDataFromStromnetze(options, next, reject);
}

//----------------------------

function processOneYear(year, next) {
	var date = new Date(year, 0, 1);

	function processNext() {
		getEnergyData(date, () => {
			date = date.setDate(date.getDate() + 1);
			if (date.getFullYear === year) {
				processNext();
			} else {
				next();
			}
		});
	}
	processNext();
}

//----------------------------

var date = new Date(2013, 6 - 1, 12);
getEnergyData(date, (data) => console.log(data.length), (e) => console.error(e));
//	.reject(message => console.log(message));
//getWeatherData();

//----------------------------
