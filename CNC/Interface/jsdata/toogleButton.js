/*
Erkennt Buttons durch .getElementById anhand der ID welche in Filltable
durchnummeriert wird.
.innerHTML wird zum prüfen des inhaltes genutzt und zum verändern des
Selbigen.
Desweiteren wird eine farbliche änderung bei klick erwirkt
*/
function toogleButton(button_id){ 
	var taste = document.getElementById(button_id);
	if(taste.innerHTML == "Start"){
		taste.innerHTML = "Stop";
		taste.style.backgroundColor = "red";
	}
	else{
		taste.innerHTML = "Start";
		taste.style.backgroundColor = "green";
	}
};