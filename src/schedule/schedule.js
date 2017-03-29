$(document).ready(function() {
                  var a = chrome.extension.getURL("src/schedule/schedule.css");
                  $("head").append($("<link>").attr("rel", "stylesheet").attr("type", "text/css").attr("href", a));
                  });
jQuery.get("myschedule.html", function(a) {
           if (-1 == a.indexOf("Student and Parent Sign In") && ("https://powerschool.isb.ac.th/guardian/home.html" == window.location || "http://powerschool.isb.ac.th/guardian/home.html" == window.location || "https://powerschool.isb.ac.th/guardian/home.html#d" == window.location || "http://powerschool.isb.ac.th/guardian/home.html#d" == window.location)) {
           //grab table, and adds anchor for link.
           a = a.match(/<table[^]*<\/table>/g)[0];
           a = "<a id='d'></a>".concat(a);
           //get scheduleBreak classes and apply black styling
           var b = document.getElementsByTagName("table")[3];
           b.innerHTML = a;
           b.className = "gridSched";
           for (a = document.getElementsByClassName("scheduleBreak");0 != a.length;) {
           a[0].className = "scheduleBreakTick";
           }
           //scrolling function when come from other page.
           $(document).ready(function() {
                             "https://powerschool.isb.ac.th/guardian/home.html#d" != window.location && "http://powerschool.isb.ac.th/guardian/home.html#d" != window.location || $("html, body").animate({scrollTop:$("#d").offset().top}, "fast");
                             });
           }
           });
//change schedule to enhanced schedule
"https://powerschool.isb.ac.th/guardian/home.html" == window.location || "http://powerschool.isb.ac.th/guardian/home.html" == window.location ? document.getElementById("btn-mySchedule").innerHTML = "<a href='#d'>Enhanced Schedule</a>" : document.getElementById("btn-mySchedule").innerHTML = "<a href='home.html#d'>Enhanced Schedule</a>";
