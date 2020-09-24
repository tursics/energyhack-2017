//----------------------------
// https://www.stromnetz.berlin/globalassets/dokumente/opendata/erlaeuterungen-livedaten-zugriff-stromnetz-berlin-smeter_engine.pdf
//----------------------------

function getEnergyData() {
	console.log('getEnergyData');

	var https = require('https');
	var postData = `
<smeterengine>
 <scale>DAY</scale>
 <city>BERLIN</city>
 <district name='Spandau'>
 <time_period begin="2013-06-05 00:00:00" end="2013-06-12 23:59:59" time_zone='CET'/>
</district>
</smeterengine> 
	`;
	var options = {
		host: 'smeterengine.stromnetz.berlin',
		path: '/SmeterEngine/networkcontrol',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': postData.length
		}
	};
	var request = https.request(options, function (res) {
		var data = '';
		res.on('data', function (chunk) {
			data += chunk;
		});
		res.on('end', function () {
			console.log(data);
		});
	});

	request.on('error', function (e) {
		console.log(e.message);
	});
	request.write(postData);
	request.end();
}

function getWeatherData() {
	console.log('getWeatherData');

	var https = require('https');
/*	var options = {
		host: 'www.vattenfall.de',
		path: '/SmeterEngine/energyProjection'
	};*/
	var postData = `
<smeterengine start="2013-06-12T09:00:00" end="2013-06-12T11:00:00">
 <cities>
 <city>BERLIN</city>
 <latitude>52.30</latitude>
 <longitude>13.25</longitude>
 </cities>
</smeterengine> 
	`;
	var options = {
		host: 'smeterengine.stromnetz.berlin',
		path: '/SmeterEngine/energyProjection',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': postData.length
		}
	};
	var request = https.request(options, function (res) {
		var data = '';
		res.on('data', function (chunk) {
			data += chunk;
		});
		res.on('end', function () {
			console.log(data);
		});
	});

	request.on('error', function (e) {
		console.log(e.message);
	});
	request.write(postData);
	request.end();
}

//----------------------------

function getData() {
	var http = require('http');

	var options = {
		host: 'www.vattenfall.de',
//		path: '/SmeterEngine/networkcontrol'
		path: '/SmeterEngine/energyProjection'
	}
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log(data);

    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
}

//----------------------------

function test()
{
	try {
/*		txt = '';
		txt += '<form action="https://www.vattenfall.de/SmeterEngine/energyProjection" method="post">';
		txt += 'Username: <input type="text" name="user">';
		txt += '<input type="submit" value="Submit">';
		txt += '</form>';
		$( "#ulHome").html( txt);
		$( "#ulHome").listview('refresh');*/

/*		$.ajax({
			type: 'POST',
			url: 'https://www.vattenfall.de/SmeterEngine/energyProjection',
//			contentType: "application/x-www-form-urlencoded; charset=utf-8",
			datatype: 'xml',
			data:
'<smeterengine start="2013-06-12T09:00:00" end="2013-06-12T11:00:00">'+
'<cities>'+
'<city>BERLIN</city>'+
'<latitude>52.30</latitude>'+
'<longitude>13.25</longitude>'+
'</cities>'+
'</smeterengine>',
			cache: false,
			success: function( result) {
				alert(result);
				try {
					$( "#textParse").html( result);
				} catch(e) {
					$( "#textParse").html( 'Unknown metadata format found');
				}
			},
			error: function( jqxhr, textStatus, error) {
				alert(textStatus);
				$( "#textParse").html( 'Please download ' + this.url + ' and past the content here.');
//							alert( this.url);
			},
		});*/

$.ajax({
    url: 'http://www.vattenfall.de/SmeterEngine/networkcontrol',
//    url: 'http://www.vattenfall.de/SmeterEngine/energyProjection',
    data: 
'<smeterengine>'+
'<scale>DAY</scale>'+
'<city>BERLIN</city>'+
'<district>'+
'<time_period begin="2013-06-12 15:40:00" end="2013-06-12 17:00:00" time_zone="CET"/>'+
'</district>'+
'</smeterengine>',
//'<smeterengine start="2013-06-12T09:00:00" end="2013-06-12T11:00:00">'+
//'<cities>'+
//'<city>BERLIN</city>'+
//'<latitude>52.30</latitude>'+
//'<longitude>13.25</longitude>'+
//'</cities>'+
//'</smeterengine>',
    type: 'POST',
    contentType: "text/xml",
    dataType: "text/xml",
    success : function( result) {
				alert(result);
			},
    error : function (xhr, ajaxOptions, thrownError){  
        console.log(xhr.status);          
        console.log(thrownError);
				alert(ajaxOptions);
    } 
}); 

	} catch( e) {
		alert(e);
	}
}

//----------------------------

getEnergyData();
getWeatherData();
