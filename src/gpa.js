Object.defineProperty(Array.prototype, "chunk", {value:function(chunkSize) {
  var array = this;
  return [].concat.apply([], array.map(function(elem, i) {
    return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
  }));
}});

var getGPA = function() {
  var dataTable = Array.prototype.slice.call(document.getElementsByClassName("linkDescList grid"));
  var dataArray = [];
  $(dataTable).each(function() {
    var arrayOfThisRow = [];
    var tableData = $(this).find("td");
    if (tableData.length > 0) {
      tableData.each(function() {
        arrayOfThisRow.push($(this).text());
      });
      dataArray.push(arrayOfThisRow);
    }
  });

  dataArray = dataArray[0].chunk(16);
  console.log(dataArray);
  console.log("Number of rows: " + dataArray.length);
  var numclasses = 0;
  var gpa2 = 0;
  for (var i = 0; !isNaN(parseInt(dataArray[i][12][0])); i++, numclasses++) {}

  var dictionary = {7:4.3, 6:4, 5:3.3, 4:2.3, 3:1.3, 2:0, 1:0};
  console.log("Number of classes: " + numclasses);
  for (var gpa = 0, i = 0, current = 0; i < numclasses; i++) {
    current = parseInt(dataArray[i][12][0]);
    gpa2 += dictionary[current];
    if ((dataArray[i][11].substring(0, 2) == "IB" || dataArray[i][11].substring(0, 2) == "AP") && dataArray[i][11].substring(0, 15) != "IB Math Studies") {
      gpa2 += 0.5;
    }
    gpa += current;
  }

  return [gpa / numclasses, gpa2 / numclasses];
};

var main = function() {
  var change = document.getElementsByTagName("tbody")[2];
  var GPAs = getGPA();
  var gpa_display = "(S1) GPA: " + GPAs[0].toFixed(3);
  var gpa_display2 = "Traditional GPA: " + GPAs[1].toFixed(3);

  var disp = document.createElement("P");                       // Create a <p> element

  disp.style.fontSize = "20px";
  disp.style.fontFamily = "Helvetica Neue";
  disp.style.textAlign = "center";
  disp.style.marginBottom =  "-5px";

  disp.appendChild(document.createTextNode(gpa_display));
  disp.appendChild(document.createElement("br"));
  disp.appendChild(document.createTextNode(gpa_display2));

  change.appendChild(disp);

};
main();