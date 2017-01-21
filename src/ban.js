d = document.getElementById('userName').innerHTML.match(/<span>\n.*\n.*<span>/g)[0];
console.log(d);

// if(d.includes("Thantham") && d.includes("Madan")){
// 	document.getElementsByTagName("html")[0].innerHTML = "You are not allowed to use the ISB PowerSchool Enhancer extension."
// }
