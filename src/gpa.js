var data = document.documentElement.outerHTML;

//get array of regex matches
data = data.match(/scores\.html.*<\/a>/g);

//formatting regex matches to grab grades
for (i = 0; i < data.length; i++) {
	data[i] = data[i].slice(0,-4);
	data[i]=data[i].substring(data[i].indexOf(">")+1,data[i].length);
}

console.log(data); 

//grade check regex
// /[ABCDF].?/g