//-----------------------------------------------------------------------

// storageSpace: Stauvolumen in m³
// q16: Q16 in l/s
// qMax: Qmax in l/s
// data: in l /s

// storageSpace
// Eine Möglichkeit den Energieverbrauch bei der Abwasserreinigung zu flexibilisieren,
// ist die temporäre Speicherung der Mischwassers (Abwasser und Regenwasser) im Kanalnetz.
// Abwasser und Regenwasser werden gesammelt und durch das Kanalnetz zu den Pumpwerken geleitet.
// Zu jedem Pumpwerk ist das maximale Stauvolumen des zugehörigen Kanalnetzes in Kubikmetern gegeben.

// q16
// Sofern genügend Abwasser im Kanal vorhanden ist, soll das Pumpwerk mindestens für eine Stunde
// am Tag die Tagesspitze (Q16) fördern.

// qMax
// Die maximale Förderung des Pumpwerkes beträgt Qmax.

// Info
// * Für das Abwasser ist eine maximale Verweilzeit von 6 Stunden im Kanalnetz vorgegeben.
// * Die Zulaufmengen des Abwassers von 16 Pumpwerken (Einzugsgebiet Klärwerk Ruhleben) stehen zur Verfügung.
// * Nach den Pumpwerken wird das Abwasser durch ein Druckrohrnetz (Abwasserdruckleitungen) zum Klärwerk geleitet.
// * Für das Klärwerk ist ein minimaler Zulauf von 1.000 l/s und ein maximaler Zulauf von 6.700 l/ s vorgegeben.
// * Für die Abwasserbehandlung im Klärwerk wird pro m3 Abwasser eine zulaufabhängige Energiemenge von 0,3 kWh veranschlagt.
// * Dieser zulaufabhängige Energieaufwand zur Reinigung des Abwassers fällt erst ab einem Zulauf von mehr als 2.000 l/s am Klärwerk an.
// * Unter dieser Grenze wird der Aufwand durch die Grundlast des Klärwerks abgedeckt.
// * Es wird vereinfachend davon ausgegangen, dass drei Stunden nach Eintreffen des Abwassers die Energie für das entsprechende Volumen benötigt wird.

// calc
// ZulaufKlärwerk: l/s
// Zulauf in: m3 /15 min  <-  <l/s> / 1000 * 60 * 15
// Energieverbrauch: in kWh (in 15 min)  <-  <m3 /15 min> / 2
// Leistung: in KW  <-  <in kWh (in 15 min)> * 4

export pumpStations = [
	{
		title: 'Pumpwerk 1',
		storageSpace: 10300,
		q16: 701,
		qMax: 1403,
	},
	{
		title: 'Pumpwerk 2',
		storageSpace: 8812,
		q16: 210,
		qMax: 420,
	},
	{
		title: 'Pumpwerk 3',
		storageSpace: 7850,
		q16: 434,
		qMax: 868,
	},
	{
		title: 'Pumpwerk 4',
		storageSpace: 2532,
		q16: 106,
		qMax: 212,
	},
	{
		title: 'Pumpwerk 5',
		storageSpace: 14600,
		q16: 123,
		qMax: 247,
	},
	{
		title: 'Pumpwerk 6',
		storageSpace: 7390,
		q16: 250,
		qMax: 500,
	},
	{
		title: 'Pumpwerk 7',
		storageSpace: 5880,
		q16: 214,
		qMax: 427,
	},
	{
		title: 'Pumpwerk 8',
		storageSpace: 4069,
		q16: 250,
		qMax: 500,
	},
	{
		title: 'Pumpwerk 9',
		storageSpace: 3488,
		q16: 97,
		qMax: 194,
	},
	{
		title: 'Pumpwerk 10',
		storageSpace: 1914,
		q16: 299,
		qMax: 597,
	},
	{
		title: 'Pumpwerk 11',
		storageSpace: 1770,
		q16: 92,
		qMax: 184,
	},
	{
		title: 'Pumpwerk 12',
		storageSpace: 4700,
		q16: 50,
		qMax: 101,
	},
	{
		title: 'Pumpwerk 13',
		storageSpace: 8583,
		q16: 318,
		qMax: 635,
	},
	{
		title: 'Pumpwerk 14',
		storageSpace: 4094,
		q16: 236,
		qMax: 472,
	},
	{
		title: 'Pumpwerk 15',
		storageSpace: 2902,
		q16: 394,
		qMax: 788,
	},
	{
		title: 'Pumpwerk 16',
		storageSpace: 1742,
		q16: 200,
		qMax: 399,
	},
];

//-----------------------------------------------------------------------
