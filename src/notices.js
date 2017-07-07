jQuery.get("https://judgemadan.com/psnotices.html", function(data) {
	if (window.location == "https://powerschool.isb.ac.th/guardian/home.html" || window.location == "http://powerschool.isb.ac.th/guardian/home.html" || window.location == "https://powerschool.isb.ac.th/guardian/home.html#d" || window.location == "http://powerschool.isb.ac.th/guardian/home.html#d") {
		var tables = document.getElementById("afterH1")
		tables.innerHTML = data
	}

});
