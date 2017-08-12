$(document).ready(function() {
	var path = chrome.extension.getURL("src/schedule/schedule.css");
	$('head').append($('<link>').attr("rel", "stylesheet").attr("type", "text/css").attr("href", path));

});

jQuery.get("myschedule.html", function(data) {

	var scheddata = data;
	if (scheddata.indexOf("Student and Parent Sign In") == -1 && (window.location == "https://powerschool.isb.ac.th/guardian/home.html" || window.location == "http://powerschool.isb.ac.th/guardian/home.html" || window.location == "https://powerschool.isb.ac.th/guardian/home.html#d" || window.location == "http://powerschool.isb.ac.th/guardian/home.html#d")) {

		//grab table, and adds anchor for link.
		var schedx = scheddata.match(/<table[^]*<\/table>[^]*<!-- end student content -->/g)[0];
		console.log(schedx)
		schedx = "<a id='d'></a>".concat(schedx);

		//replace contents with schedule and apply css
		// var tables = document.getElementById("nav-secondary")
		var tables = document.getElementsByTagName("table")[3];
		// tables.innerHTML = "<br><p style='text-align:center; font-size:20px'>Schedule View (Beta)</p> <br> " + schedx;
		tables.innerHTML = schedx
		tables.className = "gridSched";

		//get scheduleBreak classes and apply black
		var schedBlack = document.getElementsByClassName("scheduleBreak");
		while(schedBlack.length != 0){
			schedBlack[0].className = "scheduleBreakTick";
		}



		//scrolling function when come from other page.
		$(document).ready(function() {
			if (window.location == "https://powerschool.isb.ac.th/guardian/home.html#d" || window.location == "http://powerschool.isb.ac.th/guardian/home.html#d") {

				$('html, body').animate({
					scrollTop : $("#d").offset().top
				}, 'fast');
			}
		});

	}

});

//change schedule to enhanced schedule
if (window.location == "https://powerschool.isb.ac.th/guardian/home.html" || window.location == "http://powerschool.isb.ac.th/guardian/home.html") {
	document.getElementById("btn-mySchedule").innerHTML = "<a href='#d'>Enhanced Schedule</a>";
} else {
	document.getElementById("btn-mySchedule").innerHTML = "<a href='home.html#d'>Enhanced Schedule</a>";
}
