/*
Liest Tabellen durch .querySelectorAll

*/
var sortierenTabelle = function(){
	var roheTabelle = document.querySelectorAll('#status-overview');
	var klar = roheTabelle[0];
	//einzelne segmente aus der klar holen
	//kop = head, ko = body, z = zeile, s = spalte, i = zelleninhalt, n = anzahl
	var kopfi = klar.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0].getElementsByTagName('th')[0];
	var ko = klar.getElementsByTagName('tbody')[0];
	var koz = ko.rows;
	console.log(koz);
	var nkoz = koz.length;
	console.log(nkoz);
	//Testfall
	if(nkoz == 0){
		console.log('es gibt nur eine oder weniger zeilen');
		return;
	}
	//da ich array sort nutzen möchte erstelle ich jetzt ein array
	var inhalt = new Array(nkoz);
	
	
	console.log('aktuell läuft er durch');
};

/*
Hier soll mal ein sortieralgorythmuss ohne Fremd framework draus werden...
(das ist nerviger als erwartet...)
*/