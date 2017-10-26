# ISB PowerSchool Enhancer

## Features
- GPA display (updated for 1-7 scale)
- Weekly schedule

## Install from Chrome Store (Recommended)
Download the extension from the Chrome Store [here](https://goo.gl/K1UcBr).

## As a Bookmarklet

Drag [this](javascript:(function(){var d=function(){var a=Array.prototype.map.call(document.getElementsByClassName("linkDescList grid"),function(a){return Array.prototype.map.call(a.querySelectorAll("td"),function(a){return a.innerHTML})});a=function(a,b){for(var c=[],e=0,f=a.length;e<f;)c.push(a.slice(e,e+=b));return c}(a[0],16);for(var e=0,f=0,k={7:4.3,6:4,5:3.3,4:2.3,3:1.3,2:0,1:0},h=0,b=0;b<a.length;b++){var c=a[b][12].match(/<a\s+href="[\S\s]*?">[\S\s]*?<\/a>/gi);if(null===c)break;c=parseInt(c[0].replace(/(<\/?[^>]+>)/gi,""));
e++;f+=k[c];"IB"!=a[b][11].substring(0,2)&&"AP"!=a[b][11].substring(0,2)||"IB Math Studies"==a[b][11].substring(0,15)||(f+=.5);h+=c}return[h/e,f/e]}(),g="(S1) GPA: "+d[0].toFixed(3);d="Traditional GPA: "+d[1].toFixed(3);var l=document.createElement("p");l.style.fontSize="20px";l.style.fontFamily="Helvetica";l.style.textAlign="center";l.style.marginBottom="-5px";l.appendChild(document.createTextNode(g));l.appendChild(document.createElement("br"));l.appendChild(document.createTextNode(d));document.getElementsByTagName("tbody")[2].appendChild(l);})();) link into your browser's bookmarks bar and click on it when you need to see your GPA!

## Installing as an Unpacked Extension 
**Note:** Only do this if you want to help develop this extension!

1. Download the repository.
2. Go to chrome://extensions/ and check "Developer Mode".
3. Click [Load unpacked extension...] and navigate to the repository's folder.
4. Make changes and reload the extension as needed.
