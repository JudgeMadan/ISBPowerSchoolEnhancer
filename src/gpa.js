class calcGPA {
	//this is not a 'proper' class, need to fix on later versions. Need to get this out as soon as possible due to the PS update.
	constructor(semester, tbodynum){
		this.semester = semester;
		this.tbody = document.getElementsByTagName("tbody")[tbodynum].innerHTML.match(/<td align="left">.*<br>.*\n.*S1.*<\/td>/g);
		this.grades= [];
		this.cName = [];
		this.gpa = 0;
	}
	getGrades(){
		//finds grades and makes sure they exist. If they don't then the index is null.
		for(var i=0; i < this.tbody.length; i++){
			this.grades[i] = this.tbody[i].match(/S1">.*<\/a>/g)[0].substring(4,6).match(/[ABCDEF][+-]?/g);
			//if they exist, properly format them.
			if(this.grades[i]){
				this.grades[i] = this.grades[i][0]
			}
		}
	}
	getClassName(){
		for(var i=0; i < this.tbody.length; i++){
			this.cName[i] = this.tbody[i].match(/left">.{0,100}&nbsp;/g)[0].substring(6);
		}
	}
	grades2GPA(){
		var dictionary = {'A+':4.3, 'A':4.0, 'A-':3.7, 'B+':3.3, 'B':3.0, 'B-':2.7, 'C+':2.3, 'C':2.0, 'C-':1.7, 'D+':1.3, 'D':1.0, 'F':0}
		for(var i = 0; i < this.grades.length; i++){
			this.gpa += dictionary[this.grades[i]]
			if ((this.cName[i].substring(0, 2) == "IB" || this.cName[i].substring(0, 2) == "AP") && (this.cName[i].substring(0,15) != "IB Math Studies")) {
				this.gpa += 0.5;
			}
		}
		this.gpa = this.gpa/this.grades.length;
	}
	compareClassandGrades(){
		var tempcName = [];
		var tempGrades = [];
		if(this.cName.length == this.grades.length){

			//push if exist
			for(var i=0; i < this.cName.length; i++){
				if(this.grades[i]){
					tempcName.push(this.cName[i]);
					tempGrades.push(this.grades[i]);
				}
			}
			this.cName = tempcName;
			this.grades = tempGrades;
		}
		else{
			throw "cName.length has to be the same length as Grades.length"
		}
	}
	calc(){
		this.getGrades();
		this.getClassName();
		this.compareClassandGrades();
		this.grades2GPA();
		return this.gpa;
	}
	showGPA(){
		var change = document.getElementsByTagName("tbody")[2];
		change.innerHTML = "<p style='font-family:HelveticaNeue-Light, Helvetica Neue, Helvetica;font-size: 20px;text-align:center;'>(S" + this.semester + ") GPA: " + parseFloat(this.gpa).toFixed(3) +"</p>";
	}
	dump_vars(){
		return([this.grades, this.cName, this.gpa])
	}
}

var GPA = new calcGPA(semester=1,tbodynum=1); //semester use TBD
GPA.calc();
GPA.showGPA();
console.log(GPA.dump_vars())
