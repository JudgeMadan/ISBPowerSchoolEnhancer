if (typeof InstallTrigger !== 'undefined') {
  // Browser is Firefox
  var path = browser.extension.getURL('src/schedule/schedule.css');
} else {
  // Browser is Chrome
  var path = chrome.extension.getURL('src/schedule/schedule.css');
}

$('head').append($('<link>').attr('rel', 'stylesheet').attr('type', 'text/css').attr('href', path));

// Easy HTTP requests without jQuery
// from https://stackoverflow.com/a/22076667
var HttpClient = function () {
  this.get = function (aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function () {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
      aCallback(anHttpRequest.responseText);
    }
    anHttpRequest.withCredentials = true;
    anHttpRequest.open('GET', aUrl, true);
    anHttpRequest.send(null);
  }
}

var client = new HttpClient();
var homepage = 'https://powerschool.isb.ac.th/guardian/home.html';

client.get('https://powerschool.isb.ac.th/guardian/myschedule.html', function (scheddata) {

  // Check if request yielded a login instead of a sign in page.
  if (scheddata.indexOf('Student and Parent Sign In') == - 1
  && (window.location == homepage || window.location == (homepage + '#d'))) {

    // Grab table, add anchor for link.
    var schedx = scheddata.match(/<table[^]*<\/table>[^]*<!-- end student content -->/g) [0];
    schedx = '<a id=\'d\'></a>' + schedx;

    // Replace contents with schedule and apply CSS.
    var tables = document.getElementsByTagName('table') [3];
    tables.innerHTML = schedx;
    tables.className = 'gridSched';

    // Get scheduleBreak classes and apply black styling.
    var schedBlack = document.getElementsByClassName('scheduleBreak');
    while (schedBlack.length != 0) {
      schedBlack[0].className = 'scheduleBreakTick';
    }
  }
});

// Change schedule button to enhanced schedule.
if (window.location == homepage) {
  document.getElementById('btn-mySchedule').innerHTML = '<a href=\'#d\'>Enhanced Schedule</a>';
} else {
  document.getElementById('btn-mySchedule').innerHTML = '<a href=\'home.html#d\'>Enhanced Schedule</a>';
}
