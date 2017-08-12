jQuery.get("https://judgemadan.com/psnotices.html", function(data) {
	if (window.location == "https://powerschool.isb.ac.th/guardian/home.html" || window.location == "http://powerschool.isb.ac.th/guardian/home.html" || window.location == "https://powerschool.isb.ac.th/guardian/home.html#d" || window.location == "http://powerschool.isb.ac.th/guardian/home.html#d") {
		var tables = document.getElementById("afterH1")
		tables.innerHTML = data
	}

});


// jQuery.get("https://judgemadan.com/pagerules", function(data) {
// 		//process array
// 		var actualData = [];
// 		data = data.split("\n");
// 		for(i=0; i<data.length; i++){
// 			index = data[i].indexOf("[|]");
// 			if(index != -1){
// 				actualData.push([data[i].substring(0, index), data[i].substring(index+3)])
// 			}
// 		}
// 		console.log(actualData)
//
//
// 		//[[location, pagerule],[..,..]]
// 		for(i=0; i<actualData.length; i++){
// 			if(window.location==actualData[i]){
//
// 			}
// 		}
// });
