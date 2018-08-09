function checkTime (i) {
	if (i < 10 ) {
		i = "0" + i
	}

	return i;
}

function startTIme() {

	var today = new Date()
		

	var h = today.getHours()
	var m = today.getMinutes()
	var s = today.getSeconds()


	if (h > 12) {
		h = h -12
	}


	m = checkTime(m)
	s = checkTime(s)



	document.getElementById("clock").innerHTML = h + ":" + m + ":" + s




	setTimeout( function() {
		startTIme()
	}, 500)
}

document.getElementById("clock").addEventListener("onload", startTIme(), false)
