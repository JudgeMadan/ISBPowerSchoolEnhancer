var calcGPA = function(a, b) {
  this.semester = a;
  this.tbody = document.getElementsByTagName("tbody")[b].innerHTML.match(/<td align="left">.*<br>.*\n.*S2.*<\/td>/g);
  this.grades = [];
  this.cName = [];
  this.gpa = 0;
};
calcGPA.prototype.getGrades = function() {
  for (var a = 0;a < this.tbody.length;a++) {
    this.grades[a] = this.tbody[a].match(/S2".*<\/a>/g)[0].substring(17, 19).match(/[ABCDEF][+-]?/g), this.grades[a] && (this.grades[a] = this.grades[a][0]);
  }
};
calcGPA.prototype.getClassName = function() {
  for (var a = 0;a < this.tbody.length;a++) {
    this.cName[a] = this.tbody[a].match(/left">.{0,100}&nbsp;/g)[0].substring(6);
  }
};
calcGPA.prototype.grades2GPA = function() {
  for (var a = {"A+":4.3, A:4.0, "A-":3.7, "B+":3.3, B:3.0, "B-":2.7, "C+":2.3, C:2.0, "C-":1.7, "D+":1.3, D:1.0, "D-":0.7, F:0}, b = 0;b < this.grades.length;b++) {
    this.gpa += a[this.grades[b]], "IB" != this.cName[b].substring(0, 2) && "AP" != this.cName[b].substring(0, 2) || "IB Math Studies" == this.cName[b].substring(0, 15) || (this.gpa += 0.5);
  }
  this.gpa /= this.grades.length;
};
calcGPA.prototype.compareClassandGrades = function() {
  var a = [], b = [];
  if (this.cName.length == this.grades.length) {
    for (var c = 0;c < this.cName.length;c++) {
      this.grades[c] && (a.push(this.cName[c]), b.push(this.grades[c]));
    }
    this.cName = a;
    this.grades = b;
  } else {
    throw "cName.length has to be the same length as Grades.length";
  }
};
calcGPA.prototype.calc = function() {
  this.getGrades();
  this.getClassName();
  this.compareClassandGrades();
  this.grades2GPA();
  return this.gpa;
};
calcGPA.prototype.showGPA = function() {
  var a = document.getElementsByTagName("tbody")[2], b = "<p style='font-family:HelveticaNeue-Light, Helvetica Neue, Helvetica;font-size: 20px;text-align:center;'>(S" + this.semester + ") GPA: " + parseFloat(this.gpa).toFixed(3) + "</p>";
  a.innerHTML = b;
};
calcGPA.prototype.dump_vars = function() {
  return [this.grades, this.cName, this.gpa];
};
calcGPA.prototype.implement_error_reporting = function() {
    // var placeholder = document.getElementById('branding-powerschool');
    // var get_html = `<script>function getPageHTML()
    // 	{
    // 	  //Get the HTML and add to a form element before submitting the form.
    // 	  // document.PageContent.HTML.value=document.all[0].innerHTML;
    // 	  // document.PageContent.submit();
    // 		document.write('hi');
    // 	}</script>`;
    // placeholder.innerHTML = placeholder.innerHTML+get_html;
};
var GPA = new calcGPA(semester = 2, tbodynum = 1);
GPA.implement_error_reporting();
GPA.calc();
GPA.showGPA();
console.log(GPA.dump_vars());
// console.log(document.getElementById('branding-powerschool').innerHTML)
