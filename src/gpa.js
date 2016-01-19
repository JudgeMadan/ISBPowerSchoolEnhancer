var change = document.getElementsByTagName("tbody")[2];
var semester = "S2";

function calcGPA(semester) {
	//run-specific vars
	var gradeData = document.getElementsByTagName("tbody")[1].innerHTML;
	var classData = document.getElementsByTagName("tbody")[1].innerHTML;
	var letterGrades = [];
	var className = [];
	var GP = 0;
	var GPA;

	if (semester == "S1") {
		//initial parsing to find s1 grades
		classData = classData.match(/notInSession.*\n.*<td align="left">.*<br>/g);
		for ( i = 0; i < classData.length; i++) {
			classData[i] = classData[i].match(/"left">.*<br>/g)[0];
		}
	} else if (semester == "S2") {
		classData = classData.match(/"left">.*<br>/g);

	} else {
		alert("ERROR!");
	}

	for ( i = 0; i < classData.length; i++) {
		classData[i] = classData[i].slice(7)
	}
	/*
	*
	* GRADES
	*/

	//get array of regex matches

	var gradeDataString = "scores\.html.*" + semester + ".*<\/a>";
	var gradeDataMatch = new RegExp(gradeDataString, 'g');
	gradeData = gradeData.match(gradeDataMatch);

	//formatting regex matches to grab grades
	for ( i = 0; i < gradeData.length; i++) {

		//isolate grades
		gradeData[i] = gradeData[i].slice(0, -4);
		gradeData[i] = gradeData[i].substring(gradeData[i].indexOf(">") + 1, gradeData[i].length);
		//recheck grades and isolate letters
		gradeData[i] = gradeData[i].match(/[ABCDF][+-]?/g);
	}
	/*
	 * PROCESSING
	 */
	for ( i = 0; i < gradeData.length; i++) {
		//if grades exist then push class and grades into array.
		if (gradeData[i]) {
			letterGrades.push(gradeData[i][0]);
			className.push(classData[i])
		}
	}

<<<<<<< HEAD
	//IB WEIGHT
	for ( i = 0; i < className.length; i++) {
		if ((className[i].substring(0, 2) == "IB" || className[i].substring(0, 2) == "AP") && (className[i] != "IB Math Studies SL1" && className[i] != "IB Math Studies SL2")) {
			GP += 0.5;
		}
=======
//IB WEIGHT
for ( i = 0; i < className.length; i++) {
	if ((className[i].substring(0, 2) == "IB" || className[i].substring(0, 2) == "AP") && (className[i] != "IB Math Studies SL1" && className[i] != "IB Math Studies SL2")) {
		GP += 0.5;
>>>>>>> origin/master
	}
	console.log(letterGrades);
	console.log(className);
	//GPA CALC
	//Use switch statement for legibility
	function calcGP(grade) {
		switch (grade) {
		case "A+":
			GP += 4.3;
			break;
		case "A":
			GP += 4;
			break;
		case "A-":
			GP += 3.7;
			break;
		case "B+":
			GP += 3.3;
			break;
		case "B":
			GP += 3;
			break;
		case "B-":
			GP += 2.7;
			break;
		case "C+":
			GP += 2.3;
			break;
		case "C":
			GP += 2;
			break;
		case "C-":
			GP += 1.7;
			break;
		case "D+":
			GP += 1.3;
			break;
		case "D":
			GP += 1;
			break;
		case "D-":
			GP += 0.7;
			break;
		default:
			break;

		}
	}

	for ( i = 0; i < letterGrades.length; i++) {
		calcGP(letterGrades[i]);
	}

	GPA = GP / letterGrades.length;


	return GPA;
}


if(semester == "S1"){
	change.innerHTML = "<p style='font-family:HelveticaNeue-Light, Helvetica Neue, Helvetica;font-size: 20px;text-align:center;'>(" + semester + ") GPA: " + parseFloat(calcGPA("S1")).toFixed(3) +"</p>";
}
else if(semester == "S2"){
	var S2GPA = calcGPA("S2");
	var S1GPA = calcGPA("S1");
	var averageGPA = (S1GPA + S2GPA)/2;
	
	change.innerHTML = "<p style='font-family:HelveticaNeue-Light, Helvetica Neue, Helvetica;font-size: 16px;text-align:center;line-height:20px;'>(S1+S2) GPA: " + parseFloat(averageGPA).toFixed(3) + "&nbsp;&nbsp;  (S1) GPA: " + parseFloat(S1GPA).toFixed(3) +  "</p><p style='font-family:HelveticaNeue-Light, Helvetica Neue, Helvetica;font-size: 20px;text-align:center;'>(S2) GPA: " + parseFloat(S2GPA).toFixed(3) + "</p>";

}
else{
	alert("ERROR! INVALID SEMESTER");
}
