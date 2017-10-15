class calcGPA {
	//this is not a 'proper' class, need to fix on later versions. Need to get this out as soon as possible due to the PS update.
	constructor(semester){
		this.semester = semester;
		this.tbody = document.getElementsByClassName("linkDescList")[0].innerHTML.match(/<td align="left">.*<br>.*\n.*S1.*<\/td>/g);
		this.grades= [];
		this.grades2 = [];
		this.cName = [];
		this.gpa = 0;
		this.gpa2 = 0;
	}
	getGrades(){
		//finds grades and makes sure they exist. If they don't then the index is null.
		for(var i=0; i < this.tbody.length; i++){
			if(this.tbody[i].match(/S1".*<\/a>/g)){
				this.grades[i] = this.tbody[i].match(/S1".*<\/a>/g)[0].substring(4).match(/[1234567]/g);
				//if they exist, properly format them.
				if(this.grades[i]){
					this.grades[i] = this.grades[i][0]
				}
			}
		}
	}
	getClassName(){
		for(var i=0; i < this.tbody.length; i++){
			this.cName[i] = this.tbody[i].match(/left">.{0,100}&nbsp;/g)[0].substring(6);
		}
	}
	grades2GPA_updated(){
		for(var i = 0; i < this.grades.length; i++){
			// console.log(this.grades[i])
			this.gpa += parseInt(this.grades[i]);
		}
		this.gpa = this.gpa/this.grades.length;
	}
	grades2GPA_traditional(){
		var dic1 = {"7": "A+", "6":"A", "5":"B+", "4":"C+", "3":"D+", "2":"F", "1":"F"}
		for(var i = 0; i < this.grades.length; i++){
				this.grades2[i] = dic1[this.grades[i]];
		}


		var dictionary = {'A+':4.3, 'A':4.0, 'A-':3.7, 'B+':3.3, 'B':3.0, 'B-':2.7, 'C+':2.3, 'C':2.0, 'C-':1.7, 'D+':1.3, 'D':1.0, 'D-':0.7, 'F':0}
		for(var i = 0; i < this.grades2.length; i++){
			this.gpa2 += dictionary[this.grades2[i]]
			if ((this.cName[i].substring(0, 2) == "IB" || this.cName[i].substring(0, 2) == "AP") && (this.cName[i].substring(0,15) != "IB Math Studies")) {
				this.gpa2 += 0.5;
			}
		}
		this.gpa2 = this.gpa2/this.grades2.length;
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
		this.grades2GPA_updated();
		this.grades2GPA_traditional();
		return this.gpa;
	}
	showGPA(){
		var change = document.getElementsByTagName("tbody")[2];
		var error_report = "<p style='font-family:Times New Roman; text-align:center; font-size:11px; margin-top:-10px;'>Report GPA Calculation Error</p>"
		var gpa_display = "<p style='font-family:HelveticaNeue-Light, Helvetica Neue, Helvetica;font-size: 20px;text-align:center; margin-bottom:-5px;'>(S" + this.semester + ") GPA: " + parseFloat(this.gpa).toFixed(3) +"<br> Traditional GPA: " + parseFloat(this.gpa2).toFixed(3) + "</p>";
		change.innerHTML = gpa_display;
	}
	dump_vars(){
		return([this.grades, this.cName, this.gpa, this.grades2, this.gpa2])
	}
	implement_error_reporting(){
		// var placeholder = document.getElementById('branding-powerschool');
		// var get_html = `<script>function getPageHTML()
		// 	{
		// 	  //Get the HTML and add to a form element before submitting the form.
		// 	  // document.PageContent.HTML.value=document.all[0].innerHTML;
		// 	  // document.PageContent.submit();
		// 		document.write('hi');
		// 	}</script>`;
		// placeholder.innerHTML = placeholder.innerHTML+get_html;

	}
}

var GPA = new calcGPA(semester=1); //semester use TBD
GPA.implement_error_reporting();
GPA.calc();
GPA.showGPA();
console.log(GPA.dump_vars())

// console.log(document.getElementById('branding-powerschool').innerHTML)
